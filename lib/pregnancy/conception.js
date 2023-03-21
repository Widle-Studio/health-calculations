const scales = require('./dates.json');
/**
 * Conception Calculator.
 *
 * @param {string} date - First Day of Your Last Period .
 * @param {number} scale - Average Length of Cycles.
 * @returns {number} Conception  days.
 */

try {
    function conception(date, scale) {
        if (typeof date !== "string") {
            return "Invalid date input type (use 'string')";
        }

        if (typeof scale !== "number") {
            return "Invalid scale input type (use 'number')";
        }

        const day = new Date(date);

        const scaleMatch = scales.find(el => el.days === scale);
        if (!scaleMatch) {
            throw new Error('Invalid Scale');
        }

        const conceptionDay1 = new Date(day.setDate(day.getDate() + scaleMatch['value1']));
        const conceptionDay2 = new Date(day.setDate(day.getDate() + 5));

        const conceptionDay1Formatted = `${conceptionDay1.getDate().toString().padStart(2, '0')}/${(conceptionDay1.getMonth() + 1).toString().padStart(2, '0')}/${conceptionDay1.getFullYear()}`;
        const conceptionDay2Formatted = `${conceptionDay2.getDate().toString().padStart(2, '0')}/${(conceptionDay2.getMonth() + 1).toString().padStart(2, '0')}/${conceptionDay2.getFullYear()}`;

        return `${conceptionDay1Formatted} - ${conceptionDay2Formatted}`;
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = conception;