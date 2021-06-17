const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total_amount');
// count Occupied=document.querySelectorAll('.row .occupied');
const movieselection=document.getElementById('Movies_list');
let ticketprice= +movieselection.value;
// UPPER LINE IN PLUS SIGN IS USE TO VALUE IN NUMBER TYPE

// All Function
UpdateSelectCount=()=>{
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const countSelectedSeats=selectedSeats.length;

    const seatsIndex=[...selectedSeats].map(seat=>{[...seats].indexOf(seat)});
    console.log(seatsIndex);
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    count.innerText=countSelectedSeats;
    total.innerText=ticketprice*countSelectedSeats;

}

// Save the data in local storage like movie select and movie PromiseRejectionEvent'
// setMovieData=(selectedMovie,movieIndex)=>{
//     localStorage.setItem("selectedIndex,movieIndex")
//     localStorage.setItem("selectedPrice,moviePrice")
// }

// WE MAKE EVENT  LISTNER TO CHANGE TO SELECT OTHER IN DROPDOWN OPTION
movieselection.addEventListener('change',(e)=>{
    ticketprice=+e.target.value;
    console.log(e.target.selectedIndex,e.target.value);
    UpdateSelectCount();
})


container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        UpdateSelectCount();
    }

})