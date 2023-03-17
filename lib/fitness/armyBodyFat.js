/**
 * Calculates Army Bdoy Fat Percentage.
 *
 * @param {string} gender - gender of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @param {number} waist - waist size of a person.
 * @param {number} neck - neck size of a person.
 * @param {string} sizeType - sizeType (Meters , Inches) of a person.
 * @param {number} hip - hip size of only female.
 * @returns {number} Army Body Fat Percentage.
 */
function armyBody(gender, height, heightType, waist, neck, sizeType, hip) {
    if (gender === "Male") {
        if (heightType === "Feet") {
            if (sizeType === "Meters") {
                return ((86.010 * Math.log10((waist * 39.37) - (neck * 39.37))) - (70.041 * Math.log10((height * 12))) + 36.76).toFixed(2);
            }
            else if (sizeType === "Inches") {
                return ((86.010 * Math.log10(waist - neck)) - (70.041 * Math.log10(height * 12)) + 36.76).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else if (heightType === "Meters") {
            if (sizeType === "Meters") {
                return ((86.010 * Math.log10((waist * 39.37) - (neck * 39.37))) - (70.041 * Math.log10((height * 39.37))) + 36.76).toFixed(2);
            }
            else if (sizeType === "Inches") {
                return ((86.010 * Math.log10(waist - neck)) - (70.041 * Math.log10(height * 39.37)) + 36.76).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else if (heightType === "Inches") {
            if (sizeType === "Meters") {
                return ((86.010 * Math.log10((waist * 39.37) - (neck * 39.37))) - (70.041 * Math.log10(height)) + 36.76).toFixed(2);
            }
            else if (sizeType === "Inches") {
                return ((86.010 * Math.log10(waist - neck)) - (70.041 * Math.log10(height)) + 36.76).toFixed(2);
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
        if (heightType === "Feet") {
            if (sizeType === "Meters") {
                return ((163.205 * Math.log10((waist * 39.37) + (hip * 39.37) - (neck * 39.37))) - (97.684 * Math.log10((height * 12))) - 78.387).toFixed(2);
            }
            else if (sizeType === "Inches") {
                return ((163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height * 12)) - 78.387).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else if (heightType === "Meters") {
            if (sizeType === "Meters") {
                return ((163.205 * Math.log10((waist * 39.37) + (hip * 39.37) - (neck * 39.37))) - (97.684 * Math.log10((height * 39.37))) - 78.387).toFixed(2);
            }
            else if (sizeType === "Inches") {
                return ((163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height * 39.37)) - 78.387).toFixed(2);
            }
            else {
                return "Did not match";
            }
        }
        else if (heightType === "Inches") {
            if (sizeType === "Meters") {
                return ((163.205 * Math.log10((waist * 39.37) + (hip * 39.37) - (neck * 39.37))) - (97.684 * Math.log10(height)) - 78.387).toFixed(2);
            }
            else if (sizeType === "Inches") {
                return ((163.205 * Math.log10(waist + hip - neck)) - (97.684 * Math.log10(height)) - 78.387).toFixed(2);
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

module.exports = armyBody;