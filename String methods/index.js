

/// /////////////////////////\/
// ======================////\/
//==        charAt()      =//\/
// ======================////\/
/////////////////////////////\/


//The charAt() method of String values returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

// syntax 
// string.charAt(index)

const sentense = 'The quick brown for jumps over the lazy  dog';

const index = 4;

console.log(`the character at index ${index} is ${sentense.charAt(index)}`);

// examples

// displaying characters at different locations in string

const anyString = "Brave new world";
console.log(`The character at index 0 is '${anyString.charAt()}'`);

// if there is not index default is zero

console.log(`The character at index 0 is '${anyString.charAt(0)}'`);
console.log(`The character at index 1 is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`); // ''


// getting whole characters 

const str = "A\uD87E\uDC04Z";  // we could also use a non-BMP character directly

for (let i = 0; i < str.length; i++) {
    let chr;
    [chr, i] = getWholeCharAndI(str, i);
    console.log(chr);
}

function getWholeCharAndI(str, i) {
    const code = str.charCodeAt(i);

    if (Number.isNaN(code)) {
        return ""; // Position not found
    }
    if (code < 0xd800 || code > 0xdfff) {
        return [str.charAt(i), i]; // Normal character, keeping 'i' the same
    }

    // High surrogate (could change last hex to 0xDB7F to treat high private
    // surrogates as single characters)
    if (0xd800 <= code && code <= 0xdbff) {
        if (str.length <= i + 1) {
            throw new Error("High surrogate without following low surrogate");
        }
        const next = str.charCodeAt(i + 1);
        if (next < 0xdc00 || next > 0xdfff) {
            throw new Error("High surrogate without following low surrogate");
        }
        return [str.charAt(i) + str.charAt(i + 1), i + 1];
    }

    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
    if (i === 0) {
        throw new Error("Low surrogate without preceding high surrogate");
    }

    const prev = str.charCodeAt(i - 1);

    // (could change last hex to 0xDB7F to treat high private surrogates
    // as single characters)
    if (prev < 0xd800 || prev > 0xdbff) {
        throw new Error("Low surrogate without preceding high surrogate");
    }

    // Return the next character instead (and increment)
    return [str.charAt(i + 1), i + 1];

}
// fixing charAt() to support non-Basic-Multilingual-Plane(BMP) characters

function fixedChatAt(str, idx) {
    str = String(str);

    const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

    while (surrogatePairs.exec(str) !== null) {
        const lastIndex = surrogatePairs.lastIndex;
        if (lastIndex - 2 < idx) {
            idx++;
        }else {
            break;
        }
    }

    if(idx >= str.length || idx < 0) {
        return "";
    }

    let ret = str.charAt(idx);

    if(
        /[\uD800-\uDBFF]/.test(ret) &&
        /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))
    ) {
        // go further, since one of the 'characters' is part of a surrogate pair 
        ret += str.chatAt(idx + 1);
    }
    return ret;
}

/// /////////////////////////\/
// ======================////\/
//==        indexOf()     =//\/
//==      LastIndexOf()   =//\/
// ======================////\/
/////////////////////////////\/

// string.indexOf(searchString);
// string.indexOf(searchString, position);



const paragraph = 'The quick brown for jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "$searchTerm}" from the beginning is ${indexOfFirst}`);

// the index of the first occurance of the search term


console.log(`The index of the second "$(searchTerm}" from the beginning is ${paragraph.lastIndexOf(searchTerm, (indexOfFirst) + 1)}`);

//  return value when using an empty search string


console.log("hello world".indexOf("")); //
console.log("hello World".indexOf("", 0)); //
console.log(("hello world".indexOf("", 3))); //
console.log("hello World".indexOf("", 8)); //

// if empty string is given to search and if position is also give : as a index given position is returned , or if position is not given 0 will be returned
// or if somehow given position is greater than the length of the string, length of the string will be returned

"hello world".indexOf("", 11);  // returns 11
"hello world".indexOf("", 13);  // returns 11
"hello world".indexOf("", 22); // returns 11


// description 

console.log("blue whale".indexOf("blue")); // 0
console.log("blue whale".indexOf("bluer")); // -1
console.log("blue whale".indexOf("whale", 5)); // 5
console.log("blue whale".indexOf("whale", 7)); // -1
console.log("blue whale".indexOf("")); // 0
console.log("blue whale".indexOf("", 9)); // 9
console.log("blue whale".indexOf("", 11)); // 11
console.log("blue whale".indexOf("", 12)); // 12


// indexOf() method is case sensitive. For example, the following expressing returns -1;

console.log("Blue whale".indexOf("blue")); // returns -1

// checking occurance 

