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

/* MUSIC FIX */

const music =
document.getElementById("bgMusic");

const btn =
document.getElementById("musicBtn");

btn.addEventListener("click", () => {

if (music.paused) {

music.play();

btn.innerHTML = "🔇 Stop Music";

}

else {

music.pause();

btn.innerHTML = "🔊 Play Music";

}

});

/* Auto play after first touch */

document.body.addEventListener(
"click",
() => {

music.play();

},
{ once: true }
);