import TileMap from './TileMap.js'

const tileSize = 26;
const velocity = 2;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);

function gameLoop(){
  tileMap.draw(ctx);
  pacman.draw(ctx);
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000/ 75);
