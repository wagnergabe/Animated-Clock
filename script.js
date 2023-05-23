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
    e.target.innerHTML = "Light Mode"
    }
})