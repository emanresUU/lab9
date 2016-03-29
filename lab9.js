var toppingsArray = [];

function addTopping() {
   "use strict";  
   var topping = document.getElementById("topping").value;
   if (topping !== toppingsArray[0] && topping !== toppingsArray[1] && 
         topping !== toppingsArray[2] && 
         topping !== toppingsArray[3]) { 
            toppingsArray.push(topping);
            toppingsArray.sort();
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

var orderArray = [];

function addDrink() {
   "use strict";
   var cupOfTea = new cupOfTeaConstructor();

   var indexOfDuplicate = returnIndexOfDuplicateOnTheOrder(cupOfTea);
   addItemToOrderIfItemIsUnique(indexOfDuplicate, cupOfTea);
   addCountToOrderIfItemIsNonUnique(indexOfDuplicate);
   writeOrderArrayOnTable();
}

function returnIndexOfDuplicateOnTheOrder(cupOfTea) {
   for (var i = 0; i < orderArray.length; i = i + 1) {
      if (cupOfTea.teaType === orderArray[i].teaType &&
            cupOfTea.milkOption === orderArray[i].milkOption &&
            checkEqualityOfNumericalArrays(cupOfTea.toppingsList, orderArray[i].toppingsList)) {
               return i;
            }
   }
}

function addItemToOrderIfItemIsUnique(index, cupOfTea) {
   if (typeof(index) === "undefined") {
      orderArray.push(cupOfTea);
   }
}

function addCountToOrderIfItemIsNonUnique(index) {
   if (typeof(index) === "number") {
      orderArray[index].numberOfTeaOrdered = orderArray[index].numberOfTeaOrdered + 1;
   }
}

function checkEqualityOfNumericalArrays(array1, array2) {
   "use strict";

   if (array1.length !== array2.length) {
      return false;
   }      

   if (array1.length === 0 && array2.length === 0) {
      return true;
   }

   for (var i = 0; i < array1.length; i = i + 1) {
      if (array1[i] !== array2[i]) {
         return false;
      } else {
         return true;
      }
   }
}

function cupOfTeaConstructor() {
   this.numberOfTeaOrdered = 1;
   this.teaType = document.getElementById("teaType").value;
   this.milkOption = document.getElementById("milk").value;
   this.toppingsList = toppingsArray.slice(0,5);
}

function writeOrderArrayOnTable() {
   "use strict";
   var table = "<th>#</th><th>Tea</th><th>Milk</th><th>Toppings</th><th>cost</th>";
   for (var i = 0; i < orderArray.length; i = i + 1) {
      table = table + "<tr><td>" + orderArray[i].numberOfTeaOrdered + "</td>";
      table = table + "<td>" + orderArray[i].teaType + "</td>";
      table = table + "<td>" + orderArray[i].milkOption + "</td>";
      table = table + "<td>" + orderArray[i].toppingsList + "</td>";
      table = table + "<td>$" + calculateCost(orderArray[i]) * orderArray[i].numberOfTeaOrdered + "</td></tr>";
   }
   document.getElementById("orderTable").innerHTML = table;
}

function calculateCost(cupOfTea) {
   var totalCost = 0;
   totalCost = calculateTeaCost(cupOfTea) +
      calculateMilkCost(cupOfTea) +
      calculateToppingsCost(cupOfTea);
   return totalCost;
}

function calculateTeaCost(cupOfTea) {
   "use strict";
   var teaPrice = 0;
   if (cupOfTea.teaType === "Black") {
      teaPrice = 2.50;
   }
   if (cupOfTea.teaType === "Green") {
      teaPrice = 3.00;
   }
   if (cupOfTea.teaType === "Red") {
      teaPrice = 3.50;
   }
   return teaPrice;
}

function calculateToppingsCost(cupOfTea) {
   "use strict";
   var grassJellyPrice = 0;
   var coconutPrice = 0;
   var pearlsPrice = 0;
   var mangoStarsPrice = 0;
   var toppingsPrice = 0;
   for (var i = 0; i < cupOfTea.toppingsList.length; i = i + 1) {
      if (cupOfTea.toppingsList[i] === "Grass Jelly") {
         grassJellyPrice = 0.50;
      }
      if (cupOfTea.toppingsList[i] === "Coconut") {
         coconutPrice = 0.75;
      }
      if (cupOfTea.toppingsList[i] === "Pearls") {
         pearlsPrice = 0.50;
      }
      if (cupOfTea.toppingsList[i] === "Mango Stars") {
         mangoStarsPrice = 1.00;
      }
   }
   toppingsPrice = grassJellyPrice + coconutPrice + pearlsPrice + mangoStarsPrice;
   return toppingsPrice;
}

function calculateMilkCost(cupOfTea) {
   "use strict";
   var milkPrice = 0;
   if (cupOfTea.milkOption === "Yes") {
      milkPrice = 1.00;
      return milkPrice;
   }
   return milkPrice;
}


function removeLastItemAdded() {
   var lastCupOfTeaAdded = orderArray[orderArray.length - 1];
   if (lastCupOfTeaAdded.numberOfTeaOrdered === 1) {
      orderArray.pop();
   }
   if (lastCupOfTeaAdded.numberOfTeaOrdered > 1) {
      lastCupOfTeaAdded.numberOfTeaOrdered = lastCupOfTeaAdded.numberOfTeaOrdered - 1;
   }
   writeOrderArrayOnTable();
}

function resetOrderTable() {
   orderArray.length = 0;
   writeOrderArrayOnTable();
}
