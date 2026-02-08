const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const question = document.getElementById("question");

let noClickCount = 0;
let scale = 1;

let userName = prompt("Enter your name 💖") || "Bi"; // default Bi

const noTexts = [
    "No 💔",
    "Are you sure? 😢",
    "Really? 🥺",
    "Last chance 😭",
    "Okay fine... 😵"
];

// Inject name sa question
question.innerText = `${userName}, will you be my Valentine? 💘`;

// Desktop hover
/// noBtn.addEventListener("mouseover", () => {
//    if (window.innerWidth > 768) moveNoButton();
//});

// Mobile tap
noBtn.addEventListener("click", () => {
    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
    }

    scale -= 0.12;
    noBtn.style.transform = `scale(${scale})`;
    noClickCount++;

    if (noClickCount === noTexts.length) {
        setTimeout(() => { noBtn.style.display = "none"; }, 600);
    }
});

// YES button
yesBtn.addEventListener("click", () => {
    question.innerText = `Yay!!! 💖💖💖`;
    message.classList.remove("hidden");
    message.innerHTML = `You just made my day 🥰<br>`;

    startHearts();

    setTimeout(() => typeText(`Wala ka talagang choice bi HAHAHA 😈`), 1000);

    // Redirect after 5 seconds
    setTimeout(() => {
        window.location.href = "date.html"; // palitan sa gusto mong page
    }, 6000);
});

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function startHearts() {
    for (let i = 0; i < 40; i++) createHeart();
    setInterval(createHeart, 250);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

function typeText(text) {
    const span = document.createElement("span");
    span.classList.add("typing");
    message.appendChild(span);

    let i = 0;
    const interval = setInterval(() => {
        span.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            span.classList.remove("typing");
            span.classList.add("shake");
        }
    }, 60);
}
