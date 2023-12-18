document.addEventListener('DOMContentLoaded', function() {
    const sourceText = document.getElementById('source-text');
    const resultText = document.getElementById('result-text');
    const convertButton = document.getElementById('go');

    convertButton.addEventListener('click', function() {
        const inputText = sourceText.value;
        const convertedText = convertToImages(inputText);
        resultText.innerHTML = convertedText;
    });

    function convertToImages(text) {

        let convertedText = '';
        for (var i = 0; i < text.length; i++) {
            const char = text[i] ;
            
            if ((char >= 'a' && char <= 'z')) {
                imagePath = 'images/small_' + char.toLowerCase() + '.png';
                convertedText += '<img src="' + imagePath + '" alt="' + char + '">';
    
           
            }else if  ((char >= 'A' && char <= 'Z')){
                imagePath = 'images/' + char + '.png';
                convertedText += '<img src="' + imagePath + '" alt="' + char + '">';
            
            

            } else {
                convertedText += text[i];
                
        }

        }
        return convertedText;
    }
    
});
