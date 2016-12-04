// obstract class sprite, only print rect
export default class Sprite {
  constructor(x = 0, y = 0, width = 10, height = 10, color = 'red') {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  draw(ctx) {
    const {
      x, y, height, width, color,
    } = this;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
  }

  collide = (sprite) => {
    const { x: x1, y: y1, width: width1, height: height1 } = this;
    const { x: x2, y: y2, width: width2, height: height2 } = sprite;
    if (
      x1 < x2 + width2 &&
      x1 + width1 > x2 &&
      y1 < y2 + height2 &&
      height1 + y1 > y2
    ) {
      return true;
    } else {
      return false;
    }
  }

  move = () => {}
  update = () => {}
}
