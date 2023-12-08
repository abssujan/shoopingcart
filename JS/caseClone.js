

//create a click event at case plus button
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = increaseAndDecrease('case-input-filed', true);
    updatePriceCase(newCaseNumber)
    calculateSubTotal();
})

// create a click event at case minus button
document.getElementById('case-btn-minus').addEventListener('click', function(){
    const newCaseNumber = increaseAndDecrease('case-input-filed', false);
    updatePriceCase(newCaseNumber)
    calculateSubTotal();
})