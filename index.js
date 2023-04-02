

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/*
  Add your pseudocode here
  if the input is the same as the reversed input
    return true;
    else
       return false;
*/

/*
  Add written explanation of your solution here
  That means if the word is the same as the word in reverse, I should return true. if not false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
