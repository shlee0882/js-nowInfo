// const title = document.getElementById("title");
const title = document.querySelector("#title");
console.log(title);
console.dir(title);

const CLICKED_CLASS = "clicked";

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(238, 130, 238)";

// 사이즈 조절 시
function handleResize(event){
    console.log(event);
}

// 클릭 발생시
function handleClick(){
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    window.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline(){
    console.log("bye");
}

function handleOnline(){
    console.log("welcome back");
}

window.addEventListener("offline",handleOffline);
window.addEventListener("online",handleOnline);


// window.addEventListener("resize", handleResize);

