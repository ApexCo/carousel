const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes.js');

const app = express();

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use('/:id/bundle', express.static(path.join(__dirname, '../public/bundle.js')));

app.use('/api/similar_listings', routes);
app.use('/api/listings', routes);

module.exports = app;