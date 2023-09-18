let countEl = document.getElementById("count_el");
let count = 0;

let increment = () => {
    ++count;
    countEl.innerText = count;
}

let decrement = () => {
    --count;
    countEl.innerText = count;
}