const swaggerUi = require("swagger-ui-express");

const docsV1 = require("./v1");

const configureDocs = app => {

    app.use('/', swaggerUi.serve, swaggerUi.setup(docsV1));
    app.use('/v1', swaggerUi.serve, swaggerUi.setup(docsV1));

    return app;
}

module.exports = configureDocs;