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

//Listeners to Calculator
document.getElementById('sum').addEventListener('click', function(){
	var valueA = Number(document.getElementById('valueA').value);
	var valueB = Number(document.getElementById('valueB').value);
	outputValue(Calculator.prototype.Sum(valueA, valueB));
});

document.getElementById('subtract').addEventListener('click', function(){
	var valueA = Number(document.getElementById('valueA').value);
	var valueB = Number(document.getElementById('valueB').value);
	outputValue(Calculator.prototype.Subtract(valueA, valueB));
});

document.getElementById('division').addEventListener('click', function(){
	var valueA = Number(document.getElementById('valueA').value);
	var valueB = Number(document.getElementById('valueB').value);
	outputValue(Calculator.prototype.Division(valueA, valueB));
});

document.getElementById('multiplication').addEventListener('click', function(){
	var valueA = Number(document.getElementById('valueA').value);
	var valueB = Number(document.getElementById('valueB').value);
	outputValue(Calculator.prototype.Multiplication(valueA, valueB));
});

function outputValue(valueCalc){
	document.getElementById('output').textContent = valueCalc;
};