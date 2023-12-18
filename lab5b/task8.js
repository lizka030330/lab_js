function fibonacci(f) {
    if (f === 1 || f === 2) {
        return 1;
    } else {
        let a = 1, b = 1, temp;
        for (let i = 3; i <= f; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

function calculate8() {
    const position = document.getElementById('fibInput').value;

    if (isNaN(position) || position <= 0 || !Number.isInteger(Number(position))) {
        alert('Введіть числові значення');
        return;
    }
    const result = fibonacci(position);
    document.getElementById('result8').innerText = `Число з послідоності ${result}`;
}

