const swaggerAuthenticationPath = require("./swagger-authentication-path");
const communityPaths = require("./swagger-community-path");
const swagger3pcPath = require("./swagger-3pc-path");
const swaggerGroupPath = require("./swagger-group-path");
const swaggerCommunityEventPath = require("./swagger-community-event-path");
const swaggerDirectMessagePath = require("./swagger-direct-message-path");
const swaggerSectionChatPath = require("./swagger-section-chat-path");
const swaggerPostPath = require("./swagger-post-path");

module.exports = {
    paths: {
        ...communityPaths,
        ...swaggerAuthenticationPath,
        ...swagger3pcPath,
        ...swaggerGroupPath,
        ...swaggerCommunityEventPath,
        ...swaggerDirectMessagePath,
        ...swaggerSectionChatPath,
        ...swaggerPostPath,
    }
};