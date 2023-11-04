
let epToggle = document.querySelector(".ep-toggler");

let epDiv = document.querySelector(".vid-div");

let open = document.querySelector(".toggle-open");

let hide = document.querySelector(".toggle-hide");

epToggle.addEventListener("click", ()=>{
    epDiv.classList.toggle("active");
    open.classList.toggle("active");
    hide.classList.toggle("active");
})