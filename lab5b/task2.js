function calculate2() {
    const A2 = parseFloat(document.getElementById('A2').value);
    const B2 = parseFloat(document.getElementById('B2').value);
    const angle = parseFloat(document.getElementById('angle').value);

    if (isNaN(A2) || isNaN(B2) || isNaN(angle)) {
        alert('Bведіть числові значення!');
        return;
    }

    const radians = (angle * Math.PI) / 180;
    const area = 0.5 * A2 * B2 * Math.sin(radians);

    document.getElementById('result2').innerHTML = `Площа трикутника: ${area.toFixed(2)}`;
    
}