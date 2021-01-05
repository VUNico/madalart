const form = document.querySelectorAll(".js-form");

const TOPIC_LS = "topic",
SHOWING_CN = "showing",
HIDDEN_CN = "hidden";

const topics = [];

function setTopic(element) {
    element.addEventListener("submit", function(event) {
        event.preventDefault();
        const input = this.querySelector("input");
        const currentValue = input.value;
        const topicObj = {
            text:currentValue,
            id:element.id
        };
        topics.push(topicObj);
        console.log(topics);
        localStorage.setItem(TOPIC_LS, JSON.stringify(topics));
        paintTopic(element, topicObj);
    });
}

function paintTopic(element, obj) {
    const input = element.querySelector("input");
    const label = element.querySelector("label");    
    input.classList.add(HIDDEN_CN);
    label.classList.add(SHOWING_CN);
    label.innerText = obj.text;
}

function loadTopic(element) {
    const lsTopic = localStorage.getItem(TOPIC_LS);
    if (!lsTopic) {
        setTopic(element);
    } else {
        const parsed = JSON.parse(lsTopic);
        const matchedObj = (obj) => obj.id === element.id;
        const foundObj = parsed.find(matchedObj);
        if (foundObj) {
            paintTopic(element, foundObj);
        } else {
            setTopic(element);
        }
    }
}
    

function init() {
    form.forEach(element => loadTopic(element));
}

init();