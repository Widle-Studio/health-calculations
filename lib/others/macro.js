/**
 * Calculates Macro (person's macronutrient and Calorie needs under normal conditions).
 *
 * @param {string} gender - gender of a person.
 * @param {string} goal - goal (Bulking or Cutting) of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @returns {number} Macro (Calories, Protein_daily (in g), Protein, Fat, Fat_daily (in g), Carbohydrates)
 */
function macro(gender, goal, weight, weightType) {
    if (gender === "Male") {
        if (goal === "Bulking") {
            if (weightType === "Pound") {
                var Calories = ((weight * 0.45) * 15 + 250)
                var Protein_daily = (weight * 0.45) * 1 + " g"
                var Protein = ((weight * 0.45) * 1) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else if (weightType === "Kgs") {
                var Calories = (weight * 15 + 250)
                var Protein_daily = weight * 1 + " g"
                var Protein = (weight * 1) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else {
                return "Did not match";
            }
        }
        if (goal === "Cutting") {
            if (weightType === "Pound") {
                var Calories = ((weight * 0.45) * 15 - 250)
                var Protein_daily = (weight * 0.45) * 1.25 + " g"
                var Protein = ((weight * 0.45) * 1.25) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else if (weightType === "Kgs") {
                var Calories = (weight * 15 - 250)
                var Protein_daily = (weight * 0.45) * 1.25 + " g"
                var Protein = (weight * 1.25) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else {
                return "Did not match";
            }
        }
    }
    else if (gender === "Female") {
        if (goal === "Bulking") {
            if (weightType === "Pound") {
                var Calories = ((weight * 0.45) * 13 + 250)
                var Protein_daily = (weight * 0.45) * 1 + " g"
                var Protein = ((weight * 0.45) * 1) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else if (weightType === "Kgs") {
                var Calories = (weight * 13 + 250)
                var Protein_daily = weight * 1 + " g"
                var Protein = (weight * 1) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else {
                return "Did not match";
            }
        }
        if (goal === "Cutting") {
            if (weightType === "Pound") {
                var Calories = ((weight * 0.45) * 13 - 250)
                var Protein_daily = (weight * 0.45) * 1.25 + " g"
                var Protein = ((weight * 0.45) * 1.25) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else if (weightType === "Kgs") {
                var Calories = (weight * 13 - 250)
                var Protein_daily = (weight * 0.45) * 1.25 + " g"
                var Protein = (weight * 1.25) * 4
                var Fat = ((Calories - Protein) * .30).toFixed(2)
                var Fat_daily = (((Calories - Protein) * .30) / 9).toFixed(2) + " g"
                var Carbohydrates = (Calories - Protein - Fat) / 4 + " g"
                return [Calories, Protein_daily, Protein, Fat, Fat_daily, Carbohydrates]
            }
            else {
                return "Did not match";
            }
        }
    }
    else {
        return "Did not match";
    }
}

module.exports = macro; 