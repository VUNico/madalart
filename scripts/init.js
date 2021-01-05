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

function paintTopic(element, topics, matchedObj) {
    const input = element.querySelector("input");
    const label = element.querySelector("label");    
    input.classList.add(HIDDEN_CN);
    label.classList.add(SHOWING_CN);
    label.innerText = topics.find(matchedObj).text;
}

function loadTopic(element) {
    const lsTopic = localStorage.getItem(TOPIC_LS);
    const parsed = JSON.parse(lsTopic);
    const matchedObj = (obj) => obj.id === element.id;
    if (parsed.some(matchedObj)) {
        paintTopic(element, parsed, matchedObj);
    } else {
        setTopic(element);
    }
}

function init() {
    form.forEach(element => loadTopic(element));
}

init();