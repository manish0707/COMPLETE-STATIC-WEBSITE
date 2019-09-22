// front typing animation
const animationLine = document.querySelector(".animation-line");
const typingEffect = () => {
    const line = "Understanding the technology better.";
    let i = 0;
    const typing = () => {
        console.log("typing called");
        if(i < line.length) {
            animationLine.innerHTML += line.charAt(i);
            i++;
            setTimeout(() => {
                typing();
            }, 100);
        }
    }
    typing();
}

typingEffect();