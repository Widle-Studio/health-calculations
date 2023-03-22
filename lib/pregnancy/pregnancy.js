const scales = require('./dates.json');
/**
 * Pregnancy Calculator.
 *
 * @param {string} date - First Day of Your Last Period .
 * @param {number} scale - Average Length of Cycles.
 * @returns {number} Pregnancy Date.
 */

try {
    Date.prototype.getWeek = function () {
        const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
        const daysSinceFirstDay = Math.floor((this - firstDayOfYear) / 86400000);
        const weekNumber = Math.floor(daysSinceFirstDay / 7) + 1;
        return weekNumber;
    };
    function formatDate(date) {
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }

    function getMilestone(week) {
        switch (week) {
            case 3:
                return "Baby conceived";
            case 4:
                return "Pregnancy test positive";
            case 6:
                return "Heartbeat detectable by ultrasound";
            case 7:
                return "Heartbeat detectable by ultrasound";
            case 13:
                return "Miscarriage risk decreases";
            case 18:
                return "Baby begins making noticeable movements, can hear sounds, and gender can be found out.";
            case 19:
                return "Baby begins making noticeable movements, can hear sounds, and gender can be found out.";
            case 20:
                return "Baby begins making noticeable movements, can hear sounds, and gender can be found out.";
            case 21:
                return "Baby begins making noticeable movements, can hear sounds, and gender can be found out.";
            case 23:
                return "Premature baby may survive";
            case 28:
                return "Baby can breathe";
            case 38:
                return "Full Term";
            case 39:
                return "Full Term";
            case 40:
                return "Full Term";
            case 41:
                return "Full Term";
            case 42:
                return "Full Term";
            default:
                return "No milestone reached";
        }
    }

    function pregnancy(date, scale) {
        if (typeof date !== "string") {
            return ("Invalid date input type (use 'string')");
        }

        if (typeof scale !== "number") {
            return ("Invalid scale input type (use 'number')");
        }

        const scaleMatch = scales.find(el => el.days === scale);
        if (!scaleMatch) {
            return ('Invalid Scale');
        }

        const currentDay = new Date();
        const currentDateFormatted = formatDate(currentDay);
        const lmp = new Date(date);

        const currentWeek = new Date(currentDay.setDate(currentDay.getDate() - scaleMatch['value2']));
        const week = currentWeek.getWeek();
        const diffInMs = Math.abs(currentDay - lmp);
        const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
        const conceivedDay = new Date(lmp.setDate(lmp.getDate() + scaleMatch['value1'] + 2));
        const conceived = formatDate(conceivedDay);

        if (isNaN(week)) {
            return ("Invalid Week Day");
        }

        const percentagePregnancy = Math.round((diffInDays / 280) * 100);

        const milestone = getMilestone(week);
        const trimester = week <= 12 ? "First Trimester" : week <= 27 ? "Second Trimester" : week <= 42 ? "Third Trimester" : "Invalid Week Day";

        return {
            currentWeek: `${week}`,
            currentDate: `${currentDateFormatted}`,
            conceivedBaby: `${conceived}`,
            pregnancyPercentage: `${percentagePregnancy}`,
            trimester: `${trimester}`,
            milestone: `${milestone}`
        };
    }

}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = pregnancy;