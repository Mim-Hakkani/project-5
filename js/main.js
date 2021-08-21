// click event for memory 

document.getElementById('8-gb').addEventListener('click',function(){
   memoryadd('8-gb'); 
});

document.getElementById('16-gb').addEventListener('click',function(){
    memoryadd('16-gb');
 });


//click event for storage unit

document.getElementById('storage-1').addEventListener('click',function(){
    ssdStorage('storage-1'); 
 });
 
 document.getElementById('storage-2').addEventListener('click',function(){
    ssdStorage('storage-2');
  });
  document.getElementById('storage-3').addEventListener('click',function(){
    ssdStorage('storage-3');
 });


 // click event for delevery unit

 document.getElementById('delevery-1').addEventListener('click',function(){
    Delevery('delevery-1');
  });
  document.getElementById('delevery-2').addEventListener('click',function(){
   Delevery('delevery-2');
 });
        
 
 /********************* 
                         
                function for memory
   
    ********************/ 
   
                
function memoryadd(type){
    
    const mcost_catch_id =document.getElementById('memory-cost');
    const mcost_catch_value = parseInt(mcost_catch_id.innerText);

    //value set into the total calculation
    if(type=='8-gb')
    {

        mcost_catch_id.innerText = 0;
    }
    else{
        mcost_catch_id.innerText = 180;
    } 

}

/**********************
   storage calculation
***********************/

function ssdStorage(type){
      
    const storageCost = document.getElementById('storage-cost');
    const storageCostText =storageCost.innerText; 
    const storageCostamount =parseInt(storageCostText); 

    if(type=='storage-1')
    {
        storageCost.innerText =0;
    }
    else if(type=='storage-2'){

        storageCost.innerText =100;
    }
    else
    {
        storageCost.innerText =180;
    }
}


/**********************
   Delevery calculation
***********************/
function Delevery(type){
      
    const deleveryCost = document.getElementById('delevery-cost');
    const deleveryCostText =deleveryCost.innerText; 
    const deleveryCostamount =parseInt(deleveryCostText); 

    if(type=='delevery-1')
    {
        deleveryCost.innerText =0;
    }
    else{

        deleveryCost.innerText =20;
    }
    
}
