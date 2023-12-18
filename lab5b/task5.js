function calculate4() {
    const A3 = parseFloat(document.getElementById('A3').value);
    const B3 = parseFloat(document.getElementById('B3').value);
    const C3 = parseFloat(document.getElementById('C3').value);
    const radius = parseFloat(document.getElementById('radius').value);
  
    if (A3 && B3 && C3 && radius) {
      const s = (A3 + B3 + C3) / 2;
      const triangleArea = Math.sqrt(s * (s - A3) * (s - B3) * (s - C3));
      document.getElementById('result5').innerText =`Площа трикутника: ${triangleArea.toFixed(2)}`;
    } else {
      alert('Введіть числові значення!');
    }
}