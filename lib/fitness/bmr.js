/**
 * Calculates BMR (Basal metabolic rate).
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} BMR.
 */

try {
    function bmr(gender, age, weight, weightType, height, heightType) {
        const poundToKg = 0.45359237;
        const inchToCm = 2.54;
        const feetToCm = 30.48;
        const metersToCm = 100;

        let weightInKg = weight;
        if (weightType === "Pound") {
            weightInKg *= poundToKg;
        } else if (weightType !== "Kgs") {
            throw new Error("Invalid weightType");
        }

        let heightInCm = height;
        switch (heightType) {
            case "Inches":
                heightInCm *= inchToCm;
                break;
            case "Feet":
                heightInCm *= feetToCm;
                break;
            case "Meters":
                heightInCm *= metersToCm;
                break;
            default:
                throw new Error("Invalid heightType");
        }

        if (gender !== "Male" && gender !== "Female") {
            throw new Error("Invalid gender");
        }

        const bmrCalculation =
            gender === "Male"
                ? 66.5 + 13.75 * weightInKg + 5.003 * heightInCm - 6.755 * age
                : 655.1 + 9.563 * weightInKg + 1.85 * heightInCm - 4.676 * age;

        return bmrCalculation.toFixed(2);
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}
module.exports = bmr;