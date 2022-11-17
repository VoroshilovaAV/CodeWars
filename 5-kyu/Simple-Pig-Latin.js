/* 
Description:
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let arr = str.split(' ');  
    return arr.map((item) => {
      return (item === '!' || item === '?') ? item : item.slice(1) + item[0] + 'ay';    
    }).join(' ');
}
