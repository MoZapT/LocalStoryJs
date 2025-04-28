const seedrandom = require('seedrandom');
const Location = require('../models/location.js');
const { SEED } = require('../constants');

class World {
    constructor(templates) {
        this.locations = []; // Initialisiert die Standorte
        this.init(templates);
    }

    async init(templates) {
        await this.generateLocations(templates);
    }

    async generateLocations(templates) {
        templates = templates || []; // Wenn keine Vorlagen übergeben werden, wird ein leeres Array verwendet
        const locationTemplates = templates.filter(template => template.type === 'location'); // Filtert die Vorlagen nach Typ "location"
        if (locationTemplates.length === 0) {
            console.error('No location templates found!'); // Gibt eine Fehlermeldung aus, wenn keine Vorlagen gefunden wurden
            return;
        }

        this.locations.push(new Location(this, templates[await this.getRandomInRangeWithSeed(1, locationTemplates.length)]));
    }

    async getRandomInRangeWithSeed(min, max) {
        const rng = seedrandom(SEED); // Erstelle einen Zufallsgenerator mit dem Seed
        return Math.floor(rng() * (max - min + 1)) + min;
    }
}

module.exports = World;