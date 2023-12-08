// subtoal id value set 
function setTextElementValueById(elmentId, value){
    const subTotlaElement = document.getElementById(elmentId);
    subTotlaElement.innerText = value;
}
// create a function for convert string in number
function getTextElementById(elmentId){
    // calculate total
    const phoneTotalElement = document.getElementById(elmentId);
    const phoneTotalString = phoneTotalElement.innerText;
    const phoneTotalNumber = parseInt(phoneTotalString);
    phoneTotalElement.value = phoneTotalNumber;
    return phoneTotalNumber;
}

// create subtotal 
function calculateSubTotal(){
    const phonePriceTotal = getTextElementById('phone-price');
    const casePriceTotal = getTextElementById('case-price');

    const subTotalPrice = phonePriceTotal + casePriceTotal;
    setTextElementValueById('sub-total', subTotalPrice);

   const calculateTaxString = (subTotalPrice * 0.1).toFixed(2);
   const calculateTax = parseFloat(calculateTaxString)
   setTextElementValueById('tax', calculateTax);
   const TotalAmmount = calculateTax + subTotalPrice;
   setTextElementValueById('total-ammount', TotalAmmount)
}