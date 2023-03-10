/**
 * Calculates Healthy Weight.
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {string} Healthy Weight.
 */
function healthyWeight(weight, weightType, height, heightType) {
    if (weightType === "Pound") {
        if (heightType === "Inches") {
            BMI = (703 * (weight / ((height * 0.0254) * (height * 0.0254)))).toFixed(2);
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 30 && BMI > 18.5) {
                return "Overweight";
            }
            else if (BMI > 30) {
                return "Obese";
            }
            else {
                return "Did not match"
            }
        } else if (heightType === "Feet") {
            BMI = (703 * (weight / ((height * 0.3048) * (height * 0.3048)))).toFixed(2);
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 30 && BMI > 18.5) {
                return "Overweight";
            }
            else if (BMI > 30) {
                return "Obese";
            }
            else {
                return "Did not match"
            }
        } else if (heightType === "Meters") {
            BMI = (703 * (weight / (height * height))).toFixed(2);
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 30 && BMI > 18.5) {
                return "Overweight";
            }
            else if (BMI > 30) {
                return "Obese";
            }
            else {
                return "Did not match"
            }
        }
        else {
            return "Did not match";
        }
    } else if (weightType === "Kgs") {
        if (heightType === "Inches") {
            BMI = (weight / ((height * 0.0254) * (height * 0.0254))).toFixed(2);
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 30 && BMI > 18.5) {
                return "Overweight";
            }
            else if (BMI > 30) {
                return "Obese";
            }
            else {
                return "Did not match"
            }
        } else if (heightType === "Feet") {
            BMI = (weight / ((height * 0.3048) * (height * 0.3048))).toFixed(2);
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 30 && BMI > 18.5) {
                return "Overweight";
            }
            else if (BMI > 30) {
                return "Obese";
            }
            else {
                return "Did not match"
            }
        } else if (heightType === "Meters") {
            BMI = (weight / (height * height)).toFixed(2);
            if (BMI < 18.5) {
                return "Underweight";
            }
            else if (BMI < 30 && BMI > 18.5) {
                return "Overweight";
            }
            else if (BMI > 30) {
                return "Obese";
            }
            else {
                return "Did not match"
            }
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = healthyWeight;