console.log("Blue whale".indexOf("Blue") !== -1); //
console.log("Blue whale".indexOf("Bloe") !== -1); // false

// Examples

// using indexOf();

const str1 = "Brave new world";

console.log(str1.indexOf('w')); // 8
console.log(str1.indexOf("new")); // 6

// indexOf() and case-sensitivity

const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); //  -1

// indexOf() ot count occurrences of a letter in a string


const str3 = "To be, or not to bem that is the question.";

let count = 0;
let position = str3.indexOf("e");

while(position !== -1) {
    count++;
    position = str3.indexOf("e", position + 1);

}

// last index of returns the last occurance of the search term


// syntax 
// string.lastIndexOf(searchString);
// string.lastIndexof(searchString, position);


console.log(count); // 4

const paragraph1 = 'The quick brown for jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm4 = 'dog';

console.log(`The index of first "${searchTerm4}" from the beginning is ${paragraph1.lastIndexOf(searchTerm4)}`);

console.log(`The index of first "${searchTerm4}" from the beginning is ${paragraph1.indexOf(searchTerm4)}`);



// description 

console.log('Canal'.lastIndexOf('a')); // 3
console.log('Canal'.lastIndexOf('a', 2)); // 1
console.log('Canal'.lastIndexOf('a', 0)); // -1
console.log('Canal'.lastIndexOf('x')); // -1
console.log('canal'.lastIndexOf('c', 0)); // 0
console.log('canal'.lastIndexOf('')); // 5
console.log('canal'.lastIndexOf('', 2)); // 2


// case-sensitivity

console.log("Blue whale, Killer Whale".lastIndexOf("blue")); // -1

// using indexOf() and lastIndexOf();

const anyString1 = "Brave, Brave New World";

console.log(anyString1.indexOf("Brave")); // 0
console.log(anyString1.lastIndexOf("Brave")); // 7



/// /////////////////////////\/
// ======================////\/
//==        slice()       =//\/
//==      substring()     =//\/
// ======================////\/
/////////////////////////////\/


// slice

// syntax

// string.slice(indexStart)
// string.slice(indexStart, indexEnd)


// 
const str4 = 'The quick brown fox jumps over the lazy dog.';

console.log(str4.slice(31)); // "the lazy dog."
// slice cuts from the position given to the end of the string or somehow if end is given, it will cut between,

console.log(str4.slice(4, 19)); // from index 4 till 19

console.log(str4.slice(-4)); // if somehow position is -4 it will count from the end, kinda reverse counting
// dog.

console.log(str4.slice(-9, -5)); // from index -9 till -5
// lazy

// using slice() to create a new string

const str5 = 'The morning is upon us.';  // length is 23
const str6 = str5.slice(1, 8);
console.log(str6);
const str7 = str5.slice(4, -2); 
console.log(str7);
const str8 = str5.slice(12);
console.log(str8);
console.log(str5.slice(30)); // when the position is given larger than the length of the string, return value is empty string
// ""

// using slice() with negative indexes

const str9 = 'The morning is upon us.';
str.slice(-3); // us.
str9.slice(-3, -1); // us
str9.slice(0, -1); // The morning is upon us
str9.slice(4, -1); // orning is upon us


console.log(str9.slice(-11, 16)); // "is u"

console.log(str9.slice(11, -7)); // 'is u'

console.log(str9.slice(-5, -1)); // "n us"

////////////////////////////////////////////

// substring()

// string.substring(indexStart)
// string.substring(indexStart, indexEnd)

// returns the part of the string from the start index up to and excludinbg the end index, or to the nd of the string if no end index is supplied

const str10 = 'Mozilla';

console.log(str10.substring(1, 3)); // oz

console.log(str10.substring(2)); // zilla


// using substring()

const str11 = 'Mozilla';
console.log(str11.substring(0, 1)); // M
console.log(str11.substring(1, 0)); // M

console.log(str11.substring(0, 6)); // Mozill

console.log(str11.substring(4)); // lla

console.log(str11.substring(4, 7)); // lla
console.log(str11.substring(7, 4)); // lla

console.log(str11.substring(0, 7)); // 'Mozilla'
console.log(str11.substring(0, 10)); // 'Mozilla'

//using substring() with length property

const text = 'Mozilla';

console.log(text.substring(text.length - 4)); //illa  is such position is give the last 4 characters of the string

console.log(text.substring(text.length-5)); // zilla


// difference between substring() and substr()

const text1 = 'Mozilla';

console.log(text1.substring(2, 5)); // zil
console.log(text1.substring(2, 3)); // zil

// substr takes start and ends of the index 
// end index starts being counted from the end of the string



