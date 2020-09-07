function getSizeCost() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}
function getCrustCost() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getToppingCost() {
  var selectedTopping = document.getElementById("topping").value;
  return parseInt(selectedTopping);
}
function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").value;
  return parseInt(selectedNumber);
}
function mushroom() {
  var mushroom = 0;
  var addMushroom = document.getElementById("topping");
  if (addMushroom.checked === true) {
    mushroom = 100;
  }
  return parseInt(mushroom);
}

function sausage() {
  var sausage = 0;
  var addSausage = document.getElementById("topping");
  if (addSausage.checked === true) {
    sausage = 100;
  }
  return parseInt(sausage);
}
function macon() {
  var macon = 0;
  var addMacon = document.getElementById("topping");
  if (addMacon.checked === true) {
    macon = 100;
  }
  return parseInt(macon);
}
function mince() {
  var mince = 0;
  var addMince = document.getElementById("topping");
  if (addMince.checked === true) {
    mince = 100;
  }
  return parseInt(mince);
}
function mozarellaCheese() {
  var cheese = 0;
  var addMozarellaCheese = document.getElementById("topping");
  if (addMozarellaCheese.checked === true) {
    cheese = 100;
  }
  return parseInt(cheese);
}
function calctotalPrice() {
  event.preventDefault();
  var totalPrice = (getSizeCost() + getCrustCost() + getToppingCost()) * (getNumber());

  console.log(totalPrice);
  alert("Your order of " + getNumber() + " pizzas has been processed. Your total amount payable is " + totalPrice + ".")
}
$(document).ready(function () {
  $("#delivery").submit(function () {

    var name = $("input#name").val();
    var number = $("input#number").val();
    var location = $("input#location").val();

    alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh.200. Thank you for choosing Pizza Delite!");
   
  });

});