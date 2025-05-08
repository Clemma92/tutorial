const container = document.querySelector(".container");

function resize(){
    var maxSize = Math.min(window.innerHeight, window.innerWidth)
    container.style.width = maxSize + "px";
    container.style.height = maxSize + "px";
}

resize();

window.addEventListener("resize", resize);