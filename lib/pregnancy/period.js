const scales = require('./dates.json');

/**
 * Calculates Period days.
 *
 * @param {string} startDate - First Day of Your Last Period .
 * @param {number} periodDays - How long did it last?
 * @param {number} cycleLength - Average Length of Cycles.
 * @param {number} month - Upcoming Months.
 * @returns {Array} Dates Array.
 */

try {
    function period(startDate, periodDays, cycleLength, month) {
        if (typeof startDate !== "string") {
            return "Invalid startDate input type (use 'string')";
        }

        if (typeof periodDays !== "number" && typeof cycleLength !== "number" && typeof month !== "number") {
            return "Invalid periodDays or cycleLength or month input type (use 'number')";
        }

        const periodStart = [];
        const periodLast = [];
        const ovalutionStart = [];
        const ovalutionLast = [];

        function getPeriodStart(startDate, cycleLength, months) {
            let periodFirstDay = new Date(startDate);
            for (let i = 1; i <= months; i++) {
                periodStart.push(periodFirstDay.toLocaleDateString("en-US"));
                periodFirstDay.setDate(periodFirstDay.getDate() + cycleLength);
            }
        }

        function getPeriodEnd(startDate, periodDays, cycleLength, months) {
            let periodLastDay = new Date(startDate);
            for (let i = 1; i <= months; i++) {
                if (i == 1) {
                    periodLastDay.setDate(periodLastDay.getDate() + periodDays - 1);
                    periodLast.push(periodLastDay.toLocaleDateString("en-US"));
                } else {
                    periodLastDay.setDate(periodLastDay.getDate() + cycleLength);
                    periodLast.push(periodLastDay.toLocaleDateString("en-US"));
                }
            }
        }

        function getOvulationStart(startDate, cycleLength, months, scaleMatch) {
            let ovalutionFirstDay = new Date(startDate);
            for (let i = 1; i <= months; i++) {
                if (i == 1) {
                    ovalutionFirstDay.setDate(ovalutionFirstDay.getDate() + scaleMatch['value1']);
                    ovalutionStart.push(ovalutionFirstDay.toLocaleDateString("en-US"));
                } else {
                    ovalutionFirstDay.setDate(ovalutionFirstDay.getDate() + cycleLength);
                    ovalutionStart.push(ovalutionFirstDay.toLocaleDateString("en-US"));
                }
            }
        }

        function getOvulationEnd(startDate, cycleLength, months, scaleMatch) {
            let ovalutionLastDay = new Date(startDate);
            for (let i = 1; i <= months; i++) {
                if (i == 1) {
                    ovalutionLastDay.setDate(ovalutionLastDay.getDate() + scaleMatch['value2']);
                    ovalutionLast.push(ovalutionLastDay.toLocaleDateString("en-US"));
                } else {
                    ovalutionLastDay.setDate(ovalutionLastDay.getDate() + cycleLength);
                    ovalutionLast.push(ovalutionLastDay.toLocaleDateString("en-US"));
                }
            }
        }

        getPeriodStart(startDate, cycleLength, month ? month : 3);
        getPeriodEnd(startDate, periodDays, cycleLength, month ? month : 3);

        const scaleMatch = scales.find(el => el.days === cycleLength);
        if (scaleMatch) {
            getOvulationStart(startDate, cycleLength, month ? month : 3, scaleMatch);
            getOvulationEnd(startDate, cycleLength, month ? month : 3, scaleMatch);
        }
        else {
            return "Invalid scale"
        }

        const output = periodStart.map((start, index) => {
            const mostProbableOvulationDays = ovalutionStart[index] ? ovalutionStart[index] + " - " + ovalutionLast[index] : "Not computed";
            return {
                period: start + " - " + periodLast[index],
                mostProbableOvulationDays,
            };
        });

        return output;
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = period;
