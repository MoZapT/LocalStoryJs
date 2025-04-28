export function log(...args) {
    let body = document.querySelector('body');
    let tempBody = '';

    for (let i = 0; i < args.length; i++) {
        tempBody += args[i] + '<br>';
    }

    console.log(...args);

    body.innerHTML = tempBody + body.innerHTML;
}