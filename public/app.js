const vNav = document.getElementById("vNav");
const hNav = document.getElementById("hNav");
const bars = document.getElementById("bars");
bars.addEventListener("click",()=>{
    if (hNav.classList.contains("w-full")){
        hNav.classList.remove("w-full");
        hNav.classList.add("w[80%");
        vNav.classList.remove("hidden");
        vNav.classList.add("flex");
    }
    else{
        hNav.classList.remove("w[80%]");
        hNav.classList.add("w-full");
        vNav.classList.remove("flex");
        vNav.classList.add("hidden");
    }
})