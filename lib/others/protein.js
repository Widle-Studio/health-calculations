/**
 * Calculates Protein.
 *
 * @param {string} gender - gender of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {string} activity - activity (Sedentary adults, Endurance athletes , Strength athletes or Pregnant and lactating women (only for female)) of a person
 * @returns {number} Protein in grams.
 */
function protein(gender, weight, weightType, activity) {
    if (gender === "Female") {
        if (weightType === "Pound") {
            if (activity === "Sedentary adults") {
                var Protein = ((weight * 0.45) * 0.8).toFixed(2);
                return Protein + ' grams';
            }
            else if (activity === "Endurance athletes") {
                var Protein1 = ((weight * 0.45) * 1.2).toFixed(2);
                var Protein2 = ((weight * 0.45) * 1.4).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else if (activity === "Strength athletes") {
                var Protein1 = ((weight * 0.45) * 1.2).toFixed(2);
                var Protein2 = ((weight * 0.45) * 1.7).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else if (activity === "Pregnant and lactating women") {
                var Protein1 = ((weight * 0.45) * 1.1).toFixed(2);
                var Protein2 = ((weight * 0.45) * 1.3).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else {
                return "Did not match";
            }
        }
        else if (weightType === "Kgs") {
            if (activity === "Sedentary adults") {
                var Protein = (weight * 0.8).toFixed(2);
                return Protein + ' grams';
            }
            else if (activity === "Endurance athletes") {
                var Protein1 = (weight * 1.2).toFixed(2);
                var Protein2 = (weight * 1.4).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else if (activity === "Strength athletes") {
                var Protein1 = (weight * 1.2).toFixed(2);
                var Protein2 = (weight * 1.7).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else if (activity === "Pregnant and lactating women") {
                var Protein1 = (weight * 1.1).toFixed(2);
                var Protein2 = (weight * 1.3).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else {
                return "Did not match";
            }
        }
        else {
            return "Did not match";
        }
    }
    else if (gender === "Male") {
        if (weightType === "Pound") {
            if (activity === "Sedentary adults") {
                var Protein = ((weight * 0.45) * 0.8).toFixed(2);
                return Protein + ' grams';
            }
            else if (activity === "Endurance athletes") {
                var Protein1 = ((weight * 0.45) * 1.2).toFixed(2);
                var Protein2 = ((weight * 0.45) * 1.4).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else if (activity === "Strength athletes") {
                var Protein1 = ((weight * 0.45) * 1.2).toFixed(2);
                var Protein2 = ((weight * 0.45) * 1.7).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else {
                return "Did not match";
            }
        }
        else if (weightType === "Kgs") {
            if (activity === "Sedentary adults") {
                var Protein = (weight * 0.8).toFixed(2);
                return Protein + ' grams';
            }
            else if (activity === "Endurance athletes") {
                var Protein1 = (weight * 1.2).toFixed(2);
                var Protein2 = (weight * 1.4).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
            }
            else if (activity === "Strength athletes") {
                var Protein1 = (weight * 1.2).toFixed(2);
                var Protein2 = (weight * 1.7).toFixed(2);
                return [Protein1 + ' - ' + Protein2 + ' grams'];
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

module.exports = protein;