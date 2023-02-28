export const calculateLetters = (phrase) => {
    let txt = phrase.split(" ");
    let numberOfWords = txt.length;
    txt = txt.join("");
    let numberOfCharacters = 0;
    for (const letter of txt) {   // Returns ELEMENT
        numberOfCharacters += 1;
    }
    if (numberOfCharacters === 0) {
        numberOfWords = 0;
    }
    return {words: numberOfWords, letters: numberOfCharacters};
}