const str = "abckba";
function isPalindrome(str) {
  if (str.length === 0) return true;
  let first = str[0];
  let last = str[str.length - 1];
  if (first === last) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

console.log(isPalindrome(str));
