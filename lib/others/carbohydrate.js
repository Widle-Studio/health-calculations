/**
 * Calculates Carbohydrate.
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @param {number} exercise  - No. of days person do exercise .
 * @returns {number} Carbohydrates in grams.
 */

try {
    function carbohydrate(gender, age, weight, weightType, height, heightType, exercise) {
        const POUND_TO_KG = 0.454;
        const INCH_TO_CM = 2.54;
        const FEET_TO_CM = 30.48;
        const MALE_FACTOR = 5;
        const FEMALE_FACTOR = - 161
        const CARBOHYDRATE_FACTOR = 0.5;
        const CARBOHYDRATE_DAILY_MIN_FACTOR = 0.45;
        const CARBOHYDRATE_DAILY_MAX_FACTOR = 0.65;

        if (gender !== "Male" && gender !== "Female") {
            return "Invalid gender (use 'Male' or 'Female')";
        }

        if (typeof weight !== "number" || typeof height !== "number") {
            return "Invalid weight or height input type (use 'number')";
        }

        if (weightType !== "Pound" && weightType !== "Kgs") {
            return "Invalid weightType (use 'Pound' or 'Kgs')";
        }

        if (heightType !== "Feet" && heightType !== "Meters" && heightType !== "Inches") {
            return "Invalid heightType (use 'Feet' or 'Meters' or 'Inches')";
        }

        let calorie, carbohydrate, carbohydrateDaily1, carbohydrateDaily2;
        let weightKg = weightType === "Pound" ? weight * POUND_TO_KG : weight;
        let heightCm = heightType === "Feet" ? height * FEET_TO_CM : heightType === "Inches" ? height * INCH_TO_CM : height * 100;

        switch (exercise) {
            case 0:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 1.2;
                break;
            case 1:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 1.4;
                break;
            case 2:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 1.6;
                break;
            case 3:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 1.6;
                break;
            case 4:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 1.75;
                break;
            case 5:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 1.75;
                break;
            case 6:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 2.0;
                break;
            case 7:
                calorie = ((weightKg * 10) + (6.25 * heightCm) - (5 * age) + ((gender === "Male" ? MALE_FACTOR : FEMALE_FACTOR))) * 2.3;
                break;
            default:
                return "Invalid exercise type";
        }

        carbohydrate = (calorie * CARBOHYDRATE_FACTOR) / 4;
        carbohydrateDaily1 = ((calorie * CARBOHYDRATE_DAILY_MIN_FACTOR / 4).toFixed(2)) + " g";
        carbohydrateDaily2 = ((calorie * CARBOHYDRATE_DAILY_MAX_FACTOR / 4).toFixed(2)) + " g";

        return [
            calorie.toFixed(2),
            carbohydrate.toFixed(2) + " g",
            carbohydrateDaily1 + " - " + carbohydrateDaily2,
        ];
    }

}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = carbohydrate;