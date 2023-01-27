let bf = document.getElementById("bf");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
let all = document.getElementById("all");
let ln = document.getElementById("ln");
let bf1 = document.getElementById("bf1");
let bf2 = document.getElementById("bf2");
let dn = document.getElementById("dn");
bf.addEventListener("click",breakfast);
lunch.addEventListener("click",lunchDisplay);
dinner.addEventListener("click",dinnerDisplay);
all.addEventListener("click",allDisplay);
function breakfast(){
    bf1.style.display = "flex";
    bf2.style.display = "flex";
    ln.style.display = "none";
    dn.style.display = "none";
}

function lunchDisplay(){
    bf1.style.display = "none";
    bf2.style.display = "none";
    ln.style.display = "flex";
    dn.style.display = "none";
}

function dinnerDisplay(){
    bf1.style.display = "none";
    bf2.style.display = "none";
    ln.style.display = "none";
    dn.style.display = "flex";
}

function allDisplay(){
    bf1.style.display = "flex";
    bf2.style.display = "flex";
    ln.style.display = "flex";
    dn.style.display = "flex";
}