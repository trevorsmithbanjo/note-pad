const path = require('path');
const fs = require('fs');

const notes = {};


module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
    app.use((req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

    app.post('/api/notes', (req, res) => {
        notes.push(req.body);
        fs.readFile('db/db.json', (err, data) => {
            let db = json.parse(data);
            db.push(notes);
            console.log({ db });
            fs.writeFile('db/db.json', json.stringify(db, null, '/t'));
            if (err) throw err;
        })
        console.log(req.body);
        res.json(notes);
    })
}