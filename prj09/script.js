const balance = document.getElementById('balance');
const incomePlus = document.getElementById('income-plus');
const incomeMinus = document.getElementById('income-minus');
const list = document.getElementById('list');
const discription = document.getElementById('description');
const amount = document.getElementById('amount');
const form = document.getElementById('form');
const addTransaction = document.getElementById('add-transaction');
const deletebtn=document.getElementById('deletebtn');
const dummyArray = [
    
];

let transactions = dummyArray;

updateListUi = (transaction) => {
    let amount = transaction.amount;
    let type = amount > 0 ? '+' : '-';
    let lists = document.createElement('li');
    lists.classList.add('history-salary');
    lists.classList.add(transaction.amount>0? 'green-border' : 'red-border');
    lists.innerHTML = `        
        ${transaction.discription}
        <span>${type}${Math.abs(transaction.amount)} PKR</span>
        <button class="cancelbutton" id='deletebtn' onclick="deleteTransaction(${transaction.id})">X</button>
    `;
    list.appendChild(lists);
}
//  we make sumAmount function to add array amount 
sumAmount=(transaction)=>{
    // let expenceamount=transaction.amount.includes('-'));
    let amounts=transaction.map(transaction=> transaction.amount);
    let totalAmount=amounts.reduce((acc,addcurrrent)=> (acc+=addcurrrent),0).toFixed(2);
    balance.innerText=`${totalAmount} PKR`;
    let income=amounts.filter(amount=>amount>0).reduce((acc,currentinput)=>(acc+=currentinput),0).toFixed(2);
    incomePlus.innerHTML=`${income} PKR`;
    let expence=amounts.filter(amount=>amount<0).reduce((acc,current)=>(acc+=current),0).toFixed(2);
    incomeMinus.innerHTML=`${expence} PKR`;
}



// init function for used to clear list and for each loop apply to reed array step by step
init=()=>{
    list.innerHTML='';
    transactions.forEach(updateListUi);
    
    sumAmount(transactions);
}


generateid=()=>{
    return Math.floor(Math.random()*10000);
    
}

deleteTransaction=(id)=>{
    transactions=transactions.filter(trans=>trans.id!=id);

    init();
}


addNewTransaction=(e)=>{
    e.preventDefault();
    if(discription.value.trim('')===''|| amount.value.trim('')===''){
        alert('Please enter required filled')
    }    
    else{
        const transaction={
            id:generateid(),
            discription:discription.value,
            amount:+amount.value
            };
        transactions.push(transaction);
        updateListUi(transactions);
        init();
        discription.value='';
        amount.value='';
    }
    // discription.value='';
    // amount.value='';
}

form.addEventListener('submit',addNewTransaction);


init();