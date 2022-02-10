module.exports = {
    securitySchemes: {
        clientId: {
            type: "apiKey",
            name: "clientId",
            in: "header"
        },
        clientSecret: {
            type: "apiKey",
            name: "clientSecret",
            in: "header"
        },
        communityId: {
            type: "apiKey",
            name: "communityId",
            in: "header"
        }
    }
}