
function getPartsCost(parts) {
    const partsid = document.getElementById(parts+'-cost')
    const partstext=partsid.innerText;
    return parseInt(partstext);
}


function computerfig(parts,price){
  
    //catch the cost of memoey/storage/delevery cost id 
      const partsid = document.getElementById(parts+'-cost')
      const partstext=partsid.innerText;
      const parts_amount =parseInt(partstext); 
      
    //value set 
       partsid.innerText = price;
      
    //catch the simple best price $1299

    let base_price = parseInt( document.getElementById('balance').innerText );

    //calculate the total 
    let total = base_price + getPartsCost('memory') + getPartsCost('storage') + getPartsCost('delevery');

    //catch the grand total id 
    const best_priceid = document.getElementById('balance-total')
    
    //finally set the value of total element
    best_priceid.innerText = total;
    
    


    //grand total balance update
    const grand_total_priceid = document.getElementById('grand-total')
    const grand_total_pricetext=grand_total_priceid.innerText;
    const grand_total_priceamount =parseInt(grand_total_pricetext);
 
    grand_total_priceid.innerText =total;

    



    
}




// // click event for memory 

document.getElementById('8-gb').addEventListener('click',function(){
   
computerfig('memory',0)

});

document.getElementById('16-gb').addEventListener('click',function(){
    computerfig('memory',180) 
    
 });


//click event for storage unit

document.getElementById('storage-1').addEventListener('click',function(){
   
    computerfig('storage',0) 

 });
 
 document.getElementById('storage-2').addEventListener('click',function(){
   
   computerfig('storage',100) 

  });
  document.getElementById('storage-3').addEventListener('click',function(){
   
   computerfig('storage',180) 

 });


 // click event for delevery unit

 document.getElementById('delevery-1').addEventListener('click',function(){
   
    computerfig('delevery',0) 
  });
  document.getElementById('delevery-2').addEventListener('click',function(){
    computerfig('delevery',20) 
    

 });
     


 document.getElementById('promo-submit').addEventListener('click',function(){


  const promo_input_id = document.getElementById('promo-input');
  const promo_text =promo_input_id.value;
  
  
  const grand_total_priceid = document.getElementById('grand-total')
  const grand_total_pricetext=grand_total_priceid.innerText;
  const grand_total_priceamount =parseInt(grand_total_pricetext);


  if(promo_text=='stevekaku'){
    
   const final_result =grand_total_priceamount*0.2;
   console.log(final_result);
   grand_total_priceid.innerText =grand_total_priceamount-final_result;
   promo_input_id.value =''
  }
  else{
    promo_input_id.value ='';
  }

  
  

});



