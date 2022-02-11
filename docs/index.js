const swaggerUi = require("swagger-ui-express");
const jsYaml = require('js-yaml');

const docsV1 = require("./v1");

const configureDocs = app => {
    // yamls
    app.get('/v1/swagger.yaml', sendYaml(docsV1));

    app.use('/v1', swaggerUi.serve, swaggerUi.setup(docsV1));
    app.use('/', swaggerUi.serve, swaggerUi.setup(docsV1));

    return app;
}

function sendYaml(docs) {
    return (req, res) => {
        res.setHeader('Content-Type', 'text/yaml');
        return res.send(jsYaml.dump(docs));
    }
}

module.exports = configureDocs;