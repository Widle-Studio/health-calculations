/**
 * Calculates Protein.
 *
 * @param {string} gender - gender of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {string} activity - activity (Sedentary adults, Endurance athletes , Strength athletes or Pregnant and lactating women (only for female)) of a person
 * @returns {number} Protein in grams.
 */
try {
    function protein(gender, weight, weightType, activity) {
        if (typeof weight !== "number") {
            return "Invalid weight input type (use 'number')";
        }

        if (weightType !== "Pound" && weightType !== "Kgs") {
            return "Invalid weightType (use 'Pound' or 'Kgs')";
        }
        const weightInKgs = weightType === 'Pound' ? weight * 0.45 : weight;
        let Protein1, Protein2;

        switch (activity) {
            case 'Sedentary adults':
                return `${(weightInKgs * 0.8).toFixed(2)} grams`;
            case 'Endurance athletes':
                Protein1 = weightInKgs * 1.2;
                Protein2 = weightInKgs * 1.4;
                return `${Protein1.toFixed(2)} - ${Protein2.toFixed(2)} grams`;
            case 'Strength athletes':
                Protein1 = weightInKgs * 1.2;
                Protein2 = weightInKgs * 1.7;
                return `${Protein1.toFixed(2)} - ${Protein2.toFixed(2)} grams`;
            case 'Pregnant and lactating women':
                Protein1 = weightInKgs * 1.1;
                Protein2 = weightInKgs * 1.3;
                return `${Protein1.toFixed(2)} - ${Protein2.toFixed(2)} grams`;
            default:
                return 'Invalid activity type';
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


module.exports = protein;