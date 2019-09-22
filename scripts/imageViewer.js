const imageViewer = document.querySelector(".image-viewer-wrapper");
const innerImageViwer = document.querySelector(".image-viewer");
const mainDiv = document.querySelector(".main-div");
const images = document.querySelectorAll(".image");
const crossBtn = document.querySelector(".close span");
const allImages = document.querySelectorAll(".image");

allImages.forEach(item => {
    item.innerHTML =   `
    <span class='preview-message'>Click To Preview</span>`;
})


const showModel = (evt) => {
    const clickedOn = evt.target.className;
    let imagePath = evt.target.style.backgroundImage;
    if(clickedOn === "preview-message") {
        imagePath = evt.target.parentElement.style.backgroundImage;
    }
    innerImageViwer.style.backgroundImage = imagePath;
    innerImageViwer.style.animation = "jackInTheBox 1s ease";
    imageViewer.style.display = "flex";
}

const hideModel = () => {
    imageViewer.style.display = "none";
}

images.forEach((image) => {
    image.addEventListener("click", showModel );
})

crossBtn.addEventListener("click", hideModel );