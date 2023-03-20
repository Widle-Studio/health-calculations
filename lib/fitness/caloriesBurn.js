/**
 * Calculates Calories Burn.
 *
 * @param {string} activity - activity done by person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @returns {number} Calories Burn per minute.
 */

try {
    function caloriesBurn(activity, weight, weightType) {
        let conversionFactor;

        if (weightType === "Pound") {
            conversionFactor = 0.454;
        } else if (weightType === "Kgs") {
            conversionFactor = 1;
        } else {
            return "Did not match";
        }

        let activityFactor;

        switch (activity) {
            case "Sleeping":
                activityFactor = 0.95;
                break;
            case "Walking":
                activityFactor = 6;
                break;
            case "Eating":
                activityFactor = 1.5;
                break;
            case "Running":
                activityFactor = 19;
                break;
            case "Other Heavy Work":
                activityFactor = 8;
                break;
            case "Other Light Work":
                activityFactor = 4;
                break;
            default: return "Did not match";
        }

        return ((activityFactor * 3.5 * (weight * conversionFactor)) / 200).toFixed(2);
    }

}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = caloriesBurn