const commonTest = new Date(
    2027,
    0,
    17,
    9,
    30,
    0
);


const secondExam = new Date(
    2027,
    1,
    25,
    0,
    0,
    0
);


const clockElement =
    document.getElementById("clock");

const todayElement =
    document.getElementById("today");


function pad(number, digits = 2) {
    return String(number).padStart(digits, "0");
}


function formatDate(date) {

    return (
        date.getFullYear() +
        "." +
        pad(date.getMonth() + 1) +
        "." +
        pad(date.getDate())
    );
}


function updateClock() {

    const now = new Date();

    clockElement.textContent =
        pad(now.getHours()) +
        ":" +
        pad(now.getMinutes()) +
        ":" +
        pad(now.getSeconds());

    todayElement.textContent =
        formatDate(now);
}


function getRemaining(target) {

    const now = new Date();

    const difference =
        target.getTime() - now.getTime();


    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    return {
        days,
        hours,
        minutes,
        seconds
    };
}


function updateCountdown(
    target,
    daysId,
    hoursId,
    minutesId,
    secondsId
) {

    const remaining =
        getRemaining(target);


    document.getElementById(daysId)
        .textContent =
        pad(remaining.days, 3);


    document.getElementById(hoursId)
        .textContent =
        pad(remaining.hours);


    document.getElementById(minutesId)
        .textContent =
        pad(remaining.minutes);


    document.getElementById(secondsId)
        .textContent =
        pad(remaining.seconds);
}


function update() {

    updateClock();


    updateCountdown(
        commonTest,
        "commonDays",
        "commonHours",
        "commonMinutes",
        "commonSeconds"
    );


    updateCountdown(
        secondExam,
        "secondDays",
        "secondHours",
        "secondMinutes",
        "secondSeconds"
    );
}


update();


setInterval(update, 1000);