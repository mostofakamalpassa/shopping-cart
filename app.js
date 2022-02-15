
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