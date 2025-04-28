const Stage = require('./stage.js');
const World = require('../models/world.js');

class Game extends Stage {
    constructor() {
        super(); // Ruft den Konstruktor der Stage-Klasse auf
        this.world = null; // Initialisiert die Welt
    }

    /**
     * Initialisiert das Spiel.
     */
    async init() {
        await this.readRules();
        await this.readScripts();
        await this.readTemplates();
    }

    /**
     * Lädt die Spiel-Stage und initialisiert das Spiel.
     */
    async run() {
        await this.init(); // Initialisiert das Spiel nach dem Laden der Stage
        await this.createWorld(); // Ruft die Methode zum Erstellen der Welt auf
    }

    async createWorld() {
        this.world = new World(this.templates);
    }
}

module.exports = Game;