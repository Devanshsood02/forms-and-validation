
let nm=document.querySelector("#name");
let small=document.querySelector('small');

let form=document.querySelector('form');


form.addEventListener('submit',function(dets){

    dets.preventDefault();

    if(nm.value.length<=2){
   
        small.style.display='initial';

    }

    else{
        small.style.display='none';
    }

})