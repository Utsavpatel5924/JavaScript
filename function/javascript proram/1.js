// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

// function rev(y){
//     return  y.toString().split('').reverse().join('');
// }
// console.log(rev(2123453));
// console.log(typeof(rev));


// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.




 
//3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox'


// function upper(string){
//     let array=string.split(' ');
//     let Newarray=[];
//     for(let x =0; x<array.length; x++){
//         Newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//     }
//     return Newarray.join(' ');
// }
// console.log(upper('the quick brown fox'));


//4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
//Example string : 'Web Development Tutorial'
//Expected Output : 'Development'

let string = "Web Development Tutorial ";

function Longest() {

    let arr = string.split(" ");
    let length = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
            word = arr[i];

        }
    }
    console.log(word);
}
Longest(string);

// 5. Write a JavaScript function that checks whether a number is perfect.
// let x = 8128;
// let num = 0;
// function PerfectNumber() {
//     for (let i = 1; i < x; i++) {

//         if (x % i === 0) {
//             num = num + i;
//         }
//     }
//     if (num == x) {
//         console.log("This Number Is Perfect..")
//     }
//     else {
//         console.log("This Number Is Not Perfect.");
//     }
// }
// PerfectNumber(x);

