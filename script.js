function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function appendToResult(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value) || "";
    } catch (error) {
        result.value = "Error";
    }
}
