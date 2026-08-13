const exams = [
    {
        id: "common1",
        name: "共通テスト 1日目",
        date: new Date(2027, 0, 16, 0, 0, 0),
        start: new Date(2026, 7, 13, 0, 0, 0)
    },
    {
        id: "common2",
        name: "共通テスト 2日目",
        date: new Date(2027, 0, 17, 0, 0, 0),
        start: new Date(2026, 7, 13, 0, 0, 0)
    },
    {
        id: "second",
        name: "二次試験",
        date: new Date(2027, 1, 25, 0, 0, 0),
        start: new Date(2026, 7, 13, 0, 0, 0)
    }
];


const clock = document.getElementById("clock");
const currentDate = document.getElementById("currentDate");

const nextExamName = document.getElementById("nextExamName");
const nextExamDate = document.getElementById("nextExamDate");

const heroDays = document.getElementById("heroDays");
const heroHours = document.getElementById("heroHours");
const heroMinutes = document.getElementById("heroMinutes");
const heroSeconds = document.getElementById("heroSeconds");

const heroProgress = document.getElementById("heroProgress");
const heroProgressText = document.getElementById("heroProgressText");


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


function getRemaining(target) {

    const now = new Date();

    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
        return null;
    }

    const totalSeconds = Math.floor(difference / 1000);

    return {
        days: Math.floor(totalSeconds / 86400),

        hours: Math.floor(
            (totalSeconds % 86400) / 3600
        ),

        minutes: Math.floor(
            (totalSeconds % 3600) / 60
        ),

        seconds: totalSeconds % 60
    };
}


function getNextExam() {

    const now = new Date();

    return exams.find(exam => {
        return exam.date > now;
    });
}


function updateClock() {

    const now = new Date();

    currentDate.textContent = formatDate(now);

    clock.textContent =
        pad(now.getHours()) +
        ":" +
        pad(now.getMinutes()) +
        ":" +
        pad(now.getSeconds());
}


function updateHero(exam) {

    if (!exam) {

        nextExamName.textContent = "ALL EXAMS COMPLETED";
        nextExamDate.textContent = "2027";

        heroDays.textContent = "000";
        heroHours.textContent = "00";
        heroMinutes.textContent = "00";
        heroSeconds.textContent = "00";

        heroProgress.style.width = "100%";
        heroProgressText.textContent = "100%";

        return;
    }


    const remaining = getRemaining(exam.date);

    nextExamName.textContent = exam.name;
    nextExamDate.textContent = formatDate(exam.date);


    if (!remaining) {
        return;
    }


    heroDays.textContent = pad(remaining.days, 3);
    heroHours.textContent = pad(remaining.hours);
    heroMinutes.textContent = pad(remaining.minutes);
    heroSeconds.textContent = pad(remaining.seconds);


    const now = new Date();

    const total =
        exam.date.getTime() -
        exam.start.getTime();

    const elapsed =
        now.getTime() -
        exam.start.getTime();

    let percentage =
        (elapsed / total) * 100;

    percentage = Math.max(
        0,
        Math.min(100, percentage)
    );

    heroProgress.style.width =
        `${percentage}%`;

    heroProgressText.textContent =
        `${percentage.toFixed(1)}%`;
}


function updateCard(exam) {

    const remaining = getRemaining(exam.date);

    const daysElement =
        document.getElementById(
            `${exam.id}Days`
        );

    const progressElement =
        document.getElementById(
            `${exam.id}Progress`
        );


    if (!remaining) {

        daysElement.textContent = "00";
        progressElement.style.width = "100%";

        return;
    }


    daysElement.textContent =
        pad(remaining.days, 2);


    const now = new Date();

    const total =
        exam.date.getTime() -
        exam.start.getTime();

    const elapsed =
        now.getTime() -
        exam.start.getTime();

    let percentage =
        (elapsed / total) * 100;

    percentage = Math.max(
        0,
        Math.min(100, percentage)
    );

    progressElement.style.width =
        `${percentage}%`;
}


function update() {

    updateClock();

    const nextExam = getNextExam();

    updateHero(nextExam);

    exams.forEach(exam => {
        updateCard(exam);
    });
}


update();

setInterval(update, 1000);