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
function period(startDate, periodDays, cycleLength, month) {
    const periodStart = [];
    const periodLast = [];
    const ovalutionStart = [];
    const ovalutionLast = [];

    let periodFirstDay = new Date(startDate);
    if (month) {
        for (var i = 1; i <= month; i++) {
            periodStart.push(periodFirstDay.toLocaleDateString("en-US"));
            periodFirstDay.setDate(periodFirstDay.getDate() + cycleLength);
        }
    }
    else {
        for (var i = 1; i <= 3; i++) {
            periodStart.push(periodFirstDay.toLocaleDateString("en-US"));
            periodFirstDay.setDate(periodFirstDay.getDate() + cycleLength);
        }
    }

    let periodLastDay = new Date(startDate);
    if (month) {
        for (var i = 1; i <= month; i++) {
            if (i == 1) {
                periodLastDay.setDate(periodLastDay.getDate() + periodDays - 1);
                periodLast.push(periodLastDay.toLocaleDateString("en-US"));
            } else {
                periodLastDay.setDate(periodLastDay.getDate() + cycleLength);
                periodLast.push(periodLastDay.toLocaleDateString("en-US"));
            }
        }
    }
    else {
        for (var i = 1; i <= 3; i++) {
            if (i == 1) {
                periodLastDay.setDate(periodLastDay.getDate() + periodDays - 1);
                periodLast.push(periodLastDay.toLocaleDateString("en-US"));
            } else {
                periodLastDay.setDate(periodLastDay.getDate() + cycleLength);
                periodLast.push(periodLastDay.toLocaleDateString("en-US"));
            }
        }
    }

    let ovalutionFirstDay = new Date(startDate);
    const scaleMatch = scales.find(el => el.days === cycleLength);
    if (scaleMatch) {
        if (month) {
            for (var i = 1; i <= month; i++) {
                if (i == 1) {
                    ovalutionFirstDay.setDate(ovalutionFirstDay.getDate() + scaleMatch['value1']);
                    ovalutionStart.push(ovalutionFirstDay.toLocaleDateString("en-US"));
                } else {
                    ovalutionFirstDay.setDate(ovalutionFirstDay.getDate() + cycleLength);
                    ovalutionStart.push(ovalutionFirstDay.toLocaleDateString("en-US"));
                }
            }
        }
        else {
            for (var i = 1; i <= 3; i++) {
                if (i == 1) {
                    ovalutionFirstDay.setDate(ovalutionFirstDay.getDate() + scaleMatch['value1']);
                    ovalutionStart.push(ovalutionFirstDay.toLocaleDateString("en-US"));
                } else {
                    ovalutionFirstDay.setDate(ovalutionFirstDay.getDate() + cycleLength);
                    ovalutionStart.push(ovalutionFirstDay.toLocaleDateString("en-US"));
                }
            }
        }

        let ovalutionLastDay = new Date(startDate);
        if (month) {
            for (var i = 1; i <= month; i++) {
                if (i == 1) {
                    ovalutionLastDay.setDate(ovalutionLastDay.getDate() + scaleMatch['value2']);
                    ovalutionLast.push(ovalutionLastDay.toLocaleDateString("en-US"));
                } else {
                    ovalutionLastDay.setDate(ovalutionLastDay.getDate() + cycleLength);
                    ovalutionLast.push(ovalutionLastDay.toLocaleDateString("en-US"));
                }
            }
        }
        else {
            for (var i = 1; i <= 3; i++) {
                if (i == 1) {
                    ovalutionLastDay.setDate(ovalutionLastDay.getDate() + scaleMatch['value2']);
                    ovalutionLast.push(ovalutionLastDay.toLocaleDateString("en-US"));
                } else {
                    ovalutionLastDay.setDate(ovalutionLastDay.getDate() + cycleLength);
                    ovalutionLast.push(ovalutionLastDay.toLocaleDateString("en-US"));
                }
            }
        }
    }

    function push() {
        var masterArray = []
        for (let i = 0; i < periodStart.length; i++) {
            const master = { "period": periodStart[i] + " - " + periodLast[i], "mostProbableOvulationDays": ovalutionStart[i] + " - " + ovalutionLast[i] }
            masterArray.push(master)
        }
        return masterArray
    }

    return push()
}

module.exports = period;
