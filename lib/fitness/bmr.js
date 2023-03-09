/**
 * Calculates BMR (Basal metabolic rate).
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} BMR.
 */
function bmr(gender, age, weight, weightType, height, heightType) {
    if (gender === "Male") {
        if (weightType === "Pound") {
            if (heightType === "Feet") {
                return (66.74 + (weight * 6.24) + (12.7 * (12 * height)) - (6.75 * age)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return (66.74 + (weight * 6.24) + (12.7 * height) - (6.75 * age)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return (66.74 + (weight * 6.24) + (12.7 * (39.37 * height)) - (6.75 * age)).toFixed(2);
            }
            else {
                return "Did not match"
            }
        }
        else if (weightType === "Kgs") {
            if (heightType === "Feet") {
                return (66.5 + (weight * 13.75) + (5.003 * (30.48 * height)) - (6.75 * age)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return (66.5 + (weight * 13.75) + (5.003 * (2.54 * height)) - (6.75 * age)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return (66.5 + (weight * 13.75) + (5.003 * (100 * height)) - (6.75 * age)).toFixed(2);
            }
        }
        else {
            return "Did not match"
        }
    }
    else if (gender === "Female") {
        if (weightType === "Pound") {
            if (heightType === "Feet") {
                return (65.51 + (weight * 4.35) + (4.7 * (12 * height)) - (4.7 * age)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return (65.51 + (weight * 4.35) + (4.7 * height) - (4.7 * age)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return (65.51 + (weight * 4.35) + (4.7 * (39.37 * height)) - (4.7 * age)).toFixed(2);
            }
            else {
                return "Did not match"
            }
        }
        else if (weightType === "Kgs") {
            if (heightType === "Feet") {
                return (655.1 + (weight * 9.563) + (1.850 * (30.48 * height)) - (4.676 * age)).toFixed(2);
            }
            else if (heightType === "Inches") {
                return (655.1 + (weight * 9.563) + (1.850 * (2.54 * height)) - (4.676 * age)).toFixed(2);
            }
            else if (heightType === "Meters") {
                return (655.1 + (weight * 9.563) + (1.850 * (100 * height)) - (4.676 * age)).toFixed(2);
            }
            else {
                return "Did not match"
            }
        }
        else {
            return "Did not match"
        }
    }
    else {
        return "Did not match"
    }
}

module.exports = bmr;