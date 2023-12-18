function fibNumber(n) {
    let a = 0;
    let b = 1;

    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === n;
}

function calculate9() {
    const inputElement = document.getElementById("numberInput9");
    const resultElement = document.getElementById("result9");

    const inputValue = parseInt(inputElement.value);

    if (!isNaN(inputValue)) {
        if (fibNumber(inputValue)) {
            resultElement.textContent = ` Число належить Фібаначі`;
        } else {
            resultElement.textContent = ` Число не належить Фібаначі`;
        }
    } else {
        alert('Введіть числові значення');
        return;
    }
}