const express = require('express');
const configureDocs = require('./docs');

const app = express();

configureDocs(app);

app.listen(3005, () => {
    console.log('Server running on port 3005');
})