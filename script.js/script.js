{
    const currentNumber = document.querySelector(".js-currentNumber");
    const previousNumber = document.querySelector(".js-previousNumber");
    const mathSign = document.querySelector(".js-mathSign");
    const numberButtons = document.querySelectorAll(".js-numberButtons");
    const operationButtons = document.querySelectorAll(".js-operation");
    const equalsButton = document.querySelector(".js-equals");
    const clearButton = document.querySelector(".js-clear");

    let result = "";

    operationButtons.forEach((button) => button.addEventListener("click", operate))
    equalsButton.addEventListener("click", showResult)
    clearButton.addEventListener("click", clearScrean)
    numberButtons.forEach((button) => button.addEventListener("click", displayNumbers))

    function displayNumbers() {
        if (this.textContent === "," && currentNumber.innerHTML.includes(",")) return;
        if (this.textContent === "," && currentNumber.innerHTML === "") return currentNumber.innerHTML = "0,";

        currentNumber.innerHTML += this.textContent;
    }

    function operate() {

    }

    function showResult() {

    }

    function clearScrean() {

    }
}