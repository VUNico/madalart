const form = document.querySelectorAll(".js-form");

const TOPIC_LS = "topic",
SHOWING_CN = "showing",
HIDDEN_CN = "hidden";

function handleSubmit(event, element) {
    const input = element.querySelector("input");
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem(TOPIC_LS, currentValue);
    paintTopic(currentValue);
}

function setTopic(element) {
    element.addEventListener("submit", handleSubmit);
}

function paintTopic(text, element) {
    const input = element.querySelector("input");
    const label = element.querySelector("label");    
    input.classList.add(HIDDEN_CN);
    label.classList.add(SHOWING_CN);
    label.innerText = text;
}

function loadTopic(element) {
    const topic = localStorage.getItem(TOPIC_LS);
    if (topic === null) {
        setTopic(element);
    } else {
        paintTopic(topic, element);
    }
}

function init() {
    form.forEach(element => loadTopic(element));
}

init();