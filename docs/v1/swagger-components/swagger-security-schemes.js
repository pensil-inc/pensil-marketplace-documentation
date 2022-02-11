module.exports = {
    securitySchemes: {
        BearerToken: {
            type: "http",
            schema: "bearer",
            bearerFormat: "JWT",
            in: "header",
            name: "Authorization",
            description: "Add Authorization header with Bearer Token"
        },
        APIKEY: {
            type: "apiKey",
            name: "APIKEY",
            in: "header"
        },
        CLIENTID: {
            type: "apiKey",
            name: "CLIENTID",
            in: "header",
            description: "Request founders@pensil.in to create one."
        },
        CLIENTSECRET: {
            type: "apiKey",
            name: "CLIENTSECRET",
            in: "header",
            description: "Request founders@pensil.in to create one."
        },
        COMMUNITYID: {
            type: "apiKey",
            name: "COMMUNITYID",
            in: "header",
            description: "This is the community id."
        },
    }
}