// difference between substring() and slice()
// they are almost identical just only the difference is the start and end index( when they are negative)

const text2 = 'Mozilla';
console.log(text2.substring(5, 2)); // 'zil'
// substring, // when the start index is larger than the end index, it swaps the start and end index
console.log(text2.slice(5, 2)); // " "
// when start is larger than the end, it will return empty string

//
// negative numbers 
console.log(text2.substring(-5, 2)); // 'Mo' counts -5 from the end and count 2 
console.log(text2.substring(-5, -2)); // ''


console.log(text2.slice(-5, 2)); // ""
console.log(text2.slice(-5, -2)); // 'zil'

// replacing a substring within a string

// replace all olds with news in the string fulls

function replaceString(oldS, newS, fullS) {
    for(let i = 0; i < fullS.length; ++i) {
        if(fullS.substring(i, i+oldS.length) === oldS) {
            fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
        }
    }
    return fullS;
}

console.log(replaceString("World", "Web", "Brave New World"));


// better method

function replaceStringBetter(oldS, newS, fullS) {
    return fullS.replace(oldS, newS);
}
console.log(replaceStringBetter("World", "Web", "Brave New World"));


/// /////////////////////////\/
// ======================////\/
//==        split()       =//\/
// ======================////\/
/////////////////////////////\/


// string.split(separator)
// string.split(separator, limit)

// returned value : an array of strings, split at each point where the separator occurs in the given string

const text3 = 'The quick brown fox jumps over the lazy dog.';

const words = text3.split(' ');
console.log(words);  // depends on the '' and it's space in it, if there is not space in the string, it will return an array with each letter is array item, if there is space in the ' ' it will return an array with each item separated with space 
console.log(words[3]);

const words1 = text3.split('');

const strCopy =  text3.split();
console.log(strCopy);
// if it is not separated with anything, then it will return whole content, it is like just a shallow copy of the string


// using split()

const emptyString = '';

// if string is empty and separator is not
console.log(emptyString.split('a'));
// ['']

// string and separator are both empty strings
console.log(emptyString.split(emptyString));

function splitString(string2split, separator) {
    const arrayOfStrings = string2split.split(separator);

    console.log("The original string is: " + string2split);
    console.log("The separator is: " + separator);
    console.log(
        "The array has ", 
        arrayOfStrings.length 
        , " elements: ", arrayOfStrings.join('/'),
    );
}

const tempestString = 'Oh brave new world that has such people in it.';
const monthString = "January, February, March, April, May, June, July, August, September, October, November, December";

const space = ' ';
const comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);

// returnig a limited number of splits

const myString1 = "Hello World. How are you doing today?";
const splits1 = myString1.split(" ", 2);

console.log(splits1);


/// /////////////////////////\/
// ======================////\/
//==      includes()      =//\/
// ======================////\/
/////////////////////////////\/

// returns boolean
// does case-sensitive search


// syntax
// string.includes(searchString)
// string.includes(searchString, position)

// position is default 0, ot when  it is given it starts searching from that given position


const sent = "the quick brown fox jumps over the lazy dog.";

const fox = "fox";
console.log(sent.includes(fox)?"yes":"no");
console.log(`The word "${fox}" ${sent.includes(fox)?"is":"is not"} in the sentence`);

// case sensitive
console.log("Blue Whale".includes("blue")); // false
console.log("Blue whale".toLowerCase().includes("blue")); // true

// using includes 

const text4 = "To be, or not to be, that is the question.";

console.log(text4.includes("To be")); 
console.log(text4.includes("question")); 
console.log(text4.includes("nonon")); 
console.log(text4.includes("To be", 1)); 
console.log(text4.includes("TO BE"));
console.log(text4.includes("")); //true




/// /////////////////////////\/
// ======================////\/
//==      startsWith()    =//\/
//==      endsWith()      =//\/
// ======================////\/
/////////////////////////////\/

// startsWith 

// returns boolean 

// case-sensitive

const text5 = 'Saturday night plans';

console.log(text5.startsWith('Sat'));

console.log(text5.startsWith('Sat', 3));

// return value, true if the given characters are found at the beginning of the string, including when searchString is an empty string , otherwise false.

//

const text6 = 'To be, or not to be, that is the question.';
console.log(text6.startsWith('To be'));
console.log(text6.startsWith('not to be'));
console.log(text6.startsWith("not to be", 10));

// endsWith

// syntax
// string.endsWith(searchString)
// string.endsWith(searchString, endPosition)

// just returns boolean and opposite of startsWith


const text7 = 'Cats are the best!';

console.log(text7.endsWith('best!')); // true
console.log(text7.endsWith('best', 17)); // true

const text8 = 'Is this a question?';

