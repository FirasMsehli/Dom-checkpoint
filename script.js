//Plus buttons!

let plusBtns = document.querySelectorAll('.plus-btn');

console.log(plusBtns);
for(let i=0; i< plusBtns.length; i++){
    plusBtns[i].addEventListener('click',function(){
        plusBtns[i].previousElementSibling.value++;
        totalPrice()
    })

}


function totalPrice(){
    let sum = 0;
    var Qts = document.querySelectorAll('.QNT');
      console.log(Qts);
    var Prices = document.querySelectorAll('.price');
      console.log(Prices);
      
   for( let i = 0; i < Qts.length; i++){
    sum = sum + Qts[i].value * Prices[i].innerHTML;
   }   
   
   document.querySelector('#finalPrice').value=sum;
}


//Minus buttons

let minusBtns = document.querySelectorAll('.minus-btn')

console.log(minusBtns)
for(let i=0; i< minusBtns.length; i++){
    minusBtns[i].addEventListener('click',function(){
         if(minusBtns[i].nextElementSibling.value>0){
        minusBtns[i].nextElementSibling.value--
        totalPrice()
         }
    })

}


// Like buttons
     var btnvar = document.querySelectorAll('.fa')

     console.log(btnvar)

     for(let i=0; i< btnvar.length; i++){
          btnvar[i].addEventListener('click',function(){
            if(btnvar[i].style.color === 'rgb(158, 158, 158)' ){
                btnvar[i].style.color ='red';
                
            }
            else{
                btnvar[i].style.color = 'rgb(158, 158, 158)'
            }
          })
     }

     
    


    
   

    //remove 
     
     let deletebutton = document.querySelectorAll('.delete')
   
    
     console.log(deletebutton)

      for(let i=0; i< deletebutton.length; i++){
        deletebutton[i].addEventListener('click',function(){
          deletebutton[i].parentNode.remove();
          totalPrice()
        })
    
        


         }
      













