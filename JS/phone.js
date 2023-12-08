// create function for increase and removed the value for input filed
function updatedPhoneInput(isIncrease){
    //target phone input filed 
    const phoneInputFiled = document.getElementById('phone-input-filed');
    //get value form this filed 
    const phoneInputValueString = phoneInputFiled.value;
    //convert this string into number 
    const phoneInputValueNumber = parseInt(phoneInputValueString);

    // Increase and decrease the value form input 
    let increaseAndDecrease;
    if(isIncrease === true){
        increaseAndDecrease = phoneInputValueNumber + 1;
    }else {
        increaseAndDecrease = phoneInputValueNumber - 1;
    }
    // set the value 
    phoneInputFiled.value = increaseAndDecrease;
    return increaseAndDecrease;
}

//create a function for price update 
function priceUpdate(increaseAndDecrease){
    // update the price 
    const newPhonePrice = increaseAndDecrease * 1219;
    // target phone price for update 
    const phoneCurrentPrice = document.getElementById('phone-price');
    // set this value 
    phoneCurrentPrice.innerText = newPhonePrice;
}

// create a phone plus btn click event 
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const increaseAndDecrease = updatedPhoneInput(true);
    priceUpdate(increaseAndDecrease);
    // update the subtoal 
   calculateSubTotal();
})

// creatr phone minus btb click event 
document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const increaseAndDecrease = updatedPhoneInput(false);
    priceUpdate(increaseAndDecrease);
})