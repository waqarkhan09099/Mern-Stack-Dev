const container=document.querySelector('.seat-container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total_amount');
const movieselection=document.getElementById('Movies_list');

const ticketprice=+movieselection.value;
// UPPER LINE IN PLUS SIGN IS USE TO VALUE IN NUMBER TYPE
console.log(ticketprice);
