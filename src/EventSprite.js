// Sprite that can handles events

export default class EventSprite {
  draw(ctx) {
    console.error('Implement abstract method draw');
  }

  move() {
    console.error('Implement abstract method update');
  }

  update(event) {
    console.error('Implement abstract method modify');
  }
}
