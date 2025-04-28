const path = require('path');
const fs = require('fs').promises;

class Stage {
    constructor() {
        this.rules = [];
        this.templates = [];
    }

    async readRules() {
        const files = await fs.readdir('./templates', { recursive: true, withFileTypes: true });

        this.templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json') && file.path === 'templates/rules')
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );
    }

    async readScripts() {
        const files = await fs.readdir('./templates', { recursive: true, withFileTypes: true });

        this.templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json') && file.path === 'templates/scripts')
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );
    }

    async readTemplates() {
        const files = await fs.readdir('./templates', { recursive: true, withFileTypes: true });

        this.templates = await Promise.all(
            files
                .filter(file => file.isFile() && file.name.endsWith('.json') && file.path !== 'templates/rules' && file.path !== 'templates/scripts')
                .map(async file => {
                    const filePath = path.join(file.path, file.name);
                    const content = await fs.readFile(filePath, 'utf-8');
                    return JSON.parse(content);
                })
        );
    }
}

module.exports = Stage;