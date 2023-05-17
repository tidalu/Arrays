

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




/// /////////////////////////\/
// ======================////\/
//==        split()       =//\/
// ======================////\/
/////////////////////////////\/




/// /////////////////////////\/
// ======================////\/
//==      includes()      =//\/
// ======================////\/
/////////////////////////////\/




/// /////////////////////////\/
// ======================////\/
//==      startsWith()    =//\/
//==      endsWith()      =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==      concat()        =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==      repeat()        =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==        trim()        =//\/
//==      trimStart()     =//\/
//==      trimEnd()       =//\/
// ======================////\/
/////////////////////////////\/






/// /////////////////////////\/
// ======================////\/
//==       padStart()     =//\/
//==       padEnd()       =//\/
// ======================////\/
/////////////////////////////\/





/// /////////////////////////\/
// ======================////\/
//==   localeCompare()    =//\/
// ======================////\/
/////////////////////////////\/




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