console.log(text8.endsWith('question')); // false



/// /////////////////////////\/
// ======================////\/
//==      concat()        =//\/
// ======================////\/
/////////////////////////////\/

// syntax

// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

const text9 = 'Hello';
const text10 = 'World';

console.log(text9.concat(', ', text10));
console.log(text9.concat(' ', text10));

const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

/// /////////////////////////\/
// ======================////\/
//==      repeat()        =//\/
// ======================////\/
/////////////////////////////\/


// syntax

// string.repeat(count)

const mood = 'Happy!';
console.log("I feel " + mood.repeat(4));


// "abc".repeat(-1); // RangeError
// "abc".repeat(0); // ''
// "abc".repeat(1); // 'abc'
// "abc".repeat(2); // 'abcabc'
// "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError

// ({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// // 'abcabc' (repeat() is a generic method)



/// /////////////////////////\/
// ======================////\/
//==        trim()        =//\/
//==      trimStart()     =//\/
//==      trimEnd()       =//\/
// ======================////\/
/////////////////////////////\/


// removes the white space from both sides: returns a new string: without mutating

const greeting = "   Hello World   ";

console.log(greeting.trim());


const text11 ='   foo        ';
console.log(text11.trim().length);
console.log(text11.length);

// trimStart() removes from the lefty side
// trimEnd() removes from the righty side



/// /////////////////////////\/
// ======================////\/
//==       padStart()     =//\/
//==       padEnd()       =//\/
// ======================////\/
/////////////////////////////\/

// syntax 
// string.padstart(targetLength)
// string.padend(targetLength, string)

// puts string or specified target length from the beginning
const text12 = '5';

console.log(text12.padStart(5, '0'));


console.log("abc".padStart(12, "foo"));
console.log("abc".padEnd(12).length);
console.log("abc".padStart(6, "123456")); 
console.log("abc".padStart('abd'));
// if we only give the string, it wont work, 

// fixed width string number conversation

// Javascript version of: (unsigned)
// printf "%0*d" with num


function leftFillNum(num, targetlength) {
    return num.toString().padStart(targetlength, '0');
}

const num = 123;
console.log(leftFillNum(num, 5));

// padEnd()

// syntax

// it is just opposite of the padstart iot add in the end

/// /////////////////////////\/
// ======================////\/
//==   localeCompare()    =//\/
// ======================////\/
/////////////////////////////\/

// syntax

// string.localeCompare(compareString)
// string.localeCompare(compareString, locales)
// string.localCompare(compareString, locales, options)

const  a = 'réservé'; // with accent, lowercase;
const b  = 'RESERVE'; // no accent, uppercase;

console.log(a.localeCompare(b));

// return negative if reference str occurs before comparingString; positive if the reference str occurs after comparingString; 0 of they are equivalent;

console.log("a".localeCompare('c')); // -2 or -1 (or some other negative values) --- the letter 'a' is before 'c' yielding a negative value

//

console.log('check'.localeCompare('against')); // 1 or 2//

// if they are equal, return 0

console.log('a'.localeCompare('a')); // 0

// sort an array

const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));

console.log(items); //


// localle compare is not supported in all browsers, to check

function localeCompareSupportsLocales() {
    try {
        "foo".localeCompare("bar", 'i');
        }  catch(e) {
            return e.name === "RangeError";
            }
        return false;
    }

console.log(localeCompareSupportsLocales());

// numeric sorting

console.log('2'.localeCompare('10')); // 1

console.log("2".localeCompare("10", undefined, { numeric: true }));

console.log("2".localeCompare('10', 'en-u-kn-true' ));


/// /////////////////////////\/
// ======================////\/
//==       search()       =//\/
// ======================////\/
/////////////////////////////\/







/// /////////////////////////\/
// ======================////\/
//==         match()      =//\/
//==       matchAll()     =//\/
// ======================////\/
/////////////////////////////\/






/// /////////////////////////\/
// ======================////\/
//==       replace()      =//\/
//==     replaceAll()     =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==       chaCodeAt()    =//\/
//==     codePointAt()    =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==    fromCharCode()    =//\/
//==    fromCodePoint()   =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==     normalize()      =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==     toLowerCase()    =//\/
//==     toUpperCase()    =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==  toLocaleLowerCase() =//\/
//==  toLocaleUpperCase() =//\/
// ======================////\/
/////////////////////////////\/






/// /////////////////////////\/
// ======================////\/
//==       toString()     =//\/
//==       valueof()      =//\/
// ======================////\/
/////////////////////////////\/







/// /////////////////////////\/
// ======================////\/
//==         raw()        =//\/
// ======================////\/
/////////////////////////////\/