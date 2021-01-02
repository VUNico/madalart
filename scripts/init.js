const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
label = document.querySelector("h4");

const TOPIC_LS = "topic",
SHOWING_CN = "showing",
HIDDEN_CN = "hidden";

function setTopic() {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const currentValue = input.value;
        localStorage.setItem(TOPIC_LS, currentValue);
        paintTopic(currentValue);
    })
}

function paintTopic(text) {
    form.classList.add(HIDDEN_CN);
    label.classList.add(SHOWING_CN);
    label.innerText = text;
}

function loadTopic() {
    const topic = localStorage.getItem(TOPIC_LS);
    if (topic === null) {
        setTopic();
    } else {
        paintTopic(topic);
    }
}

function init() {
    loadTopic();
}

init();