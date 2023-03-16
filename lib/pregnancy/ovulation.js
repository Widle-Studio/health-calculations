// Importing the contents of the `dates.json` file for use in ovulation calculations:
const scales = require('./dates.json');

/**
 * Calculates Pregnancy weight gain.
 *
 * @param {number} date - First Day of Your Last Period .
 * @param {number} scale - Average Length of Cycles.
 * @returns {number} Ovulation days.
 */
function ovulation(date, scale) {
    // Initializing date objects to be used in calculation:
    var day = new Date(date);
    var day1 = new Date(date);

    // Checking whether the given scale exists in the `scales` dataset:
    const scaleMatch = scales.find(el => el.days === scale);
    if (scaleMatch) {

        // Calculating the dates based on the input and retrieved scale data:
        let a = new Date(day1.setDate(day.getDate() + scaleMatch['value1']));
        var aMonth = "0" + (a.getMonth() + 1);
        var aDate = "0" + a.getDate();
        aMonth = aMonth.slice(-2);
        aDate = aDate.slice(-2);
        var aDate = aDate + "/" + aMonth + "/" + a.getFullYear();

        let c = new Date(day1.setDate(day1.getDate() + 2));
        var cMonth = "0" + (c.getMonth() + 1);
        var cDate = "0" + c.getDate();
        cMonth = cMonth.slice(-2);
        cDate = cDate.slice(-2);
        var cDate = cDate + "/" + cMonth + "/" + c.getFullYear();

        let b = new Date(day1.setDate(day.getDate() + scaleMatch['value2']));
        var bMonth = "0" + (b.getMonth() + 1);
        var bDate = "0" + b.getDate();
        bMonth = bMonth.slice(-2);
        bDate = bDate.slice(-2);
        var bDate = bDate + "/" + bMonth + "/" + b.getFullYear();

        // Formatting the output as string values and returning as array:
        return [aDate + " - " + bDate, cDate];
    } else {
        // Throwing error if the provided scale is not found:
        throw new Error('Invalid Scale');
    }
}

// Exports the `ovulation` function to be used elsewhere:
module.exports = ovulation;
