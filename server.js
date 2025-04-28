const express = require('express');
const WebSocket = require('ws');
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


// Erstelle einen WebSocket-Server
const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket-Server läuft auf ws://localhost:8181');

// Event: Wenn ein Client eine Verbindung herstellt
wss.on('connection', (ws) => {
    console.log('Ein Client hat sich verbunden.');

    // Event: Wenn der Server eine Nachricht vom Client erhält
    ws.on('message', (message) => {
        console.log(`Nachricht vom Client: ${message}`);

        // Antwort an den Client
        ws.send(`Server sagt: Du hast "${message}" gesendet.`);
    });

    // Event: Wenn die Verbindung geschlossen wird
    ws.on('close', () => {
        console.log('Ein Client hat die Verbindung geschlossen.');
    });

    // Sende eine Begrüßungsnachricht an den Client
    ws.send('Willkommen beim WebSocket-Server!');
});