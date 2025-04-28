const _scriptsToLoad = await loadScriptsToLoad();
await loadScripts(_scriptsToLoad);

async function loadScripts(scripts) {
    scripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        scriptElement.type = 'module';
        document.body.appendChild(scriptElement);
    });

    const scriptElement = document.createElement('script');
    scriptElement.src = 'main.js';
    scriptElement.type = 'module';
    document.body.appendChild(scriptElement);
}

async function loadScriptsToLoad() {
    let response = await fetch('/js-bundle');
    return await response.json();
}