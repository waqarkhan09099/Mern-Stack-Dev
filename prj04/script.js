const currency1=document.getElementById('currencyOne');
const currency2=document.getElementById('currencyTwo');
const amount1=document.getElementById('amount1');
const amount2=document.getElementById('amount2');
const flipButton=document.getElementById('button-calculaterate');
const rate=document.getElementById('calculaterate');

// all function

calculate=()=>{
    let currencycode1=currency1.value;
    let currencycode2=currency2.value;
    fetch(`https://v6.exchangerate-api.com/v6/2e2b53019a9554c61f80e072/latest/${currencycode1}`)
        .then(res=>res.json())
        .then(data=>{
        // const exchangerate=data.conversion_rates[currencycode2];
        console.log(exchangerate);
    });

    // console.log(exchangerate);

    // rate.innerText=(`1 ${currency1.value} = ${exchangerate}`);
}

flip=()=>{
    return true
}

currency1.addEventListener('change',calculate);
currency2.addEventListener('change',calculate);
amount1.addEventListener('input',calculate);
amount2.addEventListener('inout',calculate);
flipButton.addEventListener('click',flip);
