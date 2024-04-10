{
    const currentNumber = document.querySelector(".js-currentNumber");
    const previousNumber = document.querySelector(".js-previousNumber");
    const mathSign = document.querySelector(".js-mathSign");
    const numberButtons = document.querySelectorAll(".js-numberButtons");
    const operationButtons = document.querySelectorAll(".js-operation");
    const equalsButton = document.querySelector(".js-equals");
    const clearButton = document.querySelector(".js-clear");
    const backspaceButton = document.querySelector(".js-backspace");
    const clearCurrentNumberButton = document.querySelector(".js-clearCurrentNumber");

    let result = "";

    operationButtons.forEach((button) => button.addEventListener("click", operate))
    equalsButton.addEventListener("click", showResult)
    clearButton.addEventListener("click", clearScrean)
    numberButtons.forEach((button) => button.addEventListener("click", displayNumbers))
    backspaceButton.addEventListener("click", backspace)
    clearCurrentNumberButton.addEventListener("click", clearCurrentNumber)

    function displayNumbers() {
        if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
        if (this.textContent === "." && currentNumber.innerHTML === "") return currentNumber.innerHTML = "0.";

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
        if (mathSign.innerHTML !== "") {
            showResult();
        }
        previousNumber.innerHTML = currentNumber.innerHTML;
        mathSign.innerHTML = this.textContent;
        currentNumber.innerHTML = "";
    }

    function showResult() {
        if (mathSign.innerHTML === "") return;
        let a = Number(currentNumber.innerHTML);
        let b = Number(previousNumber.innerHTML);
        let operator = mathSign.innerHTML;

        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = b - a;
                break;
            case "x":
                result = a * b;
                break;
            case "/":
                result = b / a;
                break;
            case "x^2":
                result = b ** 2;
                break;
            case "2pX":
                result = Math.sqrt(b);
                break;
            case "1/x":
                result = 1 / b;
                break;
            case "x^":
                result = b ** a;
                break;
        }

        currentNumber.innerHTML = result;
        previousNumber.innerHTML = "";
        mathSign.innerHTML = "";
    }

    function clearScrean() {
        currentNumber.innerHTML = "";
        mathSign.innerHTML = "";
        previousNumber.innerHTML = "";
        return;
    }

    function backspace() {
        let currentNumberText = currentNumber.innerHTML;
        currentNumberText = currentNumberText.slice(0, -1);
        currentNumber.innerHTML = currentNumberText;
        return;
    }

    function clearCurrentNumber() {
        currentNumber.innerHTML = "";
        return;
    }
}