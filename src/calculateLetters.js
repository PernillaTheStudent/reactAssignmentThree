export const calculateLetters = (phrase) => {
    phrase = phrase.replace(/[^a-zA-Z]/g, " "); // change punctuation to space
    // console.log("step 1", phrase)
    phrase = phrase.replace(/\s+/g, " ").trim();  // consequtive tabs, spaces etc to one space
    // console.log("step 2", phrase)
    const words = phrase.split(" ");
    const numberOfWords = words.length;
    const numberOfCharacters = words.join("").length;

    return { words: numberOfWords, letters: numberOfCharacters };
};
