function ICalculator(){};
/*
Interface contract.
*/
ICalculator.prototype.Sum = function(a, b){
	throw new Error('You have that implement this.');
};

ICalculator.prototype.Subtraction = function(a, b){
	throw new Error('You have that implement this.');
};

ICalculator.prototype.Division = function(a, b){
	throw new Error('You have that implement this.');
};

ICalculator.prototype.Multiplication = function(a, b){
	throw new Error('You have that implement this.');
};
/* 
Methods to implementation.
*/
function Calculator(){};

Calculator.prototype = new ICalculator(); //Implementation of methods.

Calculator.prototype.Sum = function(a, b){
	var value = a + b;
	if (isNaN(value))
		return 'Not was possible';

	return value;
};

Calculator.prototype.Subtract = function(a, b){
	var value = a - b;
	if (isNaN(value))
		return 'Not was possible';

	return value;
};

Calculator.prototype.Division = function(a, b){
	var value = a / b;
	if (isNaN(value))
		return 'Not was possible';

	return value;
};

Calculator.prototype.Multiplication = function(a, b){
	var value = a * b;
	if (isNaN(value))
		return 'Not was possible';

	return value;
};