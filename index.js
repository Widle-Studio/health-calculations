function bmi() {
    if (Weight_Type === "Pound") {
        if (Height_Type === "Inches") {
            return (703 * (Weight / (Height * 0.0254) * (Height * 0.0254)));
        } else if (Height_Type === "Feet") {
            return (703 * (Weight / (Height * 0.3048) * (Height * 0.3048)));
        } else if (Height_Type === "Meters") {
            return (703 * (Weight / (Height) * (Height)));
        }
        else {
            return "Did not match";
        }
    } else if (Weight_Type === "Kgs") {
        if (Height_Type === "Inches") {
            return (Weight / (Height * 0.0254) * (Height * 0.0254));
        } else if (Height_Type === "Feet") {
            return (Weight / (Height * 0.3048) * (Height * 0.3048));
        } else if (Height_Type === "Meters") {
            return (Weight / (Height) * (Height));
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = bmi;