const currencypickerone=document.getElementById('currencyOne');
const currencypickertwo=document.getElementById('currencyTwo');
const amountone=document.getElementById('amount1');
const amounttwo=document.getElementById('amount2');
const flipButton=document.getElementById('button-calculaterate');
const rate=document.getElementById('calculaterate');

// all function

calculate=()=>{
    const currencycodeone=currencypickerone.value;
    const currencycodetwo=currencypickertwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/2e2b53019a9554c61f80e072/latest/${currencycodeone}`)
        .then(res=>res.json())
        .then(data=>{
        const exchangeRate=data.conversion_rates[currencycodetwo];
        console.log(exchangeRate);
        calculaterate.innerHTML=`1${currencycodeone} = ${exchangeRate}${currencycodetwo}`;
        amounttwo.value= (exchangeRate*amountone.value).toFixed(2) ;
    });
}

flip=()=>{
    const temp=currencypickerone.value;
    currencypickerone.value=currencypickertwo.value;
    currencypickertwo.value= temp;
    calculate();
}

currencypickerone.addEventListener('change',calculate);
currencypickertwo.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
amounttwo.addEventListener('input',calculate);
flipButton.addEventListener('click',flip);
