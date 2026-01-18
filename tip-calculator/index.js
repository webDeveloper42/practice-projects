import { calculateTotal } from "./app.js";

const form = document.querySelector(".form")
const form_span = form.querySelector(".form_total-num");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const total = calculateTotal(num1,num2);
    form_span.innerHTML = `$${total}`;
})

