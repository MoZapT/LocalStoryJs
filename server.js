const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

const viewsDir = path.join(__dirname, 'views');
const jsDir = path.join(__dirname, 'js');
const cssDir = path.join(__dirname, 'css');
const templatesDir = path.join(__dirname, 'templates');
const resourcesDir = path.join(__dirname, 'resources');

// Statische Dateien bereitstellen (z. B. HTML, JSON, CSS, JS)
app.use(express.static(viewsDir));
app.use(express.static(jsDir));
app.use(express.static(cssDir));
app.use(express.static(templatesDir));
app.use(express.static(resourcesDir));

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources', 'favicon.ico'));
});
app.get('/game.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'game.html'));
});
app.get('/js-bundle', async (req, res) => {
    let files = await fs.readdir(jsDir, { recursive: true });
    files = files.filter((file) => { 
        return file.endsWith('.js') && file !== 'main.js' && file !== 'loader.js';
    });

    res.json(files);
});
app.get('/actors-bundle', async (req, res) => {
    try {
        const dir = path.join(templatesDir, 'actors');

        const files = await fs.readdir(dir, { recursive: true, withFileTypes: true });

        const templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json'))
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );

        res.json(templates);
    } catch (err) {
        console.error('Fehler beim Lesen des Verzeichnisses:', err);
        res.status(500).json({ error: 'Fehler beim Lesen des Verzeichnisses' });
    }
});
app.get('/items-bundle', async (req, res) => {
    try {
        const dir = path.join(templatesDir, 'items');

        const files = await fs.readdir(dir, { recursive: true, withFileTypes: true });

        const templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json'))
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );

        res.json(templates);
    } catch (err) {
        console.error('Fehler beim Lesen des Verzeichnisses:', err);
        res.status(500).json({ error: 'Fehler beim Lesen des Verzeichnisses' });
    }
});
app.get('/locations-bundle', async (req, res) => {
    try {
        const dir = path.join(templatesDir, 'locations');

        const files = await fs.readdir(dir, { recursive: true, withFileTypes: true });

        const templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json'))
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );

        res.json(templates);
    } catch (err) {
        console.error('Fehler beim Lesen des Verzeichnisses:', err);
        res.status(500).json({ error: 'Fehler beim Lesen des Verzeichnisses' });
    }
});
app.get('/scripts-bundle', async (req, res) => {
    try {
        const dir = path.join(templatesDir, 'scripts');

        const files = await fs.readdir(dir, { recursive: true, withFileTypes: true });

        const templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.lua'))
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );

        res.json(templates);
    } catch (err) {
        console.error('Fehler beim Lesen des Verzeichnisses:', err);
        res.status(500).json({ error: 'Fehler beim Lesen des Verzeichnisses' });
    }
});
app.get('/world-bundle', async (req, res) => {
    try {
        const dir = path.join(templatesDir, 'world');

        const files = await fs.readdir(dir, { recursive: true, withFileTypes: true });

        const templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json'))
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );

        res.json(templates);
    } catch (err) {
        console.error('Fehler beim Lesen des Verzeichnisses:', err);
        res.status(500).json({ error: 'Fehler beim Lesen des Verzeichnisses' });
    }
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});