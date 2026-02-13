// ---------- Typewriter ----------
const text = "Something magical is waiting for you... ❤️";
let index = 0;
function typeWriter() {
    if(index < text.length){
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter,50);
    }
}
typeWriter();

// ---------- Page Transitions ----------
function nextPage(){
    document.getElementById("intro").classList.remove("active");
    document.getElementById("catSection").classList.add("active");
}

function nextPageGift(){
    document.getElementById("catSection").classList.remove("active");
    document.getElementById("giftSection").classList.add("active");
}

// ---------- Gift ----------
function openGift(){
    document.querySelector(".gift").classList.add("open");
    setTimeout(()=>{
        document.getElementById("giftSection").classList.remove("active");
        document.getElementById("finalSection").classList.add("active");
        startFireworks();
    },1000);
}

// ---------- Music ----------
function playMusic(){
    document.getElementById("bgMusic").play();
}

// ---------- Fireworks ----------
function startFireworks(){
    for(let i=0;i<50;i++){
        let fire = document.createElement("div");
        fire.innerHTML = "✨";
        fire.style.position = "absolute";
        fire.style.left = Math.random()*100+"%";
        fire.style.top = Math.random()*100+"%";
        fire.style.fontSize = 20+Math.random()*30+"px";
        document.body.appendChild(fire);
        setTimeout(()=> fire.remove(),2000);
    }
}
