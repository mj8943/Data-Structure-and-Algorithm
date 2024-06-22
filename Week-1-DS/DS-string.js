function converter(str){
    let result = ''
    for(let i=0; i<str.length; i++){
        if(i%2 === 0){
            result += str[i].toUpperCase() // converting
        }else{
            result += str[i].toLowerCase() // converting
        }
    }
    return result;
}

const string = "hello world";


// let answer = converter(string)
// console.log(answer);

// console.log(answer.charAt(3)) // char at that index

// console.log(answer.indexOf("W")) // index of that char

// console.log(answer.substring(0,5)); // slicing

// const newStr = string.split(' ') // in here we can split on the supperation of that string in here space eg: apple,orenge here ","
// console.log(newStr);

// const trimString = '    Yes boss   ';
// console.log(trimString.trim()); // trim the white spaces that not in the middle of words

// console.log(trimString.replace("boss","sir"))  // replacing the word by giving which word want change is in the first condition only one will change

// console.log(string.lastIndexOf("o")) // of a character

// console.log(string.repeat(3)); // give the number of times 

// let answer = string.startsWith(" ") // assign to a variable its a boolean return

// let answer = string.endsWith(" ")

// let answer = string.includes(" ")

// let answer = string.replaceAll("l","k") // change the all char matched

// let answer = string.padStart(15,"5") // number give length want, "want to start char"

// let answer = string.padEnd(15,"i");