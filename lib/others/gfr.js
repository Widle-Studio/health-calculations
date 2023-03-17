/**
 * Calculates GFR (glomerular filtration rate).
 *
 * @param {string} gender - gender of a person.
 * @param {number} age - age of a person.
 * @param {number} Scr - Scr of a person.
 * @param {string} color - color (Black or Not Black) of a person.
 * @returns {number} GFR (glomerular filtration rate)  mL/min/1.73 m2.
 */
function gfr(gender, age, Scr, color) {
    if (gender === "Male") {
        if (color === "Black") {
            return ((175 * (Math.pow(Scr, -1.154) * (Math.pow(age, -0.203) * 1.212))).toFixed(2) + " mL/min/1.73 m2");
        }
        else if (color === "Not Black") {
            return ((175 * (Math.pow(Scr, -1.154) * (Math.pow(age, -0.203)))).toFixed(2) + " mL/min/1.73 m2");
        }
        else {
            return "Did not match";
        }
    }
    else if (gender === "Female") {
        if (color === "Black") {
            return ((175 * (Math.pow(Scr, -1.154) * (Math.pow(age, -0.203) * 1.212 * 0.742))).toFixed(2) + " mL/min/1.73 m2");
        }
        else if (color === "Not Black") {
            return ((175 * (Math.pow(Scr, -1.154) * (Math.pow(age, -0.203) * 0.742))).toFixed(2) + " mL/min/1.73 m2");
        }
        else {
            return "Did not match";
        }
    }
    else {
        return "Did not match";
    }
}

module.exports = gfr;