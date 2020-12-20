
var counterNumReservations = 0;
function addBooking(id) {
    // add 1 to counterNumReservations when a user clicks on the seating
    // alert("addBooking");
    document.getElementById(id).style.backgroundColor = "#000000";
    document.getElementById(id).style.color = "#ffffff";
    document.getElementById(id).innerHTML = "<p>Booked!</p>";
    counterNumReservations = counterNumReservations + 1;
    document.getElementById("tickets").innerHTML = "<p>You have booked " + counterNumReservations + " tickets</p>"
    return true;
}
function removeBooking(id) {
    // minus 1 from counterNumReservations when a user clicks on a seating that is already booked
    // alert("removeBooking");
    document.getElementById(id).style.backgroundColor = "#e5791e";
    document.getElementById(id).style.color = "#000000";
    document.getElementById(id).innerHTML = "<p>Available</p>";   
    counterNumReservations = counterNumReservations - 1;
    document.getElementById("tickets").innerHTML = "<p>You have booked " + counterNumReservations + " tickets</p>" 
    return true;
}
function checkBooking(element) {
    // determines whether a seat is booked or not, and than add to the counterNumReservations
    //alert("ok it is attached!");
    var id = element.id;
    var status = document.getElementById(id).innerHTML;    
    // alert(document.getElementById(id).innerHTML);
    // "<P>Available</P>"  is for an IE quirks
    if(status === "<p>Available</p>" || status === "<P>Available</P>" )
        addBooking(id);
    else
        removeBooking(id);
    //alert(id);
    return true;
}

function calculateMealQty() {
    var total = parseInt(document.foodForm.hotdogQty.value) + parseInt(document.foodForm.popcornQty.value);
    alert("you have ordered " + total + " meals");
    if(total > counterNumReservations) {
        alert("you have ordered too many meals!");
        failure("you have ordered too many meals!");
        return 0;
    }
    else {
        alert("ok proceed!");
        return 1;
    }
}

function calculateMealPrice() {
    // add up total price
    var price = (6*parseInt(document.foodForm.hotdogQty.value)) + (4*parseInt(document.foodForm.popcornQty.value));
    alert("meal price is " + price);
    return price;
}

function calculateTicketPrice() {
    var price = counterNumReservations * 10;
    alert("ticket price is " + price);
    return price;
}

function specialOffer() {
    // for more ordering offers
    var skywalker = 10 * parseInt(document.foodForm.skywalker.value);    
    alert("skywalker price is " + skywalker);
    return skywalker;    
}


function amountReceived() {
    var amount = parseInt(document.foodForm.hundred.value);
    alert("I received "+ amount);
    return amount;
}

function checkSpecial() {
    if(parseInt(document.foodForm.skywalker.value) > (parseInt(document.foodForm.hotdogQty.value) + parseInt(document.foodForm.popcornQty.value))){
        alert("you have ordered too many sky walker");
        failure("you have ordered too many sky walker");
        return 0;
    }
    else {
        return 1;
    }
}


function checkMoney() {
    var mealPrice = calculateMealPrice();
    var special = specialOffer();
    var ticketPrice = calculateTicketPrice();
    var change = amountReceived() - (mealPrice + special + ticketPrice);
    // var change = 100 - 200;
    alert("checkMoney :" + change);
    if(change < 0) {
        alert("you have paid too little money!");
        failure("you have paid too little money!");
        return 0;
    }
    else
        return 1;
}
function checkHundred() {
    // see if notes are in hundreds
    var figure = parseInt(document.foodForm.hundred.value);
    if((figure%100) != 0) {
        alert("You did not pay in hundreds!");
        failure("You did not pay in hundreds!");
        return 0;
    }
    // can use error checking here as well
    else {
        alert("checkHundred proceed");
        return 1;
    }   
}


function failure(errorMessage) {

    document.getElementById("orderResults").innerHTML = errorMessage;
}

function success(change) {
    document.getElementById("orderResults").innerHTML = "Your order was successful.";
    document.getElementById("orderResults").innerHTML += "Your change is " + change + " and you have purchased " + counterNumReservations + " tickets.";
}
function checkForm() {
    var mealPrice;
    var special;
    var hundred;
    var change;
    var ticketPrice
    if(calculateMealQty() == 1 && checkHundred() == 1 && checkSpecial() == 1 && checkMoney() == 1) {
        alert("passed! for checkForm");
        mealPrice = calculateMealPrice();
        special = specialOffer();
        ticketPrice = calculateTicketPrice();
        change = parseInt(amountReceived()) - parseInt((mealPrice + special + ticketPrice));
        alert(change);
        success(change);
    }
    else
        alert("there was something wrong with your order.");

    return false;
}

