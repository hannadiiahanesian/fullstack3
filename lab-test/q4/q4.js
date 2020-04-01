const EventEmitter = require('events');

var moment = require('moment');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('currentTime', () => {
  console.log(`Current time: ${moment().format("LTS")}`);
});
myEmitter.emit('currentTime');