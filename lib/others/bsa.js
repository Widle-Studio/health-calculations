/**
 * Calculates body surface area (BSA).
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} body surface area (BSA) m2.
 */
function bsa(weight, weightType, height, heightType) {
    if (weightType === "Pound") {
        if (heightType === "Inches") {
            return ((0.007184 * (Math.pow((weight * 0.45), 0.425)) * (Math.pow((height * 2.54),0.725))).toFixed(2) + " m2");
        } else if (heightType === "Feet") {
            return ((0.007184 * (Math.pow((weight * 0.45), 0.425)) * (Math.pow((height * 30.48),0.725))).toFixed(2) + " m2");
        } else if (heightType === "Meters") {
            return ((0.007184 * (Math.pow((weight * 0.45), 0.425)) * (Math.pow((height * 100),0.725))).toFixed(2) + " m2");
        }
        else {
            return "Did not match";
        }
    } else if (weightType === "Kgs") {
        if (heightType === "Inches") {
            return ((0.007184 * (Math.pow(weight, 0.425)) * (Math.pow((height * 2.54),0.725))).toFixed(2) + " m2");
        } else if (heightType === "Feet") {
            return ((0.007184 * (Math.pow(weight, 0.425)) * (Math.pow((height * 30.48),0.725))).toFixed(2) + " m2");
        } else if (heightType === "Meters") {
            return ((0.007184 * (Math.pow(weight, 0.425)) * (Math.pow((height * 100),0.725))).toFixed(2) + " m2");
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = bsa;