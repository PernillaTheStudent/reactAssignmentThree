export const letterFrequency = (phrase) => {
    // make a frequency object
    let frequency = {};
    for (let letter of phrase) {
        // check if letter exists in frequency
        if (letter in frequency) {
            // if it exists increment the value by +1
            frequency[letter] += 1;
        } else {
            // otherwise, set the value the 1
            frequency[letter] = 1;
        }
    }
    return frequency
}