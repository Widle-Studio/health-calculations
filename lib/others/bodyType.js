/**
 * Calculates Body Type.
 *
 * @param {string} gender - gender of a person.
 * @param {string} type - type (inches or cm) of a measurement.
 * @param {number} bust - bust measurement of a person.
 * @param {number} waist - waist measurement of a person.
 * @param {number} hips - hips measurement of a person.
 * @param {number} highHip - highHip measurement of a person.
 * @returns {string} Body Type.
 */

try {
    function bodyType(gender, type, bust, waist, hips, highHip) {
        if (typeof waist !== "number" || typeof bust !== "number" || typeof hips !== "number" || typeof highHip !== "number") {
            return "Invalid waist or bust or hips or highHip input type (use 'number')";
        }

        if (gender === "Male") {
            if (type === "inches") {
                if (((bust - hips) <= 1) && ((hips - bust) < 3.6) && ((bust - waist) >= 9 || (hips - waist) >= 10)) {
                    Body_Type = "Hourglass";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) >= 3.6) && ((hips - bust) < 10) && ((hips - waist) >= 9) && ((highHip / waist) < 1.193)) {
                    Body_Type = "Bottom hourglass";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((bust - hips) > 1) && ((bust - hips) < 10) && ((bust - waist) >= 9)) {
                    Body_Type = "Top hourglass";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) > 2) && ((hips - waist) >= 7) && ((highHip / waist) >= 1.193)) {
                    Body_Type = "Spoon";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) >= 3.6) && ((hips - waist) < 9)) {
                    Body_Type = "Triangle"
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((bust - hips) >= 3.6) && ((bust - waist) < 9)) {
                    Body_Type = "Inverted triangle";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) < 3.6) && ((bust - hips) < 3.6) && ((bust - waist) < 9) && ((hips - waist) < 10)) {
                    Body_Type = "Rectangle";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else {
                    return "Did not match";
                }
            }
            else if (type === "cm") {
                if ((((bust * 2.54) - (hips * 2.54)) <= 1) && (((hips * 2.54) - (bust * 2.54)) < 3.6) && (((bust * 2.54) - (waist * 2.54)) >= 9 || ((hips * 2.54) - (waist * 2.54)) >= 10)) {
                    Body_Type = "Hourglass";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) >= 3.6) && (((hips * 2.54) - (bust * 2.54)) < 10) && (((hips * 2.54) - (waist * 2.54)) >= 9) && (((highHip * 2.54) / (waist * 2.54)) < 1.193)) {
                    Body_Type = "Bottom hourglass";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((bust * 2.54) - (hips * 2.54)) > 1) && (((bust * 2.54) - (hips * 2.54)) < 10) && (((bust * 2.54) - (waist * 2.54)) >= 9)) {
                    Body_Type = "Top hourglass";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) > 2) && (((hips * 2.54) - (waist * 2.54)) >= 7) && (((highHip * 2.54) / (waist * 2.54)) >= 1.193)) {
                    Body_Type = "Spoon";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) >= 3.6) && (((hips * 2.54) - (waist * 2.54)) < 9)) {
                    Body_Type = "Triangle"
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((bust * 2.54) - (hips * 2.54)) >= 3.6) && (((bust * 2.54) - (waist * 2.54)) < 9)) {
                    Body_Type = "Inverted triangle";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) < 3.6) && (((bust * 2.54) - (hips * 2.54)) < 3.6) && (((bust * 2.54) - (waist * 2.54)) < 9) && (((hips * 2.54) - (waist * 2.54)) < 10)) {
                    Body_Type = "Rectangle";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.95) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.96 && WHR < 1.0) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 1.0) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else {
                    return "Did not match";
                }
            }
            else {
                return "Invalid type (use 'cm' or 'inches')";
            }
        }
        else if (gender === "Female") {
            if (type === "inches") {
                if (((bust - hips) <= 1) && ((hips - bust) < 3.6) && ((bust - waist) >= 9 || (hips - waist) >= 10)) {
                    Body_Type = "Hourglass";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) >= 3.6) && ((hips - bust) < 10) && ((hips - waist) >= 9) && ((highHip / waist) < 1.193)) {
                    Body_Type = "Bottom hourglass";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((bust - hips) > 1) && ((bust - hips) < 10) && ((bust - waist) >= 9)) {
                    Body_Type = "Top hourglass";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) > 2) && ((hips - waist) >= 7) && ((highHip / waist) >= 1.193)) {
                    Body_Type = "Spoon";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) >= 3.6) && ((hips - waist) < 9)) {
                    Body_Type = "Triangle"
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((bust - hips) >= 3.6) && ((bust - waist) < 9)) {
                    Body_Type = "Inverted triangle";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if (((hips - bust) < 3.6) && ((bust - hips) < 3.6) && ((bust - waist) < 9) && ((hips - waist) < 10)) {
                    Body_Type = "Rectangle";
                    WHR = (waist / hips).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else {
                    return "Did not match";
                }
            }
            else if (type === "cm") {
                if ((((bust * 2.54) - (hips * 2.54)) <= 1) && (((hips * 2.54) - (bust * 2.54)) < 3.6) && (((bust * 2.54) - (waist * 2.54)) >= 9 || ((hips * 2.54) - (waist * 2.54)) >= 10)) {
                    Body_Type = "Hourglass";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) >= 3.6) && (((hips * 2.54) - (bust * 2.54)) < 10) && (((hips * 2.54) - (waist * 2.54)) >= 9) && (((highHip * 2.54) / (waist * 2.54)) < 1.193)) {
                    Body_Type = "Bottom hourglass";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((bust * 2.54) - (hips * 2.54)) > 1) && (((bust * 2.54) - (hips * 2.54)) < 10) && (((bust * 2.54) - (waist * 2.54)) >= 9)) {
                    Body_Type = "Top hourglass";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) > 2) && (((hips * 2.54) - (waist * 2.54)) >= 7) && (((highHip * 2.54) / (waist * 2.54)) >= 1.193)) {
                    Body_Type = "Spoon";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) >= 3.6) && (((hips * 2.54) - (waist * 2.54)) < 9)) {
                    Body_Type = "Triangle"
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((bust * 2.54) - (hips * 2.54)) >= 3.6) && (((bust * 2.54) - (waist * 2.54)) < 9)) {
                    Body_Type = "Inverted triangle";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else if ((((hips * 2.54) - (bust * 2.54)) < 3.6) && (((bust * 2.54) - (hips * 2.54)) < 3.6) && (((bust * 2.54) - (waist * 2.54)) < 9) && (((hips * 2.54) - (waist * 2.54)) < 10)) {
                    Body_Type = "Rectangle";
                    WHR = ((waist * 2.54) / (hips * 2.54)).toFixed(2);
                    if (WHR <= 0.80) {
                        WHR_Type = " Low Health Risk"
                    }
                    else if (WHR >= 0.81 && WHR < 0.84) {
                        WHR_Type = " Moderate Risk"
                    }
                    else if (WHR >= 0.84) {
                        WHR_Type = "High Risk"
                    }
                    else {
                        WHR_Type = "Did not get"
                    }
                    return [Body_Type, WHR + " ( " + WHR_Type + " ) "];
                }
                else {
                    return "Did not match";
                }
            }
            else {
                return "Invalid type (use 'cm' or 'inches')";
            }
        }
        else {
            return "Invalid gender (use 'Male' or 'Female')";
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

module.exports = bodyType;