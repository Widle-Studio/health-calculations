/**
 * Calculates Blood Alcohol Concentration (BAC).
 *
 * @param {string} gender - gender of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} alcohol - alcohol taken by a person.
 * @param {number} time - time taken by a person.
 * @param {string} timeType - timeType (hr , min or sec ) taken by a person.
 * @returns {number} Blood Alcohol Concentration (BAC) .
 */

try {
    function bac(gender, weight, weightType, alcohol, time, timeType) {
        if (weightType !== "Kgs" && weightType !== "Pound") {
            return "Invalid weight type (use 'Pound' or 'Kgs')";
        }

        if (timeType !== "sec" && timeType !== "min" && timeType !== "hour") {
            return "Use valid inputs (use 'sec' , 'min' or 'hour') ";
        }

        if (gender !== "Male" && gender !== "Female") {
            return "Invalid gender (use 'Male' or 'Female')";
        }

        if (typeof weight !== "number" || typeof time !== "number" || typeof alcohol !== "number") {
            return "Invalid weight or time or alcohol input type (use 'number')";
        }
        const weightConv = weightType === "Pound" ? 0.73 : 0.66;
        const timeConv = timeType === "sec" ? 3600 : timeType === "min" ? 60 : 1;
        const genderFactor = gender === "Male" ? 5.14 : 5.48;
        const bac = ((alcohol * genderFactor) / (weight * weightConv) - 0.015 * (time / timeConv)).toFixed(2);
        return bac > 0 ? bac : 0;
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = bac;