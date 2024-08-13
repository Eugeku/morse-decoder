const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let letters = expr.match(/.{1,10}/g);
    console.log("letters:");
    
    letters = letters.map(str => str.replace(/^0*/, '')); // 10101010
    console.log(letters);

    // 10101010
    letters = letters.map(str => {
        let dots = str.match(/.{1,2}/g); // [10, 10, 10, 10]

        console.log("dots before:");
        console.log(dots);

        // [10, 10, 10, 10]
        dots = dots.map(element => {
            if (element == "10") { element = "." }  // 10 
            if (element == "11") { element = "-" }  // 11
            console.log(element);
            return element;
        });
        console.log("dots after:");
        console.log(dots);

        dots = dots.join("");

        console.log("dots after as string:");
        console.log(dots);
        return dots;
    });

    letters = letters.map(str => {
        if (str == "**********") { str = " " }
        if (str in MORSE_TABLE) { str = MORSE_TABLE[str] }
        return str;
    }).join("");

    console.log("letters encoding string:");
    console.log(letters);
    console.log("__________________________________________");
    return letters;
}

module.exports = {
    decode
}