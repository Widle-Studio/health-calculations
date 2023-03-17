/**
 * Calculates TDEE (Total Daily Energy Expenditure ).
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @param {number} exercise  - No. of days person do exercise .
 * @returns {number} TDEE (Total Daily Energy Expenditure ) kcal/day.
 */
function tdee(gender, age, weight, weightType, height, heightType, exercise ) {
    if (exercise  === 0) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.2).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.2).toFixed(2) + " kcal/day");
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
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.2).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.2).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.2).toFixed(2) + " kcal/day");
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
    else if (exercise  === 1) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.375).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.375).toFixed(2) + " kcal/day");
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
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.375).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.375).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.375).toFixed(2) + " kcal/day");
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
    else if (exercise  === 2 || exercise  === 3) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.55).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.55).toFixed(2) + " kcal/day");
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
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.55).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.55).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.55).toFixed(2) + " kcal/day");
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
    else if (exercise  === 4 || exercise  === 5) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.725).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.725).toFixed(2) + " kcal/day");
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
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.725).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.725).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.725).toFixed(2) + " kcal/day");
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
    else if (exercise  === 6) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.9).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 1.9).toFixed(2) + " kcal/day");
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
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.9).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 1.9).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 1.9).toFixed(2) + " kcal/day");
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
    else if (exercise  === 7) {
        if (gender === "Male") {
            if (weightType === "Pound") {
                if (heightType === "Feet") {
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 2.4).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) + 5) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) + 5) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) + 5) * 2.4).toFixed(2) + " kcal/day");
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
                    return (((((weight * 0.454) * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return (((((weight * 0.454) * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return (((((weight * 0.454) * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 2.4).toFixed(2) + " kcal/day");
                }
                else {
                    return "Did not match"
                }
            }
            else if (weightType === "Kgs") {
                if (heightType === "Feet") {
                    return ((((weight * 10) + (6.25 * (30.48 * height)) - (5 * age) - 161) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Inches") {
                    return ((((weight * 10) + (6.25 * (2.54 * height)) - (5 * age) - 161) * 2.4).toFixed(2) + " kcal/day");
                }
                else if (heightType === "Meters") {
                    return ((((weight * 10) + (6.25 * (100 * height)) - (5 * age) - 161) * 2.4).toFixed(2) + " kcal/day");
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

module.exports = tdee;