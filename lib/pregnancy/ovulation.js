const scales = require('./dates.json');
/**
 * Ovulation Calculator.
 *
 * @param {string} date - First Day of Your Last Period .
 * @param {number} scale - Average Length of Cycles.
 * @returns {number} Ovulation  days.
 */

try {
    function ovulation(date, scale) {
        if (typeof date !== "string") {
            return "Invalid date input type (use 'string')";
        }

        if (typeof scale !== "number") {
            return "Invalid scale input type (use 'number')";
        }

        const day = new Date(date);

        const scaleMatch = scales.find(el => el.days === scale);
        if (!scaleMatch) {
            return ('Invalid Scale');
        }

        const ovulationDay1 = new Date(day.setDate(day.getDate() + scaleMatch['value1']));
        const ovulationDay2 = new Date(day.setDate(day.getDate() + 5));
        const ovulationDay3 = new Date(day.setDate(day.getDate() - 3));

        const ovulationDay1Formatted = `${ovulationDay1.getDate().toString().padStart(2, '0')}/${(ovulationDay1.getMonth() + 1).toString().padStart(2, '0')}/${ovulationDay1.getFullYear()}`;
        const ovulationDay2Formatted = `${ovulationDay2.getDate().toString().padStart(2, '0')}/${(ovulationDay2.getMonth() + 1).toString().padStart(2, '0')}/${ovulationDay2.getFullYear()}`;
        const ovulationDay3Formatted = `${ovulationDay3.getDate().toString().padStart(2, '0')}/${(ovulationDay3.getMonth() + 1).toString().padStart(2, '0')}/${ovulationDay3.getFullYear()}`;
        return `${ovulationDay1Formatted} - ${ovulationDay2Formatted} , ${ovulationDay3Formatted}`;
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = ovulation;