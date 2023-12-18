function calculate3() {
    const length = document.getElementById('length').value;
    const height = document.getElementById('height').value;
  
    if (isNaN(length) || isNaN(height)) {
      alert('Введіть числові значення');
      return;
    }
  
    const area = 0.5 * length * height;
  
    document.getElementById('result3').innerHTML = 'Площа трикутника: ' + area;
  }