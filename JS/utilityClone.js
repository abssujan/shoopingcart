// create a common function for increase the value and minus 

function increaseAndDecrease(elementId, trueOrFalse) {
    const inputFiled = document.getElementById(elementId); // Use the provided elementId parameter
    const inputInString = inputFiled.value;
    let inputInNumber = parseInt(inputInString);

    // Increment or decrement based on trueOrFalse parameter
    if (trueOrFalse) {
        inputInNumber = inputInNumber + 1;
    } else {
        inputInNumber = inputInNumber - 1;
    }

    // Set the value
    inputFiled.value = inputInNumber;
    return inputInNumber;
}

// create a common function for update price 

function updatePriceCase(newCaseNumber){
    const price = document.getElementById('case-price');
    const currentPrice = newCaseNumber * 59;
     price.innerText = currentPrice;

}

// create a coomon function for updare phone price 
function updatePricePhone(newCaseNumber){
    const price = document.getElementById('phone-price');
    const currentPrice = newCaseNumber * 1219;
     price.innerText = currentPrice;

}

// create a function for make price value in number 
function priceGetById(elementId){
    const priceId = document.getElementById(elementId);
    const priceIdString = priceId.innerText;
    const priceIdInNumber = parseInt(priceIdString);
    priceId.innerText = priceIdInNumber;
    return priceIdInNumber;
}
// create a function for get subtotal item dry out
function setTextValue(elementId, value){
    const getElementId = document.getElementById(elementId);
    getElementId.innerText = value;
}
// calculate subtotal 
function calculateSubTotal(){
    const phonePrice = priceGetById('phone-price');
    const casePrice = priceGetById('case-price');

    const currentSubTotal = phonePrice + casePrice;
    setTextValue('sub-total', currentSubTotal);
    //calculating tax
    const calculateTax = (currentSubTotal * 0.1).toFixed(2);
    const calculateTaxNumber = parseFloat(calculateTax);
    setTextValue('tax', calculateTaxNumber);
    // add total price
    const totalPrice = currentSubTotal + calculateTaxNumber;
    setTextValue('total-ammount', totalPrice);
}