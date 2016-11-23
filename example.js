var Joystick = require('./lib/joystick');
// Set a deadzone of +/-3500 (out of +/-32k) and a sensitivty of 350 to reduce signal noise in joystick axis
var controller = new Joystick(0, 3500, 350);
controller.on('button', console.log);
controller.on('axis', console.log);
