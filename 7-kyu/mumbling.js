/* 
Description:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	return s
    .toLowerCase()
    .split('')
    .map((item, index) => {    
      let newArr = new Array(index+1).fill(item);
      let newString = newArr.join('');     
      return newString[0].toUpperCase() + newString.slice(1) + '-';
    })
    .join('')
    .slice(0, -1);
}

/*
The shorter solution:

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
*/
