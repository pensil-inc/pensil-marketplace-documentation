const swaggerCommunityEventSchemas = require("./swagger-schemas/swagger-community-event-schemas");
const swaggerCommunitySchemas = require("./swagger-schemas/swagger-community-schemas");
const swaggerGroupSchemas = require("./swagger-schemas/swagger-group-schemas");
const swaggerUserSchemas = require("./swagger-schemas/swagger-user-schemas");

module.exports = {
    schemas: {
        ...swaggerCommunitySchemas,
        ...swaggerUserSchemas,
        ...swaggerGroupSchemas,
        ...swaggerCommunityEventSchemas,
    }
}