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
        switch (gender) {
            case "Female":
                switch (weightType) {
                    case "Pound":
                        switch (activity) {
                            case "Sedentary adults":
                                var proteinAmount = ((weight * 0.45) * 0.8).toFixed(2);
                                return proteinAmount + ' grams';
                            case "Endurance athletes":
                                var proteinAmount1 = ((weight * 0.45) * 1.2).toFixed(2);
                                var proteinAmount2 = ((weight * 0.45) * 1.4).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            case "Strength athletes":
                                var proteinAmount1 = ((weight * 0.45) * 1.2).toFixed(2);
                                var proteinAmount2 = ((weight * 0.45) * 1.7).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            case "Pregnant and lactating women":
                                var proteinAmount1 = ((weight * 0.45) * 1.1).toFixed(2);
                                var proteinAmount2 = ((weight * 0.45) * 1.3).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            default:
                                return "Did not match";
                        }
                        break;
                    case "Kgs":
                        switch (activity) {
                            case "Sedentary adults":
                                var proteinAmount = (weight * 0.8).toFixed(2);
                                return proteinAmount + ' grams';
                            case "Endurance athletes":
                                var proteinAmount1 = (weight * 1.2).toFixed(2);
                                var proteinAmount2 = (weight * 1.4).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            case "Strength athletes":
                                var proteinAmount1 = (weight * 1.2).toFixed(2);
                                var proteinAmount2 = (weight * 1.7).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            case "Pregnant and lactating women":
                                var proteinAmount1 = (weight * 1.1).toFixed(2);
                                var proteinAmount2 = (weight * 1.3).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            default:
                                return "Did not match";
                        }
                        break;
                    default:
                        return "Did not match";
                }
                break;

            case "Male":
                switch (weightType) {
                    case "Pound":
                        switch (activity) {
                            case "Sedentary adults":
                                var proteinAmount = ((weight * 0.45) * 0.8).toFixed(2);
                                return proteinAmount + ' grams';
                            case "Endurance athletes":
                                var proteinAmount1 = ((weight * 0.45) * 1.2).toFixed(2);
                                var proteinAmount2 = ((weight * 0.45) * 1.4).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            case "Strength athletes":
                                var proteinAmount1 = ((weight * 0.45) * 1.2).toFixed(2);
                                var proteinAmount2 = ((weight * 0.45) * 1.7).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            default:
                                return "Did not match";
                        }
                        break;
                    case "Kgs":
                        switch (activity) {
                            case "Sedentary adults":
                                var proteinAmount = (weight * 0.8).toFixed(2);
                                return proteinAmount + ' grams';
                            case "Endurance athletes":
                                var proteinAmount1 = (weight * 1.2).toFixed(2);
                                var proteinAmount2 = (weight * 1.4).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            case "Strength athletes":
                                var proteinAmount1 = (weight * 1.2).toFixed(2);
                                var proteinAmount2 = (weight * 1.7).toFixed(2);
                                return [proteinAmount1 + ' - ' + proteinAmount2 + ' grams'];
                            default:
                                return "Did not match";
                        }
                        break;
                    default:
                        return "Did not match";
                }
                break;

            default:
                return "Did not match";
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