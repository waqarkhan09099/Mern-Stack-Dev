const  toggleButton=document.getElementById('toggle');
const applyButton=document.getElementById('apply');
const close=document.getElementById('close');
const model=document.getElementById('model');


toggleButton.addEventListener('click',()=>{
    document.body.classList.toggle("nav-show")
    
});

applyButton.addEventListener('click',()=>
    model.classList.add('open-window')
);

close.addEventListener('click',()=>
    model.classList.remove('open-window')

);

window.addEventListener('click',e=>{
    e.target===model? model.classList.remove('open-window') : false
}
);