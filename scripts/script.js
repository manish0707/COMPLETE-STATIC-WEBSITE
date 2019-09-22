// all variables 

const btn = document.querySelectorAll(".start-a-project-btn");
const divForm = document.querySelector(".start-a-project-form");
const closeBtn = document.querySelector(".close");
const maindiv = document.querySelector(".main-div");
const html = document.querySelector("html");


const showForm = () => {

    console.log("Clicked!");

    divForm.style.animation = "fadeInUp 0.6s";
    divForm.style.display = "flex";
    html.style.overflow = "hidden";

}

btn.forEach((btn) => {
    btn.addEventListener("click", showForm)
})


// All event Listners

closeBtn.addEventListener("click", () => {

    divForm.style.animation = "fadeOutDown 0.6s";
    html.style.overflow = "auto";

    setTimeout(() => {
        divForm.style.display = "none";
    }, 600);
})