
function partamount(parts){
    const partsid = document.getElementById(parts+'-cost')
    const partstext=partsid.innerText;
    var partsamount =parseInt(partstext);
    return partsamount
}
function computerfig(parts,price){

    
  
    //catch the cost of memoey/storage/delevery 0

    const partsid = document.getElementById(parts+'-cost')
    const partstext=partsid.innerText;
    var partsamount =parseInt(partstext); //0
   
    //text update
      partsid.innerText =price;
      
      
    //catch the simple best price $1299

    const best_priceid = document.getElementById('balance')
    const best_pricetext=best_priceid.innerText;
    const best_priceamount =parseInt(best_pricetext);
    


    //grand total balance update
    const total_priceid = document.getElementById('balance-total')
    const total_pricetext=total_priceid.innerText;
    const total_priceamount =parseInt(total_pricetext);

    let total = partamount('memory')+partamount('storage')+partamount('delevery');

    total_priceid.innerText = total +1299;

    
    
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
     

