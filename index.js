function checkPalindrome(num) {
  let temp = num;
  let sum = 0;
  while(temp > 0) {
    let digit = temp % 10;
    sum = sum * 10 + digit;
    temp = temp / 10;
  }
  if(temp === sum) {
    console.log(num, " is palindrome");
  } else {
    console.log(num, " is palindrome");
  }
}

checkPalindrome(123);
checkPalindrome(64546);













