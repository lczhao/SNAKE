// Sprite for fruit
import Sprite from './Sprite';
import { GRID_SIZE } from './constants';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class Fruit extends Sprite {
  constructor(xlim, ylim) {
    super(100, 100, GRID_SIZE, GRID_SIZE, 'red');
    this.xlim = xlim;
    this.ylim = ylim;
  }

  generate(_snake) {
    // check if collide with snake, if yes, regenerate
    const rndX = getRandomInt(0, this.xlim / GRID_SIZE);
    const rndY = getRandomInt(0, this.ylim / GRID_SIZE);
    this.x = rndX * GRID_SIZE;
    this.y = rndY * GRID_SIZE;
    console.log(this.x, this.y);
  }
}
