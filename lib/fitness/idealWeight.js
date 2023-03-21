/**
 * Calculates Ideal Weight based on given height and heightType.
 *
 * @param {number} height - The height of a person in either feet, inches or meters.
 * @param {string} heightType - The type of unit that the height is measured in. Accepted values are "Feet", "Meters" and "Inches".
 * @returns {string} Ideal Weight rounded to 2 decimal places along with units in kgs and lbs.
 */

try {
    function idealWeight(height, heightType) {
        let calculateHeight;
        const multiplier = 2.205; // Conversion factor from kgs to lbs

        //  Check for valid inputs
        if (typeof height !== "number") {
            return "Invalid height input type (use 'number')";
        }

        // Switch statement to calculate calculateHeight based on given heightType
        switch (heightType) {
            case "Feet":
                calculateHeight = ((height - 5) * 12);
                break;
            case "Inches":
                calculateHeight = (height - 60);
                break;
            case "Meters":
                calculateHeight = ((height - 1.524) * 39.37);
                break;
            default:
                return "Invalid height type (use 'Inches', 'Feet' or 'Meters')"; // Error message for invalid input
        }

        // Check if calculated height is less or equal to zero
        if (calculateHeight <= 0) {
            return "You are not over 5 feet";
        }

        // Calculate ideal body weight using the calculated height
        const ibw = (50 + (2.3 * calculateHeight)).toFixed(2);
        const ibw1 = (ibw * multiplier).toFixed(2);

        return `${ibw} kgs or ${ibw1} lbs`;
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = idealWeight; // Export function as node module
