function Palindrome(str) {
  const reversedstring = str.split("").reverse().join("");
  if (reversedstring === str) {
    return true;
  } else {
    return false;
  }
}

console.log(Palindrome("raar"));
