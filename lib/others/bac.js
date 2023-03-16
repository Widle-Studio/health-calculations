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
function bac(gender, weight, weightType, alcohol, time, timeType) {
    if (gender === "Male") {
        if (timeType === "hr") {
            if (weightType === "Pound") {
                return (((alcohol * 5.14) / (weight * 0.73)) - 0.015 * time).toFixed(2)
            }
            else if (weightType === "Kgs") {
                return (((alcohol * 5.14) / ((weight * 2.205) * 0.73)) - 0.015 * time).toFixed(2)
            }
            else {
                return "Did not match";
            }
        }
        else if (timeType === "min") {
            if (weightType === "Pound") {
                return (((alcohol * 5.14) / (weight * 0.73)) - 0.015 * (time / 60)).toFixed(2)
            }
            else if (weightType === "Kgs") {
                return (((alcohol * 5.14) / ((weight * 2.205) * 0.73)) - 0.015 * (time / 60)).toFixed(2)
            }
            else {
                return "Did not match";
            }
        }
        else if (timeType === "sec") {
            if (weightType === "Pound") {
                return (((alcohol * 5.14) / (weight * 0.73)) - 0.015 * (time / 3600)).toFixed(2)
            }
            else if (weightType === "Kgs") {
                return (((alcohol * 5.14) / ((weight * 2.205) * 0.73)) - 0.015 * (time / 3600)).toFixed(2)
            }
            else {
                return "Did not match";
            }
        }
        else {
            return "Did not match";
        }
    }
    else if (gender === "Female") {
        if (timeType === "hr") {
            if (weightType === "Pound") {
                return (((alcohol * 5.14) / (weight * 0.66)) - 0.015 * time).toFixed(2)
            }
            else if (weightType === "Kgs") {
                return (((alcohol * 5.14) / ((weight * 2.205) * 0.66)) - 0.015 * time).toFixed(2)
            }
            else {
                return "Did not match";
            }
        }
        else if (timeType === "min") {
            if (weightType === "Pound") {
                return (((alcohol * 5.14) / (weight * 0.66)) - 0.015 * (time / 60)).toFixed(2)
            }
            else if (weightType === "Kgs") {
                return (((alcohol * 5.14) / ((weight * 2.205) * 0.66)) - 0.015 * (time / 60)).toFixed(2)
            }
            else {
                return "Did not match";
            }
        }
        else if (timeType === "sec") {
            if (weightType === "Pound") {
                return (((alcohol * 5.14) / (weight * 0.66)) - 0.015 * (time / 3600)).toFixed(2)
            }
            else if (weightType === "Kgs") {
                return (((alcohol * 5.14) / ((weight * 2.205) * 0.66)) - 0.015 * (time / 3600)).toFixed(2)
            }
            else {
                return "Did not match";
            }
        }
        else {
            return "Did not match";
        }
    }
    else {
        return "Did not match";
    }
}

module.exports = bac;