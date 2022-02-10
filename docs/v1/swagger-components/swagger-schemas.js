const swaggerCommunitySchemas = require("./swagger-schemas/swagger-community-schemas");
const swaggerUserSchemas = require("./swagger-schemas/swagger-user-schemas");

module.exports = {
    schemas: {
        ...swaggerCommunitySchemas,
        ...swaggerUserSchemas
    }
}