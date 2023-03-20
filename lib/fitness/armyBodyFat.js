/**
 * Calculates Army Body Fat Percentage.
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
try{
function armyBody(gender, height, heightType, waist, neck, sizeType, hip) {
    // Check for invalid input values
    if (["Male", "Female"].indexOf(gender) === -1 ||
        ["Feet", "Inches", "Meters"].indexOf(heightType) === -1 ||
        isNaN(height) || isNaN(waist) || isNaN(neck) ||
        sizeType !== "Meters" && sizeType !== "Inches") {
        return "Invalid input values";
    }

    const multiplier = sizeType === "Meters" ? 39.37 : 1;

    let calculateHeight;
    switch (heightType) {
        case "Feet":
            calculateHeight = height * 12;
            break;
        case "Inches":
            calculateHeight = height;
            break;
        case "Meters":
            calculateHeight = height / 0.0254;
            break;
    }
    
    let abf;
    if (gender === "Male") {
        abf = (86.010 * Math.log10((waist * multiplier) - (neck * multiplier))
               - 70.041 * Math.log10(calculateHeight) + 36.76).toFixed(2);
    } else if (gender === "Female") {
         const hipSize = sizeType === "Meters" ? hip * multiplier : hip;
         abf = (163.205 * Math.log10((waist * multiplier) + (hipSize * multiplier) - (neck * multiplier)) 
                - 97.684 * Math.log10(calculateHeight) - 78.387).toFixed(2);
    }
    return abf;
}
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = armyBody;