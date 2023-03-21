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
        if (typeof weight !== "number") {
            return "Invalid weight input type (use 'number')";
        }
        let conversionFactor;

        if (weightType === "Pound") {
            conversionFactor = 0.454;
        } else if (weightType === "Kgs") {
            conversionFactor = 1;
        } else {
            return "Invalid weight type (use 'Pound' or 'Kgs')";
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
            default:
                return "Invalid activity input type (use 'Sleeping' or 'Walking' or 'Eating' or 'Running' or 'Other Heavy Work' or 'Other Light Work')";
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