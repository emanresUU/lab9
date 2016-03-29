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

//      alert("cupOfTea");  
//      alert(cupOfTea.numberOfTeaOrdered);  
//      alert(cupOfTea.teaType);  
//      alert(cupOfTea.milkOption);  
      alert(cupOfTea.toppingsList);  

      var indexOfDuplicate = returnIndexOfDuplicateOnTheOrder(cupOfTea);
      addItemToOrderIfItemIsUnique(indexOfDuplicate, cupOfTea);
      addCountToOrderIfItemIsNonUnique(indexOfDuplicate);
      
//      alert("orderArray");  
//      alert(orderArray[0].numberOfTeaOrdered);
//      alert(orderArray[0].teaType);
//      alert(orderArray[0].milkOption);
      alert(orderArray[0].toppingsList);

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
      table = table + "<td>" + orderArray[i].toppingsList + 
      "</td></tr>";
   }
   document.getElementById("orderTable").innerHTML = table;
}



//function calculateCost() {
//   "use strict";
//   document.getElementById("totalPrice").innerHTML = "$ " +
//      (calculateTeaCost(teaOrder.teaType) + calculateToppingsPrice() + calculateMilkPrice());
//}
//
//function calculateTeaCost(tea) {
//   "use strict";
//   var teaPrice = 0;
//   if (tea === "Black") {
//      teaPrice = 2.50;
//   }
//   if (tea === "Green") {
//      teaPrice = 3.00;
//   }
//   if (tea === "Red") {
//      teaPrice = 3.50;
//   }
//   return teaPrice;
//}
//
//function calculateToppingsPrice() {
//   "use strict";
//   var grassJellyPrice = 0;
//   var coconutPrice = 0;
//   var pearlsPrice = 0;
//   var mangoStarsPrice = 0;
//   var toppingsPrice = 0;
//   for (var i = 0; i < toppingsArray.length; i = i + 1) {
//      if (toppingsArray[i] === "Grass Jelly") {
//         grassJellyPrice = 0.50;
//      }
//      if (toppingsArray[i] === "Coconut") {
//         coconutPrice = 0.75;
//      }
//      if (toppingsArray[i] === "Pearls") {
//         pearlsPrice = 0.50;
//      }
//      if (toppingsArray[i] === "Mango Stars") {
//         mangoStarsPrice = 1.00;
//      }
//   }
//   toppingsPrice = grassJellyPrice + coconutPrice + pearlsPrice + mangoStarsPrice;
//   return toppingsPrice;
//}
//
//function calculateMilkPrice() {
//   "use strict";
//   var milk = document.getElementById("milk").value;
//   var milkPrice = 0;
//   if (milk === "Yes") {
//      milkPrice = 1.00;
//   }
//   return milkPrice;
//}
//
//
//
//
