// Dependencies
const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const uniqid = require('uniqid');

// Set up server
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// api routes
app.get('/api/notes', (req, res) => {
    console.log("I am on line 12 of GET /api/notes");
    res.json(db)
});

app.post('/api/notes', (req, res) => {
    console.log("Line 21 POST /api/notes");
    const newNote = req.body;
    newNote.id = uniqid();
    console.log(req.body);
    db.push(newNote);
    res.json(newNote);
})

app.delete('/api/notes/:id', (req, res) => {
    const chosenID = req.params.id;
    console.log({ chosenID });

    for (let i = 0; i < db.length; i++) {
        if (chosenID === db[i].id) {
            console.log(db[i]);
            db.splice(i, 1);
        }
    }
    res.json(db);
})

//html routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.use((req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));