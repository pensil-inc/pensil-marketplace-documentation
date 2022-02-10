const swaggerRequestBodies = require("./swagger-request-bodies");
const schemas = require("./swagger-schemas");
const swaggerSecuitySchemes = require("./swagger-security-schemes");

module.exports = {
    components: {
        ...schemas,
        ...swaggerRequestBodies,
        ...swaggerSecuitySchemes
    }
};