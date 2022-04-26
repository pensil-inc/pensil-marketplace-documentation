const swaggerUi = require("swagger-ui-express");
const jsYaml = require('js-yaml');

const docsV1 = require("./v1");

const readmes = require("./v1/readmes");

const configureDocs = app => {

    app.set('view engine', 'ejs');

    // readmes
    app.use("/readme", readmes);

    // yamls
    app.get('/v1/swagger.yaml', sendYaml(docsV1));

    // swagger
    app.use('/swagger/v1', swaggerUi.serve, swaggerUi.setup(docsV1));
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(docsV1));

    // redoc
    app.use('/v1', redoc('/v1/swagger.yaml'));
    app.use('/', redoc('/v1/swagger.yaml'));

    return app;
}

function redoc(yamlUrl) {
    return (req, res) => {
        return res.render('redoc', {
            yamlUrl
        });
    }
}

function sendYaml(docs) {
    return (req, res) => {
        res.setHeader('Content-Type', 'text/yaml');
        return res.send(jsYaml.dump(docs));
    }
}

module.exports = configureDocs;