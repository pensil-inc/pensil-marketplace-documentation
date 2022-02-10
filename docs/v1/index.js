const basicConfiguration = require('./swagger-basic-configuration');
const servers = require('./swagger-servers');
const tags = require('./swagger-tags');
const components = require('./swagger-components');
const paths = require('./swagger-paths');

module.exports = {
    ...basicConfiguration,
    ...servers,
    ...tags,
    ...components,
    ...paths,
}