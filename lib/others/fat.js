/**
 * Calculates Fat Intake.
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @param {number} exercise  - No. of days person do exercise .
 * @returns {number} Fat in grams.
 */

try {
    function fat(gender, age, weight, weightType, height, heightType, exercise) {
        const POUND_TO_KG = 0.454;
        const INCH_TO_CM = 2.54;
        const FEET_TO_CM = 30.48;
        const MALE_FACTOR = 5;
        const FEMALE_FACTOR = - 161;
        const ACTIVITY_FACTORS = {
            0: 1.2,
            1: 1.4,
            2: 1.6,
            3: 1.6,
            4: 1.75,
            5: 1.75,
            6: 2.0,
            7: 2.3
        };

        if (gender !== "Male" && gender !== "Female") {
            return "Invalid gender (use 'Male' or 'Female')";
        }

        if (typeof weight !== "number" || typeof height !== "number" || typeof exercise !== "number") {
            return "Invalid weight or height or exercise input type (use 'number')";
        }

        if (weightType !== "Pound" && weightType !== "Kgs") {
            return "Invalid weightType (use 'Pound' or 'Kgs')";
        }

        if (heightType !== "Feet" && heightType !== "Meters" && heightType !== "Inches") {
            return "Invalid heightType (use 'Feet' or 'Meters' or 'Inches')";
        }

        let weightInKg = weightType === "Pound" ? weight * POUND_TO_KG : weight;
        let heightInCm = heightType === "Feet" ? height * FEET_TO_CM : heightType === "Inches" ? height * INCH_TO_CM : height * 100;
        const factor = ACTIVITY_FACTORS[exercise];
        const calorie = ((weightInKg * 10) + (6.25 * heightInCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * factor;
        const fat = ((calorie * 0.3) / 9).toFixed(2);
        const fatDaily1 = ((calorie * 0.2) / 9).toFixed(2) + ' g';
        const fatDaily2 = ((calorie * 0.35) / 9).toFixed(2) + ' g';
        return [calorie.toFixed(2), `${fat} g`, `${fatDaily1} - ${fatDaily2}`];
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = fat;