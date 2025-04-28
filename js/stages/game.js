import { log } from '../helpers/logger.js';
import Stage from './stage.js';

class Game extends Stage {
    constructor() {
        super(); // Ruft den Konstruktor der Stage-Klasse auf
    }

    /**
     * Initialisiert das Spiel.
     */
    async init() {
        await this.loadTemplates();

        log('world', JSON.stringify(this.world));
        log('actors', JSON.stringify(this.actors));
        log('items', JSON.stringify(this.items));
        log('locations', JSON.stringify(this.locations));
        log('scripts', JSON.stringify(this.scripts));
    }

    /**
     * Lädt die Spiel-Stage und initialisiert das Spiel.
     */
    async run() {
        await this.load('game.html'); // Ruft die `load`-Methode der Stage-Klasse auf
        await this.init(); // Initialisiert das Spiel nach dem Laden der Stage
    }
}

export default Game;