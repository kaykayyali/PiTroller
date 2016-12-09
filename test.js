var Joystick = require('./lib/joystick');
// Set a deadzone of +/-3500 (out of +/-32k) and a sensitivty of 350 to reduce signal noise in joystick axis
var controller = new Joystick(0, 3500, 350);

function init() {
	console.log("Initializing...");
	controller.on('button', function(event_data) {
		console.log(event_data);
	});
	controller.on('axis', function(event_data) {
		console.log(event_data);
	});
};

setTimeout(init, 1500);