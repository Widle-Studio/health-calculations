/**
 * Calculates Calories.
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @param {number} excerice - No. of days person do excerice.
 * @returns {number} Calories kcal/day.
 */
function calorie(gender, age, weight, weightType, height, heightType, excerice) {
    if (excerice === 0) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.2).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.2).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.2).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.2).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.2).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.2).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else {
                return "Did not match"
            }
        }
        else if (gender === "Female") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.2).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.2).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.2).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.2).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.2).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.2).toFixed(2);
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
    else if (excerice === 1) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.4).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.4).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.4).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.4).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.4).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.4).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else {
                return "Did not match"
            }
        }
        else if (gender === "Female") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.4).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.4).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.4).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.4).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.4).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.4).toFixed(2);
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
    else if (excerice === 2 || excerice === 3) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.6).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.6).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.6).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.6).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.6).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.6).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else {
                return "Did not match"
            }
        }
        else if (gender === "Female") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.6).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.6).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.6).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.6).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.6).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.6).toFixed(2);
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
    else if (excerice === 4 || excerice === 5) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.75).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.75).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.75).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.75).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.75).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.75).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else {
                return "Did not match"
            }
        }
        else if (gender === "Female") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.75).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.75).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.75).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.75).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.75).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.75).toFixed(2);
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
    else if (excerice === 6) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 2.0).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 2.0).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 2.0).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 2.0).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 2.0).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 2.0).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else {
                return "Did not match"
            }
        }
        else if (gender === "Female") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 2.0).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 2.0).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 2.0).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 2.0).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 2.0).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 2.0).toFixed(2);
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
    else if (excerice === 7) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 2.3).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 2.3).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 2.3).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 2.3).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 2.3).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 2.3).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else {
                return "Did not match"
            }
        }
        else if (gender === "Female") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return ((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 2.3).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return ((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 2.3).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return ((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 2.3).toFixed(2);
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return (((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 2.3).toFixed(2);
                }
                else if (heightType === "Inches") {
                    return (((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 2.3).toFixed(2);
                }
                else if (heightType === "Meters") {
                    return (((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 2.3).toFixed(2);
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
    else {
        return "Did not match";
    }
}

module.exports = calorie;