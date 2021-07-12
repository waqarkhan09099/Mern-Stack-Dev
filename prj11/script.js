const filterInput=document.getElementById('filterSearch');
const number=document.getElementById('number');
const title=document.getElementById('postTitle');
const postContent=document.getElementById('postContent');
const loader=document.getElementById('loader');
const post=document.getElementById('post');

let page=1;
let postLimit=20;

// first we fetch json placeholder api for dummy data

async function dataFetch(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}&_page=${page}`);
    let data = await res.json();
    console.log(data);
    return data;
}

async function showData(){
    let posts=await dataFetch();
    posts.forEach(post=>{
        const container=document.createElement('div');
        container.classList.add('post');
        container.innerHTML=`
        <div class="number" id="number">${post.id}</div>
        <div class="post-title">
                <h1 id="postTitle">${post.title}</h1>
        </div>
        <div class="post-content">
            <p id="postContent">${post.body}</p>
        </div>
        `;
        postContainer.appendChild(container);
    })
}

filterFunc=(e)=>{
    const filterTerm = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post')
    posts.forEach( post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const content= post.querySelector('.post-content').innerText.toUpperCase();

        if( title.indexOf(filterTerm) > -1 || content.indexOf(filterTerm) > -1 ) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
}



showData();
window.addEventListener('scroll',()=>{
    const{scrollTop,scrollHeight,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight===scrollHeight){
        loader.classList.add("show");
         
        setTimeout(()=>{
            loader.classList.remove("show");
            setTimeout(()=>{

                page++; 
                showData();          
            },300)
        },1000);
    }
});

filterInput.addEventListener('input',filterFunc)
