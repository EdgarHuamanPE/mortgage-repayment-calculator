const layerRadio=document.querySelectorAll(".layer__radio");
const controlradio=document.querySelectorAll(".control__radiobutton");
let rootStyles = getComputedStyle(document.documentElement);
let radiocolorbg = rootStyles.getPropertyValue('--radio-color');
let limebg = rootStyles.getPropertyValue('--Lime');
let radiocolorborder = rootStyles.getPropertyValue('--Lime').trim();

const elementoHover=document.querySelectorAll(".element__hover");
const clean=document.querySelector(".control__clean");
const form=document.querySelector(".form__inputs");
const btnSubmit=document.querySelector(".btn__submit");


function resetRadio(){
    controlradio.forEach(function(cr){
        cr.checked=false;
        cr.parentNode.style.backgroundColor="";
        cr.parentNode.style.border="";
        cr.style.color="";
    });
}
function limpiarFocus(){

}



clean.addEventListener('click',(e)=>{
    e.preventDefault();
    resetRadio()
    form.reset();

});


form.addEventListener('submit',(e)=>{
    e.preventDefault();
});




elementoHover.forEach(function(element){
    

    element.addEventListener('click',(e)=>{
        
        e.target.nextElementSibling.focus();
        e.target.nextElementSibling.nextElementSibling.style.backgroundColor=limebg;
        e.target.style.border="1px solid "+limebg;
    });
});


layerRadio.forEach(function(radio){
    radio.addEventListener('click',(e)=>{
        const input=e.target.previousElementSibling.previousElementSibling;
        
        resetRadio();

        if (!input.checked){
            input.checked=true;
            input.parentNode.style.backgroundColor=radiocolorbg;
            input.parentNode.style.border="1px solid"+" "+radiocolorborder;
            input.color=radiocolorborder;

        }        
        
    });


    radio.addEventListener('mouseover',(e)=>{
        e.target.parentNode.classList.add('hover');
    });
    
    radio.addEventListener('mouseout',(e)=>{
        e.target.parentNode.classList.remove('hover');
    });
});



