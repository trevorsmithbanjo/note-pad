const path = require('path');

module.exports = (app) => {
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
    app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));
    app.use((req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
}