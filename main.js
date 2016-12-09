var Joystick = require('./lib/joystick');
var Xbox_Interpreter = require('./lib/xbox_interpreter');
// Set a deadzone of +/-3500 (out of +/-32k) and a sensitivty of 350 to reduce signal noise in joystick axis
var controller = new Joystick(0, 3500, 350);
var Interpreter = new Xbox_Interpreter();
function init() {
	console.log("Initializing...");
	controller.on('button', function(event_data) {
	console.log("button event");
	Interpreter.handle_button_event(event_data);

	});
	controller.on('axis', function(event_data) {
		console.log("axis event");
		Interpreter.handle_axis_event(event_data);
	});
};

setTimeout(init, 3000);