//-----button group-----//
const memory1=document.getElementById('memory-btn-1'); 
const memory2=document.getElementById('memory-btn-2'); 
const storage1=document.getElementById('storage-btn-1'); 
const storage2=document.getElementById('storage-btn-2'); 
const storage3=document.getElementById('storage-btn-3');  
const delivery1=document.getElementById('delivery-btn-1'); 
const delivery2=document.getElementById('delivery-btn-2'); 



//-------input field group---------//
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCost = document.getElementById('delivery-cost');


//----Updating input field-------//
memory1.addEventListener('click',function(){
    extraMemoryCost.innerText='0';
    calcInput();

})
memory2.addEventListener('click',function(){
    extraMemoryCost.innerText='180';
    calcInput();

})
storage1.addEventListener('click',function(){
    extraStorageCost.innerText='0';
    calcInput();
})
storage2.addEventListener('click',function(){
    extraStorageCost.innerText='100';
    calcInput();
})
storage3.addEventListener('click',function(){
    extraStorageCost.innerText='180';
    calcInput();
})
delivery1.addEventListener('click',function(){
    deliveryCost.innerText='0';
    calcInput();
})
delivery2.addEventListener('click',function(){
    deliveryCost.innerText='20';
    calcInput();
})

//----Calculation JS----//
function calcInput(){
    const memoryTotal = Number(extraMemoryCost.innerText);
    const storageTotal = Number(extraStorageCost.innerText);
    const deliveryTotal = Number(deliveryCost.innerText);

    const subTotal = 1299+memoryTotal+storageTotal+deliveryTotal;


    
   
 
    //Update the HTML
    document.getElementById('sub-total').innerText=subTotal;

   

    
}

//--------Promo Code JS------//
document.getElementById('promo-code-btn').addEventListener('click',function(){
    const promoCodeField = document.getElementById('promo-code');
    const promoCode = promoCodeField.value;

    if(promoCode=='stevekaku'){
        const subTotal = document.getElementById('sub-total').innerText;
        const discount = parseFloat(subTotal * .2);
        const discountedTotal = parseFloat(subTotal-discount);


        //update HTML
        document.getElementById('grand-total').innerText = discountedTotal;
    }
})




