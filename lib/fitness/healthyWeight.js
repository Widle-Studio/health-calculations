/**
 * Calculates Healthy Weight.
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {string} Healthy Weight.
 */

try {
    function healthyWeight(weight, weightType, height, heightType) {
        // Step 1: Check for valid inputs
        if ( typeof weight !== "number" || typeof height !== "number") {
            return "Invalid weight or height input type (use 'number')";
        }

        if ((weightType === "Pound" || weightType === "Kgs") && (heightType === "Inches" || heightType === "Feet" || heightType === "Meters")) {
            // Step 2: Create conversion factor variables
            const poundToKg = 0.453592;
            const inchToMeter = 0.0254;
            const feetToMeter = 0.3048;

            let weightInKgs, heightInMeters;

            // Step 3: Convert weight and height inputs to Kg and Meters if necessary
            if (weightType === "Pound") {
                weightInKgs = weight * poundToKg;
            } else if (weightType === "Kgs") {
                weightInKgs = weight;
            }

            if (heightType === "Inches") {
                heightInMeters = height * inchToMeter;
            } else if (heightType === "Feet") {
                heightInMeters = height * feetToMeter;
            } else {
                heightInMeters = height;
            }

            // Step 4: Calculate the BMI
            let BMI = (weightInKgs / (heightInMeters * heightInMeters)).toFixed(2);

            // Step 5: Return appropriate health status message based on the calculated BMI
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 25) {
                return "Normal weight";
            }
            else if (BMI < 30) {
                return "Overweight";
            }
            else {
                return "Obese";
            }
        } else {
            return "Invalid input type (use valid inputs)";
        }

    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = healthyWeight;