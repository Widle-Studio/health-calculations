/**
 * Calculates Pace.
 *
 * @param {number} distance - distance covered by a person.
 * @param {string} distanceType - distanceType (miles , kms , meters) covered by a person.
 * @param {number} time - time taken by a person.
 * @param {string} timeType - timeType (sec , min , hour) covered by a person.
 * @returns {number} Pace.
 */
function pace(distance, distanceType, time, timeType) {
    if (distanceType === "miles") {
        if (timeType === "sec") {
            return (time / (distance * 1.609344)).toFixed(2);
        }
        else if (timeType === "min") {
            return ((time * 60) / (distance * 1.609344)).toFixed(2);
        }
        else if (timeType === "hour") {
            return ((time * 3600) / (distance * 1.609344)).toFixed(2);
        }
        else {
            return "Did not match";
        }
    }
    else if (distanceType === "kms") {
        if (timeType === "sec") {
            return (time / distance).toFixed(2);
        }
        else if (timeType === "min") {
            return ((time * 60) / distance).toFixed(2);
        }
        else if (timeType === "hour") {
            return ((time * 3600) / distance).toFixed(2);
        }
        else {
            return "Did not match";
        }
    }
    else if (distanceType === "meters") {
        if (timeType === "sec") {
            return (time / (distance * 0.001)).toFixed(2);
        }
        else if (timeType === "min") {
            return ((time * 60) / (distance * 0.001)).toFixed(2);
        }
        else if (timeType === "hour") {
            return ((time * 3600) / (distance * 0.001)).toFixed(2);
        }
        else {
            return "Did not match";
        }
    }
    else {
        return "Did not match";
    }
}

module.exports = pace;