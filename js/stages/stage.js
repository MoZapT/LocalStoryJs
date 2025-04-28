class Stage {
    constructor() {
        this.container = document.getElementById('game-container'); // Ziel-Container für die Stage
        if (!this.container) {
            throw new Error(`Container mit ID "game-container" nicht gefunden.`);
        }
        this.actors = [];
        this.items = [];
        this.locations = [];
        this.world = [];
        this.scripts = [];
    }

    /**
     * Lädt eine neue Stage (HTML-Datei) und fügt sie in den Container ein.
     * @param {string} stagePath - Der Pfad zur HTML-Datei der Stage.
     */
    async load(stagePath) {
        try {
            const response = await fetch(stagePath);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const html = await response.text();
            this.container.innerHTML = html; // HTML-Inhalt in den Container einfügen
        } catch (error) {
            console.error(`Fehler beim Laden der Stage "${stagePath}":`, error);
        }
    }

    async loadTemplates() {
        let actorsResponse = await fetch('/actors-bundle');
        this.actors = await actorsResponse.json();

        let itemsResponse = await fetch('/items-bundle');
        this.items = await itemsResponse.json();

        let locationsResponse = await fetch('/locations-bundle');
        this.locations = await locationsResponse.json();

        let scriptsResponse = await fetch('/scripts-bundle');
        this.scripts = await scriptsResponse.json();

        let worldResponse = await fetch('/world-bundle');
        this.world = await worldResponse.json();
    }
}

export default Stage;