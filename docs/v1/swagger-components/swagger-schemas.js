const swaggerCommunityEventSchemas = require("./swagger-schemas/swagger-community-event-schemas");
const swaggerCommunitySchemas = require("./swagger-schemas/swagger-community-schemas");
const swaggerDirectMessageSchemas = require("./swagger-schemas/swagger-direct-message-schemas");
const swaggerGroupSchemas = require("./swagger-schemas/swagger-group-schemas");
const swaggerPostSchemas = require("./swagger-schemas/swagger-post-schemas");
const swaggerSectionChatSchemas = require("./swagger-schemas/swagger-section-chat-schemas");
const swaggerUserSchemas = require("./swagger-schemas/swagger-user-schemas");

module.exports = {
    schemas: {
        ...swaggerCommunitySchemas,
        ...swaggerUserSchemas,
        ...swaggerGroupSchemas,
        ...swaggerCommunityEventSchemas,
        ...swaggerDirectMessageSchemas,
        ...swaggerSectionChatSchemas,
        ...swaggerPostSchemas,
    }
}