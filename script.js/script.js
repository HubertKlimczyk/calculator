{
    const currentNumber = document.querySelector(".js-currentNumber");
    const previousNumber = document.querySelector(".js-previousNumber");
    const mathSign = document.querySelector(".js-mathSign");
    const numberButtons = document.querySelectorAll(".js-numberButtons");
    const operationButtons = document.querySelectorAll(".js-operation");
    const equalsButton = document.querySelector(".js-equals");
    const clearButton = document.querySelector(".js-clear");
    const backspaceButton = document.querySelector(".js-backspace");

    let result = "";

    operationButtons.forEach((button) => button.addEventListener("click", operate))
    equalsButton.addEventListener("click", showResult)
    clearButton.addEventListener("click", clearScrean)
    numberButtons.forEach((button) => button.addEventListener("click", displayNumbers))
    backspaceButton.addEventListener("click", backspace)

    function displayNumbers() {
        if (this.textContent === "," && currentNumber.innerHTML.includes(",")) return;
        if (this.textContent === "," && currentNumber.innerHTML === "") return currentNumber.innerHTML = "0,";

        currentNumber.innerHTML += this.textContent;
    }

    function operate() {
        if (currentNumber.innerHTML === "" && this.textContent === "-") {
            currentNumber.innerHTML = "-";
            return;
        }
        if (currentNumber.innerHTML === "" && this.textContent === "+/-") {
            currentNumber.innerHTML = "-";
            return;
        } else if (currentNumber.innerHTML === "-" && this.textContent === "+/-") {
            currentNumber.innerHTML = "";
            return;
        }
    }

    function showResult() {

    }

    function clearScrean() {
        if (currentNumber.toString().length > 0) {
            currentNumber.innerHTML = "";
            return;
        }
    }

    function backspace() {
        let currentNumberText = currentNumber.innerHTML;
        if (currentNumberText.length > 0) {
            currentNumberText = currentNumberText.slice(0, -1);
            currentNumber.innerHTML = currentNumberText;
        }
    }
}