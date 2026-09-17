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


// --------------------
// CLOCK
// --------------------

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


// --------------------
// COUNTDOWN
// --------------------

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


    return {
        days:
            Math.floor(totalSeconds / 86400),

        hours:
            Math.floor(
                (totalSeconds % 86400) / 3600
            ),

        minutes:
            Math.floor(
                (totalSeconds % 3600) / 60
            ),

        seconds:
            totalSeconds % 60
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


// --------------------
// DIARY
// --------------------

const diaryInput =
    document.getElementById("diaryInput");

const saveDiaryButton =
    document.getElementById("saveDiary");

const saveMessage =
    document.getElementById("saveMessage");

const diaryList =
    document.getElementById("diaryList");

const diaryDate =
    document.getElementById("diaryDate");


function getTodayKey() {

    const now = new Date();

    return formatDate(now);
}


function loadEntries() {

    const data =
        localStorage.getItem("diaryEntries");

    if (!data) {
        return {};
    }

    try {
        return JSON.parse(data);
    }

    catch {
        return {};
    }
}


function saveEntries(entries) {

    localStorage.setItem(
        "diaryEntries",
        JSON.stringify(entries)
    );
}


function loadTodayDiary() {

    const entries = loadEntries();

    const today = getTodayKey();

    if (entries[today]) {
        diaryInput.value =
            entries[today];
    }

    else {
        diaryInput.value = "";
    }
}


function renderDiary() {

    const entries = loadEntries();

    diaryList.innerHTML = "";


    const dates =
        Object.keys(entries).sort().reverse();


    dates.forEach(date => {

        const article =
            document.createElement("article");

        article.className =
            "diary-entry";


        const top =
            document.createElement("div");

        top.className =
            "entry-top";


        const dateElement =
            document.createElement("span");

        dateElement.className =
            "entry-date";

        dateElement.textContent =
            date;


        const deleteButton =
            document.createElement("button");

        deleteButton.className =
            "delete-entry";

        deleteButton.textContent =
            "DELETE";


        deleteButton.addEventListener(
            "click",
            () => {

                const entries =
                    loadEntries();

                delete entries[date];

                saveEntries(entries);

                renderDiary();

                if (date === getTodayKey()) {
                    diaryInput.value = "";
                }
            }
        );


        const text =
            document.createElement("div");

        text.className =
            "entry-text";

        text.textContent =
            entries[date];


        top.appendChild(dateElement);
        top.appendChild(deleteButton);

        article.appendChild(top);
        article.appendChild(text);

        diaryList.appendChild(article);
    });
}


saveDiaryButton.addEventListener(
    "click",
    () => {

        const text =
            diaryInput.value.trim();


        if (!text) {

            saveMessage.textContent =
                "何か書いてみよう。";

            return;
        }


        const entries =
            loadEntries();

        const today =
            getTodayKey();


        entries[today] = text;

        saveEntries(entries);

        renderDiary();


        saveMessage.textContent =
            "SAVED";


        setTimeout(() => {

            saveMessage.textContent = "";

        }, 2000);
    }
);


// --------------------
// INITIALIZE
// --------------------

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


diaryDate.textContent =
    getTodayKey();


loadTodayDiary();
renderDiary();

update();

setInterval(update, 1000);
// --------------------
// QUOTE
// --------------------

function getQuoteIndex() {

    const now = new Date();

    const start =
        new Date(
            now.getFullYear(),
            0,
            0
        );

    const difference =
        now - start;

    const oneDay =
        1000 * 60 * 60 * 24;

    const dayOfYear =
        Math.floor(
            difference / oneDay
        );

    return dayOfYear % quotes.length;
}


function updateQuote() {

    const index =
        getQuoteIndex();

    const quote =
        quotes[index];

    document.getElementById(
        "quoteEnglish"
    ).textContent =
        `“${quote.en}”`;

    document.getElementById(
        "quoteJapanese"
    ).textContent =
        quote.ja;

    document.getElementById(
        "quoteAuthor"
    ).textContent =
        `— ${quote.author}`;

    document.getElementById(
        "quoteDate"
    ).textContent =
        formatDate(new Date());
}

updateQuote();

// --------------------
// DAILY PROBLEM
// --------------------

function getProblemIndex() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const difference = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(difference / oneDay);

    return dayOfYear % problems.length;
}

function updateProblem() {
    const problem = problems[getProblemIndex()];

    document.getElementById("problemCategory").textContent =
        problem.category;

    document.getElementById("problemQuestion").textContent =
        problem.question;

    document.getElementById("problemAnswer").textContent =
        "答え： " + problem.answer;

    document.getElementById("problemSolution").textContent =
        problem.solution;

    document.getElementById("problemDate").textContent =
        formatDate(new Date());

    document.getElementById("problemAnswer").style.display = "none";
    document.getElementById("problemSolution").style.display = "none";

    document.getElementById("answerToggle").textContent =
        "SHOW ANSWER";

    document.getElementById("solutionToggle").textContent =
        "SHOW SOLUTION";
}

document.getElementById("answerToggle").addEventListener("click", () => {
    const answer = document.getElementById("problemAnswer");
    const button = document.getElementById("answerToggle");

    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.textContent = "HIDE ANSWER";
    } else {
        answer.style.display = "none";
        button.textContent = "SHOW ANSWER";
    }
});

document.getElementById("solutionToggle").addEventListener("click", () => {
    const solution = document.getElementById("problemSolution");
    const button = document.getElementById("solutionToggle");

    if (solution.style.display === "none") {
        solution.style.display = "block";
        button.textContent = "HIDE SOLUTION";
    } else {
        solution.style.display = "none";
        button.textContent = "SHOW SOLUTION";
    }
});

updateProblem();