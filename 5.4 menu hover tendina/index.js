const menu = document.querySelector(".home");
window.tendina = document.querySelector(".tendina");
window.nav=document.querySelector(".navbar");
window.altezzanav = nav.offsetHeight;

function slidedown (){
    tendina.style.transform = `translate(-25%,${altezzanav}px)`;
    tendina.style.opacity = "100%";

}

function slideup (){
    tendina.style.transform = "translate(-25%,0)";
    tendina.style.opacity = "0%";

}

function posizionamento (){
    const rect = menu.getBoundingClientRect();
    const rectnav = nav.getBoundingClientRect();
    tendina.style.transform = "translateX(-25%)";
    tendina.style.top = `${rectnav.top}px`;
    tendina.style.left = `${rect.left}px`;
}

window.addEventListener("load", posizionamento);
menu.addEventListener("mouseover", slidedown);
menu.addEventListener("mouseleave", slideup);

