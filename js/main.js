
function getPartsCost(parts) {
    const partsid = document.getElementById(parts+'-cost')
    const partstext=partsid.innerText;
    return parseInt(partstext);
}


function computerfig(parts,price){
  
    //catch the cost of memoey/storage/delevery cost id 
      const partsid = document.getElementById(parts+'-cost')
      const partstext=partsid.innerText;
      var partsamount =parseInt(partstext); 
      
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
    //const total_priceid = document.getElementById('balance-total')
    //const total_pricetext=total_priceid.innerText;
    //const total_priceamount =parseInt(total_pricetext);

    //total_priceid.innerText =moja+1299;
    
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
     





