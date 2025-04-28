const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const viewsDir = path.join(__dirname, 'views');
const jsDir = path.join(__dirname, 'js');
const cssDir = path.join(__dirname, 'css');
const resourcesDir = path.join(__dirname, 'resources');

// Statische Dateien bereitstellen (z. B. HTML, JSON, CSS, JS)
app.use(express.static(viewsDir));
app.use(express.static(jsDir));
app.use(express.static(cssDir));
app.use(express.static(resourcesDir));

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources', 'favicon.ico'));
});
app.get('/game.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'game.html'));
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

const main = require('./js/main.js');