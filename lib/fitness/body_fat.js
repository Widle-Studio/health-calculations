/**
 * Calculates body mass index (Body Fat Percentage).
 *
 * @param {string} Gender - Gender of a person.
 * @param {number} Age - Age of a person.
 * @param {number} Weight - Weight of a person.
 * @param {string} Weight_Type - Weight_Type (Pound or Kgs) of a person.
 * @param {number} Height - Height of a person.
 * @param {string} Height_Type - Height_Type (Feet , Inches or Meters ) of a person.
 * @returns {number} Body Fat Percentage.
 */
function body_fat(Gender, Age, Weight, Weight_Type, Height, Height_Type) {
    if (Gender === "Male") {
        var Gender = 1;
        if (Weight_Type === "Pound") {
            if (Height_Type === "Inches") {
                return (1.20 * (703 * (Weight / ((Height * 0.0254) * (Height * 0.0254))))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Feet") {
                return (1.20 * (703 * (Weight / ((Height * 0.3048) * (Height * 0.3048))))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Meters") {
                return (1.20 * (703 * (Weight / (Height * Height)))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            }
            else {
                return "Did not match";
            }
        } else if (Weight_Type === "Kgs") {
            if (Height_Type === "Inches") {
                return (1.20 * (Weight / ((Height * 0.0254) * (Height * 0.0254)))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Feet") {
                return (1.20 * (Weight / ((Height * 0.3048) * (Height * 0.3048)))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Meters") {
                return (1.20 * (Weight / (Height * Height))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            }
            else {
                return "Did not match";
            }
        } else {
            return "Did not match";
        }
    } else if (Gender === "Female") {
        var Gender = 0;
        if (Weight_Type === "Pound") {
            if (Height_Type === "Inches") {
                return (1.20 * (703 * (Weight / ((Height * 0.0254) * (Height * 0.0254))))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Feet") {
                return (1.20 * (703 * (Weight / ((Height * 0.3048) * (Height * 0.3048))))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Meters") {
                return (1.20 * (703 * (Weight / (Height * Height)))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            }
            else {
                return "Did not match";
            }
        } else if (Weight_Type === "Kgs") {
            if (Height_Type === "Inches") {
                return (1.20 * (Weight / ((Height * 0.0254) * (Height * 0.0254)))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Feet") {
                return (1.20 * (Weight / ((Height * 0.3048) * (Height * 0.3048)))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
            } else if (Height_Type === "Meters") {
                return (1.20 * (Weight / (Height * Height))) + (0.23 * Age) - (10.8 * Gender) - 5.4;
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