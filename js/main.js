import Game from './stages/game.js';

var _stage;

run();

function run() {
    _stage = new Game();
    _stage.run();
}