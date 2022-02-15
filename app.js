
function updateMobile(inputquty,showPrice, productParPrice, isIncrese){
    const productQuantity = document.getElementById(inputquty);
  const price = document.getElementById(showPrice);

  let quanitityValue = parseInt(productQuantity.value);
  if(isIncrese){
      quanitityValue =  quanitityValue + 1;
  }else if(quanitityValue> 1){
      quanitityValue  = quanitityValue - 1;
  }
  let priceParse = parseFloat(price.innerText);
   productQuantity.value = quanitityValue;

   let totalprice = productParPrice * quanitityValue;
   price.innerText = totalprice;

   // Calculator using 
   debugger
   calculateField();
}

document.getElementById("moblie-plus").addEventListener("click", function (e) {
    updateMobile('quanitity','mobile-price', 1219, true);


});

document.getElementById("mobile-minus").addEventListener("click", function (e) {
    updateMobile('quanitity','mobile-price', 1219, false);
});

document.getElementById('case-plus').addEventListener('click',function(e){
    updateMobile('case-quantity','case-price', 59, true);
        
})
document.getElementById('case-minus').addEventListener('click',function(e){
    updateMobile('case-quantity','case-price', 59, false);
        
})


function getInputField(quanitity, productPrice ){
    const productQuantity = document.getElementById(quanitity);

    let parseQuantyty = parseInt(productQuantity.value);
    
    return parseQuantyty *  productPrice;
    

}

function calculateField(){
  const mobliePrice =  getInputField('quanitity', 1219 );
  const casePrice = getInputField('case-quantity', 59 );

  const subTotal = document.getElementById('subtotal');
  const tax = document.getElementById('tax');
  const grandTotal = document.getElementById('grandTotal');
  let subTotalParse = parseFloat(subTotal.innerText);
  let taxWitProduct = ((mobliePrice + casePrice) * 20)/100;
  grandTotal.innerText = (mobliePrice + casePrice + taxWitProduct);
  subTotal.innerText = mobliePrice + casePrice;
  tax.innerText = taxWitProduct;
}