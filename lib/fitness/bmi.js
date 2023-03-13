/**
 * Calculates body mass index (BMI).
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} BMI.
 */
function bmi(weight, weightType, height, heightType) {
    if (weightType === "Pound") {
        if (heightType === "Inches") {
            return (703 * (weight / (height * height))).toFixed(2);
        } else if (heightType === "Feet") {
            return (703 * (weight / ((height * 12) * (height * 12)))).toFixed(2);
        } else if (heightType === "Meters") {
            return (703 * (weight / ((height * 39.37) * (height * 39.37)))).toFixed(2);
        }
        else {
            return "Did not match";
        }
    } else if (weightType === "Kgs") {
        if (heightType === "Inches") {
            return (weight / ((height * 0.0254) * (height * 0.0254))).toFixed(2);
        } else if (heightType === "Feet") {
            return (weight / ((height * 0.3048) * (height * 0.3048))).toFixed(2);
        } else if (heightType === "Meters") {
            return (weight / (height * height)).toFixed(2);
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = bmi;