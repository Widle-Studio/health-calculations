/**
 * Calculates body mass index (Body Fat Percentage).
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} Body Fat Percentage.
 */
function body_fat(gender, age, weight, weightType, height, heightType) {
    if (gender === "Male") {
        var gender = 1;
        if (weightType === "Pound") {
            if (heightType === "Inches") {
                return ((1.20 * (703 * (weight / ((height * 0.0254) * (height * 0.0254))))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Feet") {
                return ((1.20 * (703 * (weight / ((height * 0.3048) * (height * 0.3048))))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Meters") {
                return ((1.20 * (703 * (weight / (height * height)))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            }
            else {
                return "Did not match";
            }
        } else if (weightType === "Kgs") {
            if (heightType === "Inches") {
                return ((1.20 * (weight / ((height * 0.0254) * (height * 0.0254)))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Feet") {
                return ((1.20 * (weight / ((height * 0.3048) * (height * 0.3048)))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Meters") {
                return ((1.20 * (weight / (height * height))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            }
            else {
                return "Did not match";
            }
        } else {
            return "Did not match";
        }
    } else if (gender === "Female") {
        var gender = 0;
        if (weightType === "Pound") {
            if (heightType === "Inches") {
                return ((1.20 * (703 * (weight / ((height * 0.0254) * (height * 0.0254))))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Feet") {
                return ((1.20 * (703 * (weight / ((height * 0.3048) * (height * 0.3048))))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Meters") {
                return ((1.20 * (703 * (weight / (height * height)))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            }
            else {
                return "Did not match";
            }
        } else if (weightType === "Kgs") {
            if (heightType === "Inches") {
                return ((1.20 * (weight / ((height * 0.0254) * (height * 0.0254)))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Feet") {
                return ((1.20 * (weight / ((height * 0.3048) * (height * 0.3048)))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            } else if (heightType === "Meters") {
                return ((1.20 * (weight / (height * height))) + (0.23 * age) - (10.8 * gender) - 5.4).toFixed(2);
            }
            else {
                return "Did not match";
            }
        } else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }
}

module.exports = body_fat;