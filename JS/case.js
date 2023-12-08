//create a function for price increase and removed

function updateInputFiled(isIncrease){
      // target input filed
      const caseInputFiled = document.getElementById('case-input-filed');
      // get value form input filed
      const caseInputString = caseInputFiled.value;
      // make this value a number 
      const caseInputNumber = parseInt(caseInputString);
      // increment  and remove the value
      let caseIncrease;
      if(isIncrease === true){
        caseIncrease = caseInputNumber + 1;
      } else {
        caseIncrease = caseInputNumber - 1;
      }
      // set value input filed 
      caseInputFiled.value = caseIncrease;
      return caseIncrease;
}

// create case plus button  click event 
document.getElementById('btn-case-plus').addEventListener('click', function(){
  const caseIncrease = updateInputFiled(true);
  const casePrice = document.getElementById('case-price');
  const newPrice = caseIncrease * 59;
  casePrice.innerText = newPrice;
  // update the subtoal 
  calculateSubTotal();

});

//create  minus button click event

document.getElementById('case-btn-minus').addEventListener('click', function(){
    const caseIncrease = updateInputFiled(false);
    const casePrice = document.getElementById('case-price');
    const newPrice = caseIncrease * 59;
    casePrice.innerText = newPrice;
    // update the subtoal 
   calculateSubTotal();
})
