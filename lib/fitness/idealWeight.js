/**
 * Calculates Ideal Weight.
 *
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} Ideal Weight.
 */
function idealWeight(weight, weightType, height, heightType) {
    if (weightType === "Pound") {
        if (heightType === "Inches") {
            return (5 * (703 * (weight / ((height * 0.0254) * (height * 0.0254)))) + ((703 * (weight / ((height * 0.0254) * (height * 0.0254)))) / 5) * (height - 60)).toFixed(2);
        } else if (heightType === "Feet") {
            return (5 * (703 * (weight / ((height * 0.3048) * (height * 0.3048)))) + ((703 * (weight / ((height * 0.3048) * (height * 0.3048)))) / 5) * ((height * 12) - 60)).toFixed(2);
        } else if (heightType === "Meters") {
            return (5 * (703 * (weight / (height * height))) + ((703 * (weight / (height * height))) / 5) * ((height * 39.37) - 60)).toFixed(2);
        }
        else {
            return "Did not match";
        }
    } else if (weightType === "Kgs") {
        if (heightType === "Inches") {
            return (2.2 * (weight / ((height * 0.0254) * (height * 0.0254))) + (3.5 * (weight / ((height * 0.0254) * (height * 0.0254)))) * ((height * 0.0254) - 1.5)).toFixed(2);
        } else if (heightType === "Feet") {
            return (2.2 * (weight / ((height * 0.3048) * (height * 0.3048))) + (3.5 * (weight / ((height * 0.3048) * (height * 0.3048)))) * ((height * 0.3048) - 1.5)).toFixed(2);
        } else if (heightType === "Meters") {
            return (2.2 * (weight / (height * height)) + (3.5 * (weight / (height * height))) * (height - 1.5)).toFixed(2);
        }
        else {
            return "Did not match";
        }
    } else {
        return "Did not match";
    }

}

module.exports = idealWeight;