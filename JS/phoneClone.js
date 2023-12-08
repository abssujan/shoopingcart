//create a click event at phone plus button
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newCaseNumber = increaseAndDecrease('phone-input-filed', true);
    updatePricePhone(newCaseNumber);
    calculateSubTotal();
})

// create a click event at phone minus button
document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const newCaseNumber = increaseAndDecrease('phone-input-filed', false);
    updatePricePhone(newCaseNumber)
    calculateSubTotal();
})