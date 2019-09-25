const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let result='';

    console.log(expr.length);
    console.log(expr[0])
    
    for (let i=0; i<expr.length; i=i+10){
        let codedLetter='';
        let encodedLetter;
        for (let j=i; j<i+10; j=j+2){
                if (expr[j]+expr[j+1]=='10'){
                    codedLetter = codedLetter+".";
                }
                else if (expr[j]+expr[j+1]=='11') {
                    codedLetter = codedLetter+"-";
                }
                else if (expr[j]+expr[j+1]=='**') {
                    encodedLetter = " ";
            }
            console.log(codedLetter);
        }
        if (encodedLetter!=" "){
            encodedLetter = MORSE_TABLE[codedLetter];
        }
        result=result+encodedLetter;
    }
return result;
}

module.exports = {
    decode
}