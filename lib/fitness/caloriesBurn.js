/**
 * Calculates Calories Burn.
 *
 * @param {string} activity - activity done by person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @returns {number} Calories Burn per minute.
 */
function caloriesBurn(activity, weight, weightType) {
    if (weightType === "Pound") {
        if (activity === "Sleeping") {
            return ((0.95 * 3.5 * (weight * 0.454)) / 200).toFixed(2);
        }
        else if (activity === "Walking") {
            return ((6 * 3.5 * (weight * 0.454)) / 200).toFixed(2);
        }
        else if (activity === "Eating") {
            return ((1.5 * 3.5 * (weight * 0.454)) / 200).toFixed(2);
        }
        else if (activity === "Running") {
            return ((19 * 3.5 * (weight * 0.454)) / 200).toFixed(2);
        }
        else if (activity === "Other Heavy Work") {
            return ((8 * 3.5 * (weight * 0.454)) / 200).toFixed(2);
        }
        else if (activity === "Other Light Work") {
            return ((4 * 3.5 * (weight * 0.454)) / 200).toFixed(2);
        }
        else {
            return "Did not match";
        }
    }
    else if (weightType === "Kgs") {
        if (activity === "Sleeping") {
            return ((0.95 * 3.5 * weight) / 200).toFixed(2);
        }
        else if (activity === "Walking") {
            return ((6 * 3.5 * weight) / 200).toFixed(2);
        }
        else if (activity === "Eating") {
            return ((1.5 * 3.5 * weight) / 200).toFixed(2);
        }
        else if (activity === "Running") {
            return ((19 * 3.5 * weight) / 200).toFixed(2);
        }
        else if (activity === "Other Heavy Work") {
            return ((8 * 3.5 * weight) / 200).toFixed(2);
        }
        else if (activity === "Other Light Work") {
            return ((4 * 3.5 * weight) / 200).toFixed(2);
        }
        else {
            return "Did not match";
        }
    }
    else {
        return "Did not match";
    }
}

module.exports = caloriesBurn