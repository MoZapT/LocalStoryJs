class Creation {
    /**
     * Constructor to initialize the item
     * @param {Object} attributes - The attributes of the item
     */
    constructor(attributes = {}) {
        this.id = attributes.id || null; // Unique identifier for the item
        this.name = attributes.name || "Unnamed Item"; // Name of the item
        this.type = attributes.type || "Generic"; // Type/category of the item
        this.attributes = attributes.attributes || {}; // Custom attributes
    }

    /**
     * Load item data from a JSON template
     * @param {Object} jsonTemplate - JSON object containing item data
     * @returns {Creation} - Returns an instance of the Item class
     */
    static fromJSON(jsonTemplate) {
        return new Item(jsonTemplate);
    }

    /**
     * Get a description of the item
     * @returns {string} - A string describing the item
     */
    getDescription() {
        return `${this.name} (Type: ${this.type}) - Attributes: ${JSON.stringify(this.attributes)}`;
    }

    /**
     * Update the item's attributes
     * @param {Object} newAttributes - New attributes to merge with existing ones
     */
    updateAttributes(newAttributes) {
        this.attributes = { ...this.attributes, ...newAttributes };
    }
}

module.exports = Creation;

// const item = Item.fromJSON(jsonTemplate);
// console.log(item.getDescription()); // Health Potion (Type: Consumable) - Attributes: {"healing":50,"rarity":"Common"}

// item.updateAttributes({ rarity: "Rare", weight: 0.5 });
// console.log(item.getDescription()); // Health Potion (Type: Consumable) - Attributes: {"healing":50,"rarity":"Rare","weight":0.5}