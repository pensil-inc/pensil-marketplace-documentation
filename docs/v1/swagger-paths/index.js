const swaggerAuthenticationPath = require("./swagger-authentication-path");
const communityPaths = require("./swagger-community-path");
const swagger3pcPath = require("./swagger-3pc-path");

module.exports = {
    paths: {
        ...communityPaths,
        ...swaggerAuthenticationPath,
        ...swagger3pcPath
    }
};