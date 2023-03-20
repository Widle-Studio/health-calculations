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
        const weightInKgs = weightType === 'Pound' ? weight * 0.453592 : weight;
        const currentWeightInKgs = weightType === 'Pound' ? currentWeight * 0.453592 : currentWeight;
        const heightInMeters = heightType === 'Inches' ? height * 0.0254
            : heightType === 'Feet' ? height * 0.3048
                : height;

        const bmi = (weightInKgs / (heightInMeters ** 2));
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
        const futureWeight = `${(futureWeightInKgs1).toFixed(1) + ' kg'} - ${(futureWeightInKgs2).toFixed(1) + ' kg'}`;

        return [bmi.toFixed(2) + ' (' + bmiStatus + ')', currentWeightInKgs.toFixed(2) + ' kg', futureWeight];
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