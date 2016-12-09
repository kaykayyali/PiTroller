var _ = require('underscore');
var Requester = require('simple-get');
var Fast_Bindall = require('fast-bindall');
var Xbox_Interpreter = function() {
	Fast_Bindall(this);
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
	var url = this.pibot_url;
	console.log("Handling ", this.button_map[event.number].name , " event.", event, "Sent to ", url);
};

Xbox_Interpreter.prototype.handle_b_button = function(event) {
	var url = this.pibot_url;
	console.log("Handling ", this.button_map[event.number].name , " event.", event, "Sent to ", url);
};

Xbox_Interpreter.prototype.handle_x_button = function(event) {
	var url = this.pibot_url;
	console.log("Handling ", this.button_map[event.number].name , " event.", event, "Sent to ", url);
};

Xbox_Interpreter.prototype.handle_y_button = function(event) {
	var url = this.pibot_url + "/servo_reset";
	console.log("Handling ", this.button_map[event.number].name , " event.", event, "Sent to ", url);
	Requester(url, this.handle_request_response);
};

// Smell control
Xbox_Interpreter.prototype.handle_lb_button = function(event) {
	var url = this.pibot_url;
	if (event.value = 1) {
		url += "/smell_on";
	}
	else {
		url += "/smell_off";
	}
	console.log("Handling ", this.button_map[event.number].name , " event.", event, "Sent to ", url);
	Requester(url, this.handle_request_response);
};

Xbox_Interpreter.prototype.handle_rb_button = function(event) {
	var url = this.pibot_url;
	console.log("Handling ", this.button_map[event.number].name , " event.", event, "Sent to ", url);
};

// Dpad X
Xbox_Interpreter.prototype.handle_dx_axis = function(event) {
	var url = this.pibot_url;
	if (event.value < 0) {
		url += '/turn_motor/left';
	}
	else if (event.value > 0) {
		url += '/turn_motor/right';
	}
	else {
		url += '/move_motor_in_direction/stop';
	}
	console.log("Handling ", this.axis_map[event.number].name , " event.", event, "Sent to ", url);
	Requester(url, this.handle_request_response);
};

// Dpad Y
Xbox_Interpreter.prototype.handle_dy_axis = function(event) {
	var url = this.pibot_url;
	if (event.value < 0) {
		url += '/move_motor_in_direction/forward';
	}
	else if (event.value > 0) {
		url += '/move_motor_in_direction/backward';
	}
	else {
		url += '/move_motor_in_direction/stop';
	}
	console.log("Handling ", this.axis_map[event.number].name , " event.", event, "Sent to ", url);
	Requester(url, this.handle_request_response);
};

Xbox_Interpreter.prototype.handle_request_response = function(error, response, data) {
	if (error) {
		console.warn(error);
	}
	else {
		console.warn("Status:", response.statusCode, data);
	}
};




// Decide which button object to use
Xbox_Interpreter.prototype.handle_button_event = function(event) {
	if (!event) {
		console.warn("NO EVENT. FAILING");
		return;
	}
	if (this.button_map[event.number]) {
			this.button_map[event.number].handler(event);
			return;
	}
	else {
		console.log("Error, that button is not supported yet!!!!!");
	}
};

Xbox_Interpreter.prototype.handle_axis_event = function(event) {
	if (!event) {
		console.warn("NO EVENT. FAILING");
		return;
	}
	if (this.axis_map[event.number]) {
			this.axis_map[event.number].handler(event);
			return;
	}
	else {
		console.log("Error, that axis is not supported yet!!!!!");
	}
};
module.exports = Xbox_Interpreter;