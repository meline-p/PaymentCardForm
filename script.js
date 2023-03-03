// CARD NUMBER
document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerText = document.querySelector(".card-number-input").value;
}

//CARD NAME
document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

//CARD MONTH
document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

//CARD YEAR
document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

//TRANSFORM ROTATE 
document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

//CARD CVV
document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}


//FORMAT NUMBER
function formatCreditCardOnKey(event) {
    //on keyup, check for backspace to skip processing
    var code = (event.which) ? event.which : event.keyCode;
    if(code != 8) // 8 = backspace
        formatCreditCard();
    else{
        //trim whitespace from end; trimEnd() doesn't work in IE
        document.getElementById("cardNumber").value = document.getElementById("cardNumber").value.replace(/\s+$/, '');
    }

}

function formatCreditCard() {
    var cardField = document.getElementById("cardNumber");
    //remove all non-numeric characters
    var realNumber = cardField.value.replace(/\D/g,'');
    var newNumber = "";
    for(var x = 1; x <= realNumber.length; x++){
        //make sure input is a digit
        if (isNumeric(realNumber.charAt(x-1)))
            newNumber += realNumber.charAt(x-1);
        //add space every 4 numeric digits
        if(x % 4 == 0 && x > 0 && x < 15)
            newNumber += " ";
    }
    cardField.value = newNumber;
}

function isNumeric(char){
    return('0123456789'.indexOf(char) !== -1);
}
