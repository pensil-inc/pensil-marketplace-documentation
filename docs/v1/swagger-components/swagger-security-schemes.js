module.exports = {
    securitySchemes: {
        BearerToken: {
            type: "http",
            schema: "bearer",
            bearerFormat: "JWT",
            in: "header",
            name: "Authorization"
        },
        APIKEY: {
            type: "apiKey",
            name: "APIKEY",
            in: "header"
        },
        CLIENTID: {
            type: "apiKey",
            name: "CLIENTID",
            in: "header"
        },
        CLIENTSECRET: {
            type: "apiKey",
            name: "CLIENTSECRET",
            in: "header"
        },
        COMMUNITYID: {
            type: "apiKey",
            name: "COMMUNITYID",
            in: "header"
        },
    }
}