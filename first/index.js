const calcutaionpart = document.getElementById("calcutaionpart");
const h1showingcal = document.getElementById("h1showingcal");
const totalvkt = document.getElementById("totalvkt");

calcutaionpart.addEventListener("click", (e) => {

    if (
        e.target.tagName === "BUTTON" &&
        e.target.innerText !== "=" &&
        e.target.innerText !== "AC"
    ) {
        h1showingcal.innerText += e.target.innerText;
    }

        if (e.target.innerText === "AC") {
    h1showingcal.innerText = "";
    totalvkt.innerText = "";
             }

    const expression = h1showingcal.innerText;

    if (e.target.innerText === "=") {

        if (expression.includes("+")) {
            const parts = expression.split("+");
            const num1 = Number(parts[0]);
            const num2 = Number(parts[1]);
            const total = num1 + num2;
            totalvkt.innerHTML = total;
        }

        if (expression.includes("-")) {
            const parts = expression.split("-");
            const num1 = Number(parts[0]);
            const num2 = Number(parts[1]);
            const total = num1 - num2;
            totalvkt.innerHTML = total;
        }

        if (expression.includes("*")) {
            const parts = expression.split("*");
            const num1 = Number(parts[0]);
            const num2 = Number(parts[1]);
            const total = num1 * num2;
            totalvkt.innerHTML = total;
        }

        if (expression.includes("/")) {
            const parts = expression.split("/");
            const num1 = Number(parts[0]);
            const num2 = Number(parts[1]);
            const total = num1 / num2;
            totalvkt.innerHTML = total;
        }
    }

});