// Sprite for snake
import Sprite from './Sprite.js';
import { GRID_SIZE } from './constants';

class TailBlock extends Sprite {
  constructor(x, y) {
    super(x, y, GRID_SIZE, GRID_SIZE, 'white');
  }
}

export default class Snake {
  constructor(x, y) {
    this.tails = [
      new TailBlock(x - GRID_SIZE, y),
      new TailBlock(x - GRID_SIZE * 2, y),
    ];
    this.updateX = 0;
    this.updateY = 0;
    this.head = new TailBlock(x, y);
    this.fruit = null;
  }

  grow() {
    const { tails } = this;
    const endTail = tails[tails.length - 1];
    this.tails.push(new TailBlock(endTail.x, endTail.y));
  }

  draw(ctx) {
    this.head.draw(ctx);
    this.tails.forEach(tail => tail.draw(ctx));
  }

  move = () => {
    const { updateX, updateY, head, tails, fruit } = this;
    let { x: oldX, y: oldY } = head;
    if (updateX === 0 && updateY === 0) {
      return;
    }
    // update head
    head.x += updateX;
    head.y += updateY;
    // update tails
    tails.forEach((tail) => {
      // moving using the previous block's x & y
      const { x: tailX, y: tailY } = tail;
      tail.x = oldX;
      tail.y = oldY;
      oldX = tailX;
      oldY = tailY;
      // check if collision happens
      if (head.collide(tail)) {
        console.log('COLLISION!!');
        this.updateX = 0;
        this.updateY = 0;
      }
    });
    // check if got fruit :)
    if (fruit && fruit.collide(head)) {
      console.log('FRUIT!!');
      fruit.generate(this);
      this.grow();
    }
  }

  update = (keyCode) => {
    // console.log(keyCode);
    switch(keyCode) {
      // left
      case 37:
        if (this.updateX === 0) {
          this.updateX = -GRID_SIZE;
          this.updateY = 0;
        }
        return;
      // up
      case 38:
        if (this.updateY === 0) {
          this.updateX = 0;
          this.updateY = -GRID_SIZE;
        }
        return;
      // right
      case 39:
        if (this.updateX === 0) {
          this.updateX = GRID_SIZE;
          this.updateY = 0;
        }
        return;
      // down
      case 40:
        if (this.updateY === 0) {
          this.updateX = 0;
          this.updateY = GRID_SIZE;
        }
        return;
    }
  }
}
