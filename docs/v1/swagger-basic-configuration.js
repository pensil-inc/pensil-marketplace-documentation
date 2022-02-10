module.exports = {
    openapi: '3.0.0',
    info: {
        title: 'Pensil API',
        version: '1.0.0',
        description: 'Pensil API',
        contact: {
            name: "Pensil",
            url: "https://pensil.in",
            email: "contact@pensil.in"
        },
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Pensil API"
        },
        {
            url: "https://pensil.in/api",
            description: "Pensil API"
        },
    ],
    consumes: [
        "application/json",
    ],
    produces: [
        "application/json",
    ],
};