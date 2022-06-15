
  function isPalindrome(word) {
    // Reversed string variable 
    let reversed = word.split('').reverse().join('')
    // If statement to chack if true or fale
    if(reversed === word) {return true
  
    }else return false
    
  }
  // Call function to get result true or false
  isPalindrome('racecar')


/* 
  Reverse string 
*/

/*
  isPalindrome takes in a string. 
   Create a variable that reverses the string.
   If the variable is the same backwards, it returns true.
   Else the variable will be false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("toy"));
}

console.log("Expecting: true");
console.log("=>", isPalindrome("eye"));



module.exports = isPalindrome;
