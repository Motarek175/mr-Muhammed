// ------------------------------- Links -------------------------------
let image2 = document.querySelector(".mr .container img");
window.onload = setTimeout(function () {
  image2.style.cssText =
    "visibility: visible; animation-name: anmi2;animation-duration: 2s;animation-timing-function: linear;";
}, 500);

let ashter = document.querySelector(".linkss .container .lin .ashter");

setTimeout(function () {
  ashter.style.cssText =
    "visibility: visible; animation-name: anmi2;animation-duration: 2s;animation-timing-function: linear;";
}, 3000);

let yt = document.querySelector(".linkss .container .lin .youtube");

setTimeout(function () {
  yt.style.cssText =
    "visibility: visible; animation-name: anmi2;animation-duration: 2s;animation-timing-function: linear;";
}, 5000);

let fc = document.querySelector(".linkss .container .lin .face");

setTimeout(function () {
  fc.style.cssText =
    "visibility: visible; animation-name: anmi2;animation-duration: 2s;animation-timing-function: linear;";
}, 7000);

// ------------------------------- About -------------------------------

let image3 = document.querySelector(".about .container .img img");
window.onload = setTimeout(function () {
  image3.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 2s;animation-timing-function: linear;";
}, 500);

let h = document.querySelector(".about .container .Contact .locations h3");
let ul = document.querySelector(".about .container .Contact .locations ul");

setTimeout(function () {
  h.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 0.5s;animation-timing-function: linear;";
  ul.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 2s;animation-timing-function: linear;";
}, 3000);

let cont = document.querySelector(".about .container .Contact .cont h3");
let p = document.querySelector(".about .container .Contact .cont p");

setTimeout(function () {
  cont.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 0.5s;animation-timing-function: linear;";
  p.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 2s;animation-timing-function: linear;";
}, 5000);

// ------------------------------- home -------------------------------

let image = document.querySelector(".landing .img img");
let sign = document.querySelector(".landing .sign img");

window.onload = setTimeout(function () {
  image.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 2s;animation-timing-function: linear;";
  sign.style.cssText =
    "visibility: visible; animation-name: anmi;animation-duration: 2s;animation-timing-function: linear;";
}, 500);

let text = document.querySelector(".landing .text");

setTimeout(function () {
  text.style.cssText =
    "visibility: visible; animation-name: anmi1;animation-duration: 2s;animation-timing-function: linear;";
}, 3000);

let tex1 = document.querySelector(".landing .text p:nth-of-type(1)");
tex1.addEventListener("click", function () {
  window.open("https://ashtar.app/#/home", "_blank");
});

let tex2 = document.querySelector(".landing .text p:nth-of-type(2)");
tex2.addEventListener("click", function () {
  window.open("https://almanassa-edu.com/", "_blank");
});
