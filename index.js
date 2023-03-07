/**
 * Calculates body mass index (BMI).
 *
 * @body {number} Weight - Weight of a person.
 * @body {string} Weight_Type - Weight_Type (Pound or Kgs) of a person.
 * @body {number} Height - Height of a person.
 * @body {string} Height_Type - Height_Type (Feet , Inches or Meters ) of a person.
 * @returns {number} BMI.
 */
function bmi() {
    if (Weight_Type === "Pound") {
        if (Height_Type === "Inches") {
            return (703 * (Weight / ((Height * 0.0254) * (Height * 0.0254))));
        } else if (Height_Type === "Feet") {
            return (703 * (Weight / ((Height * 0.3048) * (Height * 0.3048))));
        } else if (Height_Type === "Meters") {
            return (703 * (Weight / (Height * Height)));
        }
        else {
            return "Did not match";
        }
    } else if (Weight_Type === "Kgs") {
        if (Height_Type === "Inches") {
            return (Weight / ((Height * 0.0254) * (Height * 0.0254)));
        } else if (Height_Type === "Feet") {
            return (Weight / ((Height * 0.3048) * (Height * 0.3048)));
        } else if (Height_Type === "Meters") {
            return (Weight / (Height * Height));
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = bmi;