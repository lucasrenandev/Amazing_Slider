"use strict";

const hero = document.querySelector(".hero");
const prev = hero.querySelector(".buttons-box .prev");
const next = hero.querySelector(".buttons-box .next");

function nextSlide() {
    const slider = hero.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide");
    slider.appendChild(slides[0]);
}

function prevSlide() {
    const slider = hero.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide");
    slider.prepend(slides[slides.length - 1]);
}

setInterval(nextSlide, 6000);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);