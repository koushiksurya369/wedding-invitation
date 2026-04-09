/* Guest Name */

const params =
new URLSearchParams(
window.location.search
);

const guest =
params.get("to");

if (guest) {

document.getElementById(
"guestName"
).innerHTML =
"Welcome " + guest;

}

/* Countdown */

const weddingDate =
new Date(
"April 26, 2026 07:48:00"
).getTime();

setInterval(() => {

const now =
new Date().getTime();

const diff =
weddingDate - now;

const days =
Math.floor(
diff /
(1000*60*60*24)
);

document.getElementById(
"countdown"
).innerHTML =
days + " Days to Wedding";

},1000);


/* MUSIC FADE-IN */

const music =
document.getElementById("bgMusic");

music.volume = 0;

function fadeInMusic() {

let vol = 0;

let fade =
setInterval(() => {

if (vol < 0.5) {

vol += 0.05;

music.volume = vol;

}

else {

clearInterval(fade);

}

}, 400);

}


/* Entrance Animation */

const enterBtn =
document.getElementById("enterBtn");

const entrance =
document.getElementById("entrance");

enterBtn.addEventListener("click", () => {

entrance.style.display = "none";

music.play();

fadeInMusic();

});


/* Scroll Animation */

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

}
);

document
.querySelectorAll(".fade-in")
.forEach(el=>{

observer.observe(el);

});

/* COUPLE FADE OUT ON SCROLL */

const coupleSection =
document.querySelector(".fade-scroll");

window.addEventListener("scroll", () => {

const scrollY =
window.scrollY;

if (scrollY > 200) {

coupleSection.classList.add("hide");

}
else {

coupleSection.classList.remove("hide");

}

});