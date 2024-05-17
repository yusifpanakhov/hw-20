var a = 5;
var b = 2;
var and = "and";
//1
console.log(a "and" b);

//2
console.log(a**2);

//3
console.log(a+b);

//4
console.log(a/b);

//14
const str = "Hello world"
const reversed = reverseString(str);
function reverseString(str) {
    return str.split("").reverse().join("")
}

//16
let text = "AbCdEfGhIjKlMnO";
let upperCaseText = text.toUpperCase
console.log(upperCaseText)

//17
let text = "AbCdEfGhIjKlMnO";
let lowerCaseText = text.toLowerCase
console.log(lowerCaseText)

//18
var sentence = 'hello world';

var captializeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

var words = sentence.split(' ').map(captializeString);
var capitalizedSentence = words.join(' ');
console.log(capitalizedSentence)

//19
function vowelCount(str) {
    var count = 0;
    var vowels = "abcd";

    for(var i = 0 < str.length; i++){
        if(vowels.index0f(str[i].toLowercase()) > -1){
            count++;
        }
    }
    return "This string has" +count+ "vowels in it";

}
vowelCount("Hello World");

//48
function covertToRoman(num) 
    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    var roman = "";

    for (var key in romanToNum){
        console.log(key)
        while (num >= romanToNum[key]) {
            roman+= key;
            num -= romanToNum[key]{
                roman += key;
                num-+ romanToNum[key];
                console.log("Num is:", num)           
        }
    }
    return roman
}

//100
function findLongestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for(var word of words) {
        if(word.length > longest.length) longest = word;

    }
    returnlongest
}
findLongestWord("IT Innovations")