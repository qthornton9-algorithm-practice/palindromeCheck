// Checks if string is a palindrome
function palindromeTest(str){
  var newStr="";
  for(var i = str.length-1; i >= 0; i--){
    console.log(i);
    newStr += str[i];
    console.log(newStr);
  }
  if(str == newStr){
    console.log("String is a palindrome.");
    console.log(str, newStr);
    return str == newStr;
  }
  else{
    console.log("String is not a palindrome.");
    console.log(str, newStr);
    return str == newStr;
  }
}
palindromeTest("racecar");