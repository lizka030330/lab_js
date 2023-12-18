function calculate1() {
    const A1 = parseFloat(document.getElementById('A1').value);
    const B1 = parseFloat(document.getElementById('B1').value);
    const C1 = parseFloat(document.getElementById('C1').value);

    if (isNaN(A1) || isNaN(B1) || isNaN(C1)) {
        alert('Введіть числові значення');
        return;
    }

    const s = (A1 + B1 + C1) / 2;
    const area = Math.sqrt(s * (s - A1) * (s - B1) * (s - C1));

    if (!isNaN(area)) {
        document.getElementById('result1').innerHTML = `Площа трикутника: ${area.toFixed(2)}`;
    } 
 }

