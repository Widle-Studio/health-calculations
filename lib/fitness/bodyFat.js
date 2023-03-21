/**
 * Calculates Body Fat Percentage of a person.
 *
 * @param {('Male'|'Female')} gender - Gender of a person.
 * @param {number} age - Age of a person.
 * @param {number} weight - Weight of a person.
 * @param {('Pound'|'Kgs')} weightType - Weight unit of measurement (Pound or Kgs) of a person.
 * @param {number} height - Height of a person.
 * @param {('Feet'|'Inches'|'Meters')} heightType - Height unit of measurement (Feet, Inches, or Meters) of a person.
 * @returns {number|string} Body Fat Percentage or "Did not match".
 */

try {
    function bodyFat(gender, age, weight, weightType, height, heightType) {
        if (gender !== "Male" && gender !== "Female") {
            return "Invalid gender (use 'Male' or 'Female')";
        }

        if (typeof age !== "number") {
            return "Invalid age type (use 'number')";
        }
        if (typeof weight === "number" || typeof height === "number") {
            switch (gender) {
                case 'Male':
                    const maleGender = 1;
                    switch (weightType) {
                        case 'Pound':
                            switch (heightType) {
                                case 'Inches':
                                    return ((1.20 * (703 * (weight / (height * height)))) + (0.23 * age) - (10.8 * maleGender) - 5.4).toFixed(2);
                                case 'Feet':
                                    return ((1.20 * (703 * (weight / ((height * 12) * (height * 12))))) + (0.23 * age) - (10.8 * maleGender) - 5.4).toFixed(2);
                                case 'Meters':
                                    return ((1.20 * (703 * (weight / ((height * 39.37) * (height * 39.37))))) + (0.23 * age) - (10.8 * maleGender) - 5.4).toFixed(2);
                                default:
                                    return "Invalid height type (use 'Inches', 'Feet' or 'Meters')"; 
                            }
                        case 'Kgs':
                            switch (heightType) {
                                case 'Inches':
                                    return ((1.20 * (weight / ((height * 0.0254) * (height * 0.0254)))) + (0.23 * age) - (10.8 * maleGender) - 5.4).toFixed(2);
                                case 'Feet':
                                    return ((1.20 * (weight / ((height * 0.3048) * (height * 0.3048)))) + (0.23 * age) - (10.8 * maleGender) - 5.4).toFixed(2);
                                case 'Meters':
                                    return ((1.20 * (weight / (height * height))) + (0.23 * age) - (10.8 * maleGender) - 5.4).toFixed(2);
                                default:
                                    return "Invalid height type (use 'Inches', 'Feet' or 'Meters')"; 
                            }
                        default:
                            return "Invalid weight type (use 'Pound' or 'Kgs')";
                    }
                case 'Female':
                    const femaleGender = 0;
                    switch (weightType) {
                        case 'Pound':
                            switch (heightType) {
                                case 'Inches':
                                    return ((1.20 * (703 * (weight / (height * height)))) + (0.23 * age) - (10.8 * femaleGender) - 5.4).toFixed(2);
                                case 'Feet':
                                    return ((1.20 * (703 * (weight / ((height * 12) * (height * 12))))) + (0.23 * age) - (10.8 * femaleGender) - 5.4).toFixed(2);
                                case 'Meters':
                                    return ((1.20 * (703 * (weight / ((height * 39.37) * (height * 39.37))))) + (0.23 * age) - (10.8 * femaleGender) - 5.4).toFixed(2);
                                default:
                                      return "Invalid height type (use 'Inches', 'Feet' or 'Meters')"; 
                            }
                        case 'Kgs':
                            switch (heightType) {
                                case 'Inches':
                                    return ((1.20 * (weight / ((height * 0.0254) * (height * 0.0254)))) + (0.23 * age) - (10.8 * femaleGender) - 5.4).toFixed(2);
                                case 'Feet':
                                    return ((1.20 * (weight / ((height * 0.3048) * (height * 0.3048)))) + (0.23 * age) - (10.8 * femaleGender) - 5.4).toFixed(2);
                                case 'Meters':
                                    return ((1.20 * (weight / (height * height))) + (0.23 * age) - (10.8 * femaleGender) - 5.4).toFixed(2);
                                default:
                                      return "Invalid height type (use 'Inches', 'Feet' or 'Meters')"; 
                            }
                        default:
                            return "Invalid weight type (use 'Pound' or 'Kgs')";
                    }
                default:
                    return "Invalid gender (use 'Male' or 'Female')";
            }
        }
        else {
            return "Invalid weight or height type (use 'number')"
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

module.exports = bodyFat;