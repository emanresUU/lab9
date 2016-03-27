var toppingsArray = [];


function addTopping() {
	"use strict";  
	var topping = document.getElementById("topping").value;
	if (topping !== toppingsArray[0] && 
		topping !== toppingsArray[1] && 
		topping !== toppingsArray[2] && 
		topping !== toppingsArray[3]) { 
		toppingsArray.push(topping);
	}
	var currentToppings = document.getElementById("currentToppings");
	var toppingsList = "";
	for (var i = 0; i < toppingsArray.length; i = i + 1) {
		toppingsList = toppingsList + "<li>" + toppingsArray[i] + "</li>";
		currentToppings.innerHTML = toppingsList; 
	}
}


function removeToppings() {
	"use strict";  
	toppingsArray.length = 0;
	var topping = document.getElementById("currentToppings");
	topping.innerHTML = "";
}


function calculateTotalPrice() {
	"use strict";
	document.getElementById("totalPrice").innerHTML = "$ " +
		(calculateToppingsPrice() + calculateTeaPrice() + calculateMilkPrice());
}


function calculateTeaPrice() {
	"use strict";
	var teaPrice = 0;
	var tea = document.getElementById("teaType").value;
	if (tea === "Black") {
		teaPrice = 2.50;
	}
	if (tea === "Green") {
		teaPrice = 3.00;
	}
	if (tea === "Red") {
		teaPrice = 3.50;
	}
	return teaPrice;
}


function calculateToppingsPrice() {
	"use strict";
	var grassJellyPrice = 0;
	var coconutPrice = 0;
	var pearlsPrice = 0;
	var mangoStarsPrice = 0;
	var toppingsPrice = 0;
	for (var i = 0; i < toppingsArray.length; i = i + 1) {
		if (toppingsArray[i] === "Grass Jelly") {
		grassJellyPrice = 0.50;
		}
		if (toppingsArray[i] === "Coconut") {
		coconutPrice = 0.75;
		}
		if (toppingsArray[i] === "Pearls") {
		pearlsPrice = 0.50;
		}
		if (toppingsArray[i] === "Mango Stars") {
		mangoStarsPrice = 1.00;
		}
	}
	toppingsPrice = grassJellyPrice + coconutPrice + pearlsPrice + mangoStarsPrice;
	return toppingsPrice;
}


function calculateMilkPrice() {
	"use strict";
	var milk = document.getElementById("milk").value;
	var milkPrice = 0;
	if (milk === "Yes") {
		milkPrice = 1.00;
	}
	return milkPrice;
}
