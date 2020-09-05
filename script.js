function getSizeCost() {
    var selectedSize = document.getElementById("#size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("#crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("#numberofpizza").value;
    return parseInt(selectedNumber);
}
function pineapple() {
    var  pineapple= 0;
    var addpineapple = document.getElementById("#toppings");
    if (addpineapple.checked === true) {
        pineapple = 150;
    }
    return parseInt(pineapple);
}

function macon() {
    var macon = 0;
    var addmacon = document.getElementById("#toppings");
    if (addmacon.checked === true) {
        macon = 140;
    }
    return parseInt(macon);
}
function mince() {
    var mince = 0;
    var addMince = document.getElementById("#toppings");
    if (addMince.checked === true) {
        mince = 140;
    }
    return parseInt(mince);
}
function sweetCorn () {
    var sweetCorn= 0;
    var addsweetCorn = document.getElementById("#toppings");
    if (addsweetCorn.checked === true) {
        sweetCorn= 120;
    }
    return parseInt(sweetCorn);
}
function mushroom() {
    var mushroom = 0;
    var addmushroom = document.getElementById("#topping");
    if (addmushroom.checked === true) {
        mushroom = 120;
    }
    return parseInt(mushroom);
}

function calctotalPrice() {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushroom()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order  " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}

$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within an hour. Delivery is free Thank you for chosing pizza delight.");
       
    });
    
});
