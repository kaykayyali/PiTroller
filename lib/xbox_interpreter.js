var Requester = require('simple-get');
var Xbox_Interpreter = function() {
	this.pibot_url = "http://172.24.1.117:3000";
	this.button_map = {
		0: {
			name: "A",
			handler: this.handle_a_button
		},
		1: {
			name: "B",
			handler: this.handle_b_button
		},
		2: {
			name: "X",
			handler: this.handle_x_button
		},
		3: {
			name: "Y",
			handler: this.handle_y_button
		},
		4: {
			name: "lb",
			handler: this.handle_lb_button
		},
		5: {
			name: "rb",
			handler: this.handle_rb_button
		}
		// 6: {
		// 	name: "select",
		// 	handler: this.handle_select_button
		// },
		// 7: {
		// 	name: "start",
		// 	handler: this.handle_start_button
		// },
		// 8: {
		// 	name: "home",
		// 	handler: this.handle_home_button
		// },
		// 9: {
		// 	name: "l3",
		// 	handler: this.handle_l3_button
		// },
		// 10: {
		// 	name: "r3",
		// 	handler: this.handle_r3_button
		}
	};
	this.axis_map = {
		// 0:{
		// 	name: "lx",
		// 	handler: this.handle_lx_axis
		// },
		// 1:{
		// 	name: "ly",
		// 	handler: this.handle_ly_axis
		// },
		// 2:{
		// 	name: "lt",
		// 	handler: this.handle_lt_axis
		// },
		// 3:{
		// 	name: "rx",
		// 	handler: this.handle_rx_axis
		// },
		// 4:{
		// 	name: "ry",
		// 	handler: this.handle_ly_axis
		// },
		// 5:{
		// 	name: "rt",
		// 	handler: this.handle_rt_axis
		// },
		6:{
			name: "dx",
			handler: this.handle_dx_axis
		},
		7:{
			name: "dy",
			handler: this.handle_dy_axis
		}
	};
};
// Define preliminary actions
Xbox_Interpreter.prototype.handle_a_button = function(event) {
	console.log("Handling ", this.button_map[event.number].name , " event.", event);
};

Xbox_Interpreter.prototype.handle_b_button = function(event) {
	console.log("Handling ", this.button_map[event.number].name , " event.", event);
};

Xbox_Interpreter.prototype.handle_x_button = function(event) {
	console.log("Handling ", this.button_map[event.number].name , " event.", event);
};

Xbox_Interpreter.prototype.handle_y_button = function(event) {
	console.log("Handling ", this.button_map[event.number].name , " event.", event);
	Requester(this.pibot_url + '/servo_reset', function(error, response) {
		if (error) {
			console.warn(error);
		}
		else {
			console.warn(response);
		}
	});
};

Xbox_Interpreter.prototype.handle_lb_button = function(event) {
	console.log("Handling ", this.button_map[event.number].name , " event.", event);
	Requester(this.pibot_url + '/servo_off', function(error, response) {
		if (error) {
			console.warn(error);
		}
		else {
			console.warn(response);
		}
	});
};

Xbox_Interpreter.prototype.handle_rb_button = function(event) {
	console.log("Handling ", this.button_map[event.number].name , " event.", event);
	Requester(this.pibot_url + '/servo_on', function(error, response) {
		if (error) {
			console.warn(error);
		}
		else {
			console.warn(response);
		}
	});
};

Xbox_Interpreter.prototype.handle_dy_axis = function(event) {
	console.log("Handling ", this.axis_map[event.number].name , " event.", event);
};

Xbox_Interpreter.prototype.handle_dx_axis = function(event) {
	console.log("Handling ", this.axis_map[event.number].name , " event.", event);
};





// Decide which button object to use
Xbox_Interpreter.prototype.handle_button_event = function(event) {
	if (this.button_map[event.number]) {
			return this.button_map[event];
	}
	else {
		kkayyali("Error, that button is not supported yet!!!!!");
	}
};

Xbox_Interpreter.prototype.handle_button_event = function(event) {
	if (this.button_event[event.number]) {
			return this.button_event[event];
	}
	else {
		kkayyali("Error, that axis is not supported yet!!!!!");
	}
};
module.exports = Xbox_Interpreter;