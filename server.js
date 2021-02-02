// Dependencies
const express = require('express');
const path = require('path');

// Set up server
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Import from routes.js
require('./routes')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));