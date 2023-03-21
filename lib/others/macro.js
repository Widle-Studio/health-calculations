/**
 * Calculates Macro (person's macronutrient and Calorie needs under normal conditions).
 *
 * @param {string} gender - gender of a person.
 * @param {string} goal - goal (Bulking or Cutting) of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @returns {number} Macro (Calories, Protein_daily (in g), Protein, Fat, Fat_daily (in g), Carbohydrates)
 */

try {
    function macro(gender, goal, weight, weightType) {
        if (typeof weight !== "number") {
            return "Invalid weight input type (use 'number')";
        }

        if (weightType !== "Pound" && weightType !== "Kgs") {
            return "Invalid weightType (use 'Pound' or 'Kgs')";
        }

        const weightInKgs = weightType === 'Kgs' ? weight : weight * 0.45;

        const calculateMacros = {
            Male: {
                Bulking: {
                    calories: weightInKgs * 15 + 250,
                    proteinDaily: weightInKgs * 1,
                    fatRatio: 0.30
                },
                Cutting: {
                    calories: weightInKgs * 15 - 250,
                    proteinDaily: weightInKgs * 1.25,
                    fatRatio: 0.30
                }
            },
            Female: {
                Bulking: {
                    calories: weightInKgs * 13 + 250,
                    proteinDaily: weightInKgs * 1,
                    fatRatio: 0.30
                },
                Cutting: {
                    calories: weightInKgs * 13 - 250,
                    proteinDaily: weightInKgs * 1.25,
                    fatRatio: 0.30
                }
            }
        };

        if (!calculateMacros[gender] || !calculateMacros[gender][goal]) {
            throw new Error('Invalid gender or goal provided');
        }

        const { calories, proteinDaily, fatRatio } = calculateMacros[gender][goal];
        const protein = proteinDaily * 4;
        const fat = ((calories - protein) * fatRatio).toFixed(2);
        const fatDaily = (fat / 9).toFixed(2);
        const carbohydrates = ((calories - protein - fat) / 4).toFixed(2);

        return [calories, `${proteinDaily} g`, protein, fat, `${fatDaily} g`, `${carbohydrates} g`];
    }

}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = macro; 