const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = ["Jan", "Feb", "Mar", "Apr", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (e) => {
    const html = document.querySelector('html')

    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = "Dark Mode"
    } else {
    html.classList.add('dark');
    e.target.innerHTML = "Light Mode";
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()