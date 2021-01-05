const form = document.querySelectorAll(".js-form");

const TOPIC_LS = "topic",
SHOWING_CN = "showing",
HIDDEN_CN = "hidden";

const topics = [];

function handleSubmit(event, element) {
    const input = element.querySelector("input");
    const currentValue = input.value;
    const topicObj = {
        text:currentValue,
        id:element.id
    }
    event.preventDefault();
    topics.push(topicObj);
    localStorage.setItem(TOPIC_LS, JSON.stringify(topics));
    paintTopic(topics, element);
}

function setTopic(element) {
    element.addEventListener("submit", handleSubmit);
}

function paintTopic(text, element) {
    const parsed = JSON.parse(text);
    const matchedObj = (obj) => obj.id === element.id;
    if (parsed.some(matchedObj)) {
        const input = element.querySelector("input");
        const label = element.querySelector("label");    
        input.classList.add(HIDDEN_CN);
        label.classList.add(SHOWING_CN);
        label.innerText = parsed.find(matchedObj).text;
    } else {
        setTopic(element);
    }
}

function loadTopic(element) {
    const lsTopic = localStorage.getItem(TOPIC_LS);
    paintTopic(lsTopic, element);
}

function init() {
    form.forEach(element => loadTopic(element));
}

init();