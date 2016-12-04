/* global document */

import Sprite from './Sprite';
import Snake from './Snake';
import Fruit from './Fruit';
import EventManager from './EventManager';
import { WIDTH, HEIGHT, FRAME_RATE } from './constants';

// initialize canvas
const canvas = document.getElementById('app');
const ctx = canvas.getContext('2d');

// initialize sprites
const background = new Sprite(0, 0, WIDTH, HEIGHT, 'grey');
const snake = new Snake(50, 50);
const fruit = new Fruit(WIDTH, HEIGHT);
snake.fruit = fruit;
fruit.generate(snake);

// initialize event loop
const em = new EventManager(FRAME_RATE, ctx);
em.addEntity(background);
em.addEntity(snake);
em.addEntity(fruit);
em.start();
