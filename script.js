
const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("mouseover", arrowAni));
buttons.forEach(button => button.addEventListener("mouseout", arrowAniStop));

function arrowAni() {
    this.childNodes[1].classList.add("button_ani");
        // console.log(this.childNodes[1])
}

function arrowAniStop() {
    this.childNodes[1].classList.remove("button_ani");
}