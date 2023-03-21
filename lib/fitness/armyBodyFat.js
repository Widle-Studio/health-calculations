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
try {
    function armyBody(gender, height, heightType, waist, neck, sizeType, hip) {
        // Check for invalid input values
        const validGender = ["Male", "Female"].indexOf(gender) !== -1;
        const validHeightType = ["Feet", "Inches", "Meters"].indexOf(heightType) !== -1;
        const validInput = !isNaN(height) && !isNaN(waist) && !isNaN(neck) && (sizeType === "Meters" || sizeType === "Inches");
        if (!validGender || !validHeightType || !validInput) {
            return "Invalid input values";
        }

        const multiplier = sizeType === "Meters" ? 39.37 : 1;
        if (typeof height === "number") {
            let calculateHeight;
            switch (heightType) {
                case "Feet":
                    calculateHeight = height * 12;
                    break;
                case "Meters":
                    calculateHeight = height / 0.0254;
                    break;
                default:
                    calculateHeight = height;
                    break;
            }

            if (typeof waist === "number" && typeof neck === "number" && typeof hip === "number") {
                const calculateAbf = (abfConstant, waistMultiplier, hipMultiplier) => {
                    const neckMultiplier = multiplier;
                    const waistSize = waist * waistMultiplier;
                    const neckSize = neck * neckMultiplier;
                    const hipSize = hip ? hip * hipMultiplier : 0;
                    const logWaist = Math.log10(waistSize - neckSize);
                    const logHeight = Math.log10(calculateHeight);
                    const logHip = Math.log10(waistSize + hipSize - neckSize);
                    return (abfConstant * logWaist - (70.041 * logHeight) - hipSize - 36.76).toFixed(2);
                }

                if (gender === "Male") {
                    return calculateAbf(86.010, multiplier, 0);
                } else {
                    return calculateAbf(163.205, multiplier, multiplier);
                }
            }
            else {
                return "Invalid waist or neck or hip type (use 'number')"
            }
        }
        else {
            return "Invalid height type (use 'number')"
        }

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