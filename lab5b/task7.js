function isAnag(word1, word2) {
    const sortedWord1 = word1.split("").sort().join("");
    const sortedWord2 = word2.split("").sort().join("");

    return sortedWord1 === sortedWord2;
}

function calculate7() {
    const word1 = document.getElementById("word1").value.toLowerCase();
    const word2 = document.getElementById("word2").value.toLowerCase();
    const isAnagram = isAnag(word1, word2);

    const resultElement = document.getElementById("result7");
    resultElement.innerHTML = isAnagram ? "Анаграма" : "Не анаграма";
}

