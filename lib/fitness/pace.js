/**
 * Calculates Pace.
 *
 * @param {number} distance - distance covered by a person.
 * @param {string} distanceType - distanceType (miles , kms , meters) covered by a person.
 * @param {number} time - time taken by a person.
 * @param {string} timeType - timeType (sec , min , hour) covered by a person.
 * @returns {number} Pace.
 */

try {
    function pace(distance, distanceType, time, timeType) {
        if (typeof distance !== "number" || typeof time !== "number") {
            return "Invalid distance or time input type (use 'number')";
        }

        const distanceConversion = {
            miles: 1.609344,
            kms: 1,
            meters: 0.001,
        };
        const secondsPerTimeType = {
            sec: 1,
            min: 60,
            hour: 3600,
        };

        if (!distanceConversion[distanceType]) {
            return "Use valid inputs (use 'miles' , 'kms' or 'meters') ";
        }
        if (!secondsPerTimeType[timeType]) {
            return "Use valid inputs (use 'sec' , 'min' or 'hour') ";
        }

        const distanceInKms = distance * distanceConversion[distanceType];
        const seconds = time * secondsPerTimeType[timeType];
        return (seconds / distanceInKms).toFixed(2);
    };
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = pace;