/**
 * Calculates Pregnancy weight gain.
 *
 * @param {number} currentWeight - currentWeight of a lady.
 * @param {number} weight - before pregnancy weight of a lady.
 * @param {string} weightType - weightType (Pound or Kgs) of a lady.
 * @param {number} height - height of a lady.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a lady.
 * @returns {number} Pregnancy weight gain.
 */

try {
    function pregnancyWeightGain(currentWeight, weight, weightType, height, heightType) {

        if (typeof weight !== "number" || typeof height !== "number" || typeof currentWeight !== "number") {
            return "Invalid weight or height or currentWeight input type (use 'number')";
        }

        if (weightType !== "Pound" && weightType !== "Kgs") {
            return "Invalid weightType (use 'Pound' or 'Kgs')";
        }

        if (heightType !== "Feet" && heightType !== "Meters" && heightType !== "Inches") {
            return "Invalid heightType (use 'Feet' or 'Meters' or 'Inches')";
        }
        const weightMultiplier = weightType === 'Pound' ? 0.453592 : 1;
        const heightMultiplier = heightType === 'Inches' ? 0.0254 : heightType === 'Feet' ? 0.3048 : 1;
        const weightInKgs = weight * weightMultiplier;
        const currentWeightInKgs = currentWeight * weightMultiplier;
        const heightInMeters = height * heightMultiplier;

        const bmi = weightInKgs / (heightInMeters ** 2);
        let bmiStatus = "";
        if (bmi < 18.5) {
            bmiStatus = "Underweight";
        } else if (bmi < 25) {
            bmiStatus = "Normal weight";
        } else if (bmi < 30) {
            bmiStatus = "Overweight";
        } else {
            bmiStatus = "Obese";
        }

        const futureWeightInKgs1 = weightInKgs + 5.77;
        const futureWeightInKgs2 = weightInKgs + 8.2;
        const futureWeight = `${futureWeightInKgs1.toFixed(1)} kg - ${futureWeightInKgs2.toFixed(1)} kg`;

        return [`${bmi.toFixed(2)} (${bmiStatus})`, `${currentWeightInKgs.toFixed(2)} kg`, futureWeight];
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = pregnancyWeightGain;