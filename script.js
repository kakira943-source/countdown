const targetDateInput = document.getElementById("targetDate");
const setDateButton = document.getElementById("setDate");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const targetText = document.getElementById("targetText");
const currentDate = document.getElementById("currentDate");

const progress = document.getElementById("progress");
const progressPercent = document.getElementById("progressPercent");


const pad = (number, digits = 2) => {
    return String(number).padStart(digits, "0");
};


function formatDate(date) {

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    return `${year}.${month}.${day}`;
}


function getDefaultTarget() {

    const target = new Date();

    target.setFullYear(target.getFullYear() + 1);
    target.setHours(0, 0, 0, 0);

    return target;
}


function saveTarget(date) {
    localStorage.setItem("countdownTarget", date.toISOString());
}


function loadTarget() {

    const saved = localStorage.getItem("countdownTarget");

    if (saved) {
        const date = new Date(saved);

        if (!isNaN(date.getTime())) {
            return date;
        }
    }

    return getDefaultTarget();
}


let targetDate = loadTarget();


function setInputDate(date) {

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    targetDateInput.value = `${year}-${month}-${day}`;
}


function updateCurrentDate() {

    const now = new Date();

    const text =
        `${now.getFullYear()}.` +
        `${pad(now.getMonth() + 1)}.` +
        `${pad(now.getDate())} ` +
        `${pad(now.getHours())}:` +
        `${pad(now.getMinutes())}:` +
        `${pad(now.getSeconds())}`;

    currentDate.textContent = text;
}


function updateCountdown() {

    const now = new Date();

    let difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {

        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        progress.style.width = "100%";
        progressPercent.textContent = "100%";

        targetText.textContent = "TIME'S UP";

        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    daysElement.textContent = pad(days, 3);
    hoursElement.textContent = pad(hours);
    minutesElement.textContent = pad(minutes);
    secondsElement.textContent = pad(seconds);

    targetText.textContent = formatDate(targetDate);


    const startDate = new Date(targetDate);

    startDate.setFullYear(
        targetDate.getFullYear() - 1
    );

    const totalDuration =
        targetDate.getTime() - startDate.getTime();

    const elapsed =
        now.getTime() - startDate.getTime();

    let percentage =
        (elapsed / totalDuration) * 100;

    percentage = Math.min(
        100,
        Math.max(0, percentage)
    );

    progress.style.width = `${percentage}%`;
    progressPercent.textContent =
        `${percentage.toFixed(1)}%`;
}


setDateButton.addEventListener("click", () => {

    if (!targetDateInput.value) {
        return;
    }

    const [year, month, day] =
        targetDateInput.value.split("-").map(Number);

    targetDate = new Date(
        year,
        month - 1,
        day,
        0,
        0,
        0
    );

    saveTarget(targetDate);

    updateCountdown();
});


targetDateInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        setDateButton.click();
    }
});


setInputDate(targetDate);
updateCurrentDate();
updateCountdown();


setInterval(() => {

    updateCurrentDate();
    updateCountdown();

}, 1000);