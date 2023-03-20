/**
 * Calculates LBM (Lean Body Mass).
 *
 * @param {string} gender - gender of a person.
 * @param {number} weight - weight of a person.
 * @param {string} weightType - weightType (Pound or Kgs) of a person.
 * @param {number} height - height of a person.
 * @param {string} heightType - heightType (Feet , Inches or Meters ) of a person.
 * @returns {number} LBM (Lean Body Mass).
 */

try{
    function lbm(gender, weight, weightType, height, heightType) {
        let conversionFactor;
    
        if (gender === "Male") {
            conversionFactor = 0.407;
        } else if (gender === "Female") {
            conversionFactor = 0.252;
        }
    
        let weightConversion;
    
        if (weightType === "Pound") {
            weightConversion = 0.454;
        } else if (weightType === "Kgs") {
            weightConversion = 1;
        }
    
        let heightConversion;
    
        if (heightType === "Feet") {
            heightConversion = 30.48;
        } else if (heightType === "Inches") {
            heightConversion = 2.54; 
        } else if (heightType === "Meters") { 
            heightConversion = 100; 
        }
    
        let genderOffset;
    
        if (gender === "Male") { 
            genderOffset = 19.2; 
        } else if (gender === "Female") { 
            genderOffset = 48.3; 
       }
    
       return ((((weight * weightConversion) * conversionFactor) + (0.267 * (height * heightConversion))) - genderOffset).toFixed(2); 												   }                                                                                           
    
}
catch (err) {
    res.status(404)
        .send({
            code: 404,
            message: err.message
        });
}

module.exports = lbm;