const main=document.getElementById('main');
const addUser = document.getElementById('add-user');
const double = document.getElementById('doubleMoney');
const showMillioners = document.getElementById('showMillionaries');
const sort = document.getElementById('sort');
const calculateTotal = document.getElementById('Calculate-total');
const clear = document.getElementById('clearIt');


fetchData();
fetchData();
let newUser = {};
let data = [];
// we create fuction to fetch data
async function fetchData() {

    // Fetch api for get random user data
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    
            
    newUser = {         
        name: `${user.name.first}${user.name.last}`,
        worth: Math.round(Math.random()*1000000)
    }
    addData();
}



// we make function to add user data to empty array data
function addData() {
    data.push(newUser);
    updateDOM();
}

function formatCurrency(num) {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


function updateDOM(inputData = data) {
    main.innerHTML='<h2><strong>Name</strong>Net Worth</h2>';
    inputData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong> ${formatCurrency(item.worth).fixed(3)}`;
        main.appendChild(element); 
    });
}




function worthdouble(){
    data=data.map(item=>{
        return {...item,worth:item.worth*2};
    })
    updateDOM();
}
function highmillion(){
    data=data.filter(
        item=>item.worth>10000000
    )
    updateDOM();
}
function sorthigh(){
    data=data.sort((a,b)=>b.worth-a.worth)
    updateDOM();
}
function totalamount(){
    totalWorth=data.reduce((acc,item)=>(acc+=item.worth),0);
    const element2=document.createElement('div');
    element2.innerHTML=`<h3>Total Net Worth: <strong>${formatCurrency(totalWorth)}</strong></h3>`
    main.appendChild(element2);
}
    
function clearIt() {
    return true
}

// event listner lists shown below

addUser.addEventListener('click', fetchData);
double.addEventListener('click', worthdouble);
showMillioners.addEventListener('click', highmillion);
sort.addEventListener('click', sorthigh);
calculateTotal.addEventListener('click', totalamount);
clear.addEventListener('click',clearIt);