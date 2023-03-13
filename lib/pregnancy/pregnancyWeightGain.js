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
function pregnancyWeightGain(currentWeight, weight, weightType, height, heightType) {
    var BMI = "" 
    var BMI_status = ""
    var futureWeight1 = (weight + 12.7)
    var futureWeight2 = (weight + 18.1)
    var futureWeight = futureWeight1 + " - " + futureWeight2
    if (weightType === "Pound") {
        if (heightType === "Inches") {
            BMI = (703 * (weight / (height * height ))).toFixed(2);
            if (BMI < 18.5) {
                BMI_status = "Underweight";
            }
            else if (BMI < 25 && BMI > 18.5) {
                BMI_status = "Normal weight";
            }
            else if (BMI < 30 && BMI > 25) {
                BMI_status = "Overweight";
            }
            else if (BMI > 30) {
                BMI_status = "Obese";
            }
            else {
                BMI_status = "Did not match"
            }
           return [BMI + '  ' + '(' + BMI_status +')', currentWeight, futureWeight]
        } else if (heightType === "Feet") {
            BMI = (703 * (weight / ((height * 12) * (height * 12)))).toFixed(2);
            if (BMI < 18.5) {
                BMI_status = "Underweight";
            }
            else if (BMI < 25 && BMI > 18.5) {
                BMI_status = "Normal weight";
            }
            else if (BMI < 30 && BMI > 25) {
                BMI_status = "Overweight";
            }
            else if (BMI > 30) {
                BMI_status = "Obese";
            }
            else {
                BMI_status = "Did not match"
            }
            return [BMI + '  ' + '(' + BMI_status +')', currentWeight, futureWeight]
        } else if (heightType === "Meters") {
            BMI = (703 * (weight / ((height * 39.37) * (height * 39.37)))).toFixed(2);
            if (BMI < 18.5) {
                BMI_status = "Underweight";
            }
            else if (BMI < 25 && BMI > 18.5) {
                BMI_status = "Normal weight";
            }
            else if (BMI < 30 && BMI > 25) {
                BMI_status = "Overweight";
            }
            else if (BMI > 30) {
                BMI_status = "Obese";
            }
            else {
                BMI_status = "Did not match"
            }
           return [BMI + '  ' + '(' + BMI_status +')', currentWeight, futureWeight]
        }
        else {
            return "Did not match";
        }
    } else if (weightType === "Kgs") {
        if (heightType === "Inches") {
            BMI = (weight / ((height * 0.0254) * (height * 0.0254))).toFixed(2);
            if (BMI < 18.5) {
                BMI_status = "Underweight";
            }
            else if (BMI < 25 && BMI > 18.5) {
                BMI_status = "Normal weight";
            }
            else if (BMI < 30 && BMI > 25) {
                BMI_status = "Overweight";
            }
            else if (BMI > 30) {
                BMI_status = "Obese";
            }
            else {
                BMI_status = "Did not match"
            }
           return [BMI + '  ' + '(' + BMI_status +')', currentWeight, futureWeight]
        } else if (heightType === "Feet") {
            BMI = (weight / ((height * 0.3048) * (height * 0.3048))).toFixed(2);
            if (BMI < 18.5) {
                BMI_status = "Underweight";
            }
            else if (BMI < 25 && BMI > 18.5) {
                BMI_status = "Normal weight";
            }
            else if (BMI < 30 && BMI > 25) {
                BMI_status = "Overweight";
            }
            else if (BMI > 30) {
                BMI_status = "Obese";
            }
            else {
                BMI_status = "Did not match"
            }
            return [BMI + '  ' + '(' + BMI_status +')', currentWeight, futureWeight]
        } else if (heightType === "Meters") {
            BMI = (weight / (height * height)).toFixed(2);
            if (BMI < 18.5) {
                BMI_status = "Underweight";
            }
            else if (BMI < 25 && BMI > 18.5) {
                BMI_status = "Normal weight";
            }
            else if (BMI < 30 && BMI > 25) {
                BMI_status = "Overweight";
            }
            else if (BMI > 30) {
                BMI_status = "Obese";
            }
            else {
                BMI_status = "Did not match"
            }
           return [BMI + '  ' + '(' + BMI_status +')', currentWeight, futureWeight]
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = pregnancyWeightGain;