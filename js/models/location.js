class Location {
    constructor(world, template) {
        this.world = world; // Initialisiert die Welt

        console.log(template);
        this.locations = []; // Initialisiert die Standorte
        this.items = []; // Initialisiert die Gegenstände
        this.actors = []; // Initialisiert die Schauspieler
        this.parentLocation = null; // Initialisiert den übergeordneten Standort
        this.world = null; // Initialisiert die Welt
    }
}

module.exports = Location;