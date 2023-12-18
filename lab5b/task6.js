function isPalind(str) {
    str = str.toString();
    return str === str.split('').reverse().join('');
}

function calculate6() {
    const inputElement = document.getElementById('numberInput6');
    const resultElement = document.getElementById('result6');
    const inputValue = inputElement.value;

    if (inputValue === '') {
        alert('Введіть числові значення');
        return;
    }

    if (isPalind(inputValue)) {
        resultElement.textContent = 'Число є паліндромом';
    } else {
        resultElement.textContent =  'Число не є паліндромом';
    }
}