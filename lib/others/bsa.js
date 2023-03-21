/**
 * Calculates body surface area (BSA).
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} body surface area (BSA) m2.
 */

try {
    function bsa(weight, weightType, height, heightType) {

        if (typeof weight !== "number" || typeof height !== "number") {
            return "Invalid weight or height input type (use 'number')";
        }

        let weightInKgs = 0;
        let heightInCm = 0;

        // Convert weight to kgs
        if (weightType === "Pound") {

            weightInKgs = weight * 0.45;

        } else if (weightType === "Kgs") {

            weightInKgs = weight;

        } else {

            return "Invalid weight type (use 'Pound' or 'Kgs')";
        }

        // Convert height to cm
        if (heightType === "Inches") {

            heightInCm = height * 2.54;

        } else if (heightType === "Feet") {

            heightInCm = height * 30.48;

        } else if (heightType === "Meters") {

            heightInCm = height * 100;

        } else {

            return "Invalid height type (use 'Feet' or 'Inches' or 'Meters')";
        }

        // Calculate BSA
        const bsa = 0.007184 * Math.pow(weightInKgs, 0.425) * Math.pow(heightInCm, 0.725);

        return bsa.toFixed(2) + " m2";
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = bsa;