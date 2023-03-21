/**
 * Calculates body mass index (BMI).
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} BMI.
 */

try {
    function bmi(weight, weightType, height, heightType) {
        const poundToKgs = 0.453592;
        const inchToMeters = 0.0254;
        const feetToMeters = 0.3048;

        let weightValue = weight;
        let heightValue = height;

        if (typeof weight === "number") {
            if (typeof height === "number") {
                if (weightType === "Pound") {
                    weightValue = weight * poundToKgs;
                } else if (weightType !== "Kgs") {
                    return "Invalid weight type (use 'Pound' or 'Kgs')";
                }

                if (heightType === "Inches") {
                    heightValue = height * inchToMeters;
                } else if (heightType === "Feet") {
                    heightValue = height * feetToMeters;
                } else if (heightType !== "Meters") {
                    return "Invalid height type (use 'Inches', 'Feet' or 'Meters')";
                }


                return (weightValue / (heightValue ** 2)).toFixed(2);
            }
            else {
                return "Invalid height value  (use 'number' )";
            }
        }
        else {
            return "Invalid weight value (use 'number' )";
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

module.exports = bmi;