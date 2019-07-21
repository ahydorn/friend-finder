// Required packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Express setup
const app = express();
// Port setup
const PORT = process.env.PORT || 3000;

// bodyParser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static('public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});