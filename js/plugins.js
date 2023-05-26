$(document).ready(function () {

    $(window).scroll(function () {

        var cachBtn = $(".top-btn");
        if ($(window).scrollTop() >= 700) {

            if (cachBtn.is(":hidden")) {

                cachBtn.fadeIn(500);
                cachBtn.css("display", "flex");
            }


        } else {
            cachBtn.fadeOut(500);
        }

    });

    $('.top-btn').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });

});

// Pure JS codes not a JQuery LIBS

// Start the countdown timer
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    //  Get Time Unites

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    // Set Time values to html document (page)
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0) {
        clearInterval(counter);
    }

}, 1000)
// End the countdown timer

// Start the numertion of stats area

let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false;
let progSec = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    if (window.scrollY >= progSec.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let step = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(step);
        }
    }, 50 / goal);
}


// End the numertion of stats area