/**
 * Calculates LBM (Lean Body Mass).
 *
 * @param {string} gender - gender of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} LBM (Lean Body Mass).
 */
function lbm(gender, weight, weightType, height, heightType) {
    if (gender === "Male") {
        if (weightType === "Pound") {
            if (heightType === "Feet") {
                return ((((weight * 0.454) * 0.407) + (0.267 * (height * 30.48)) - 19.2)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return ((((weight * 0.454) * 0.407) + (0.267 * (height * 2.54)) - 19.2)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return ((((weight * 0.454) * 0.407) + (0.267 * (height * 100)) - 19.2)).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else if (weightType === "Kgs") {
            if (heightType === "Feet") {
                return (((weight * 0.407) + (0.267 * (height * 30.48)) - 19.2)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return (((weight * 0.407) + (0.267 * (height * 2.54)) - 19.2)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return (((weight * 0.407) + (0.267 * (height * 100)) - 19.2)).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else {
            return "Did not match" ;
        }
    }
    else if (gender === "Female") {
        if (weightType === "Pound") {
            if (heightType === "Feet") {
                return ((((weight * 0.454) * 0.252) + (0.473 * (height * 30.48)) - 48.3)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return ((((weight * 0.454) * 0.252) + (0.473 * (height * 2.54)) - 48.3)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return ((((weight * 0.454) * 0.252) + (0.473 * (height * 100)) - 48.3)).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else if (weightType === "Kgs") {
            if (heightType === "Feet") {
                return (((weight * 0.252) + (0.473 * (height * 30.48)) - 48.3)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return (((weight * 0.252) + (0.473 * (height * 2.54)) - 48.3)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return (((weight * 0.252) + (0.473 * (height * 100)) - 48.3)).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else {
            return "Did not match" ;
        }
    }
}

module.exports = lbm;