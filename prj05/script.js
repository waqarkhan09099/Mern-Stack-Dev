const addUser=document.getElementById('add-user');
const double=document.getElementById('doubleMoney');
const showMillioners=document.getElementById('showMillionaries');
const sort=document.getElementById('sort');
const calculateTotal=document.getElementById('Calculate-total');
const main=document.getElementById('main');

fetchData();

let data={};
// we create fuction to fetch data
async function fetchData(){

    // Fetch api for get random user data
    let res=await fetch('https://randomuser.me/api');
    let data=await res.json();
    
    let user = data.results[0];
    console.log(user)

    let newuser={
        name:`${user.name.first} ${user.name.last}`,
        worth:Math.random()*1000000
    }

}

// we make function to add user data to empty array data
function addData(){
    data=push(newuser);
    updateDOM()
}

function updataDOM(inputdata=data){
    main.innerHTML=`<h3><strong>Name</strong>Worth</h3>`;
    inputdata.forEach(item => {
        main.innerHTML=`<h3><strong>${data.name}</strong>${data.worth}</h3>`;
        main.addClass();
    });
}