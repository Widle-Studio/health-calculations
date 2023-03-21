/**
 * Calculates GFR (glomerular filtration rate).
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} Scr - Scr of a person.
 * @param {string} color - color (Black or Not Black) of a person.
 * @returns {number} GFR (glomerular filtration rate)  mL/min/1.73 m2.
 */

try {
    function gfr(gender, age, Scr, color) {
        let multiplier = 1;
        let result = "";

        if (typeof Scr !== "number" || typeof age !== "number") {
            return "Invalid Scr or age input type (use 'number')";
        }

        if (gender !== "Male" && gender !== "Female") {
            return "Invalid gender (use 'Male' or 'Female')";
        }

        // Determine multiplier based on color
        switch (color) {
            case "Black":
                multiplier = (gender === "Male") ? 1.212 : 1.212 * 0.742;
                break;
            case "Not Black":
                multiplier = (gender === "Male") ? 1 : 0.742;
                break;
            default:
                return "Invalid color type (use 'Black' or 'Not Black')";
        }

        // Calculate result
        if (gender === "Male") {
            result = (175 * (Math.pow(Scr, -1.154) * (Math.pow(age, -0.203) * multiplier))).toFixed(2);
        } else if (gender === "Female") {
            result = (175 * (Math.pow(Scr, -1.154) * (Math.pow(age, -0.203) * multiplier))).toFixed(2);
        } else {
            return "Invalid gender (use 'Male' or 'Female')";
        }

        return result + " mL/min/1.73 m2";
    }
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = gfr;