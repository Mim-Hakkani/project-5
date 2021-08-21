// click event for memory 

document.getElementById('8-gb').addEventListener('click',function(){
   computer_confure('memory','8'); 
});

document.getElementById('16-gb').addEventListener('click',function(){
    computer_confure('memory','16');
 });


//click event for storage unit

document.getElementById('storage-1').addEventListener('click',function(){
    computer_confure('storage','storage-1'); 
 });
 
 document.getElementById('storage-2').addEventListener('click',function(){
    computer_confure('storage','storage-2');
  });
  document.getElementById('storage-3').addEventListener('click',function(){
    computer_confure('storage','storage-3');
 });


 // click event for delevery unit

 document.getElementById('delevery-1').addEventListener('click',function(){
    computer_confure('delevery','delevery-1');
  });
  document.getElementById('delevery-2').addEventListener('click',function(){
   computer_confure('delevery','delevery-2');
 });
     
 
function computer_confure(type,quality){
              const storageCost = document.getElementById(type+'-cost');
              const storageCostText =storageCost.innerText; 
              const storageCostamount =parseInt(storageCostText);

              console.log(storageCostamount);

            //for memory
              if(quality =='8'){
                storageCost.innerText =0;
              }
              else if(quality=='16')
              {
                storageCost.innerText =180;
              }

              //for storage

              if(quality=='storage-1')
              {
                storageCost.innerText =0;
              }
              else if(quality=='storage-2'){
                storageCost.innerText =100;
              }
              else if(quality=='storage-3'){
                storageCost.innerText =180;
              }

              //for delevery
              if(quality=='delevery-1')
              {
                storageCost.innerText =0;
              }
              else if(quality=='delevery-2')
              {
                storageCost.innerText =20;
              }
}









 
//  /********************* 
                         
//                 function for memory
   
//     ********************/ 
   
                
// function memoryadd(type){
    
//     const mcost_catch_id =document.getElementById('memory-cost');
//     const mcost_catch_value = parseInt(mcost_catch_id.innerText);

//     //value set into the total calculation
//     if(type=='8-gb')
//     {

//         mcost_catch_id.innerText = 0;
//     }
//     else{
//         mcost_catch_id.innerText = 180;
//     } 

// }

// /**********************
//    storage calculation
// ***********************/

// function ssdStorage(type){
      
//     const storageCost = document.getElementById('storage-cost');
//     const storageCostText =storageCost.innerText; 
//     const storageCostamount =parseInt(storageCostText); 

//     if(type=='storage-1')
//     {
//         storageCost.innerText =0;
//     }
//     else if(type=='storage-2'){

//         storageCost.innerText =100;
//     }
//     else
//     {
//         storageCost.innerText =180;
//     }
// }


// /**********************
//    Delevery calculation
// ***********************/
// function Delevery(type){
      
//     const deleveryCost = document.getElementById('delevery-cost');
//     const deleveryCostText =deleveryCost.innerText; 
//     const deleveryCostamount =parseInt(deleveryCostText); 

//     if(type=='delevery-1')
//     {
//         deleveryCost.innerText =0;
//     }
//     else{

//         deleveryCost.innerText =20;
//     }
    
// }
