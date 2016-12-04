// Event loop manager
export class EventTerminateError {}

export default class EventManager {
  constructor(frameRate, ctx) {
    this.entities = []; // EventSprite;
    this.frameRate = frameRate;
    this.done = false;
    this.ctx = ctx;
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  handleEvent = (event) => {
    this.entities.forEach(entity => entity.update(event.keyCode));
  };

  drawFrame = () => {
    const { entities, ctx } = this;
    entities.forEach(entity => entity.move());
    entities.forEach(entity => entity.draw(ctx));
  }

  // throws event terminate error
  start() {
    document.onkeydown = this.handleEvent;
    console.log(1000 / this.frameRate);
    // this.drawFrame();
    this.timer = setInterval(this.drawFrame, 1000 / this.frameRate)
  }
}
