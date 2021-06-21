const bitcurrencypickerone=document.getElementById('bitcurrencyOne');
const bitcurrencypickertwo=document.getElementById('bitcurrencyTwo');
const bitamountone=document.getElementById('bitamount1');
const bitamounttwo=document.getElementById('bitamount2');
const flipbit=document.getElementById('bit-flip');
const bitrate=document.getElementById('bitcalculaterate');

// all function

bitcalculate=()=>{
    const currencycodeone=bitcurrencypickerone.value;
    const currencycodetwo=bitcurrencypickertwo.value;
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            const oneBitcoinRateInEuro = data.bpi.EUR.rate_float;
            fetch('https://api.exchangerate.host/latest')
                .then(res => res.json())
                .then(data => {
                    const oneBitcoinInRequiredCurrency = oneBitcoinRateInEuro * data.rates[bitcurrencypickertwo];
                    // let totalTargetBitcoinAmount;
                    // // 2 - Calculate Total Amount
                    // if (sourceBitcoinAmount.value === ""){
                    //     totalTargetBitcoinAmount = sourceBitcoinAmount.placeholder * oneBitcoinInRequiredCurrency;
                    // }else {
                    //     totalTargetBitcoinAmount = sourceBitcoinAmount.value * oneBitcoinInRequiredCurrency;
                    // }
                    // 3 - Update Input Amounts
                    bitamounttwo.value =  totalTargetBitcoinAmount.toFixed(2);
        
                    // 4 - Update Rate Amounts
                    bitrate.innerText = oneBitcoinInRequiredCurrency.toFixed(2);
                }); 
        });
}

bitflip=()=>{
    const temp1=bitcurrencypickerone.value;
    bitcurrencypickerone.value=bitcurrencypickertwo.value;
    bitcurrencypickertwo.value= temp1;
    bitcalculate();
}

bitcurrencypickerone.addEventListener('change',bitcalculate);
bitcurrencypickertwo.addEventListener('change',bitcalculate);
bitamountone.addEventListener('input',bitcalculate);
bitamounttwo.addEventListener('input',bitcalculate);
flipbit.addEventListener('click',bitflip);
