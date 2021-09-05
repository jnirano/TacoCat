//1. Get our user input from the page/html
function getValue(){

   //Make sure the alert is visible
   document.getElementById("alert").classList.add("invisible");

   //get user string for the page
   let userString = document.getElementById("userString").value;

   //Check for a palindrome
   let returnObj = checkForPalindrome(userString);

   //Display out message to the screen
   displayMessage(returnObj);
}

//2. Check if string is a palindrome
function checkForPalindrome(userString){
   //Convert string to lowercase
   userString = userString.toLowerCase();

   //Remove spaces and special characters: Using Regex
   let regex = /[^a-z0-9]/gi;
   userString = userString.replace(regex,"");

   //Reverse the string
   let revString = []; //array
   let returnObj = {}; //Oject

  for (let index = userString.length - 1; index >= 0; index--) {
     revString += userString[index];  
  }

  //Check if userString === revString
  if (revString == userString) {
     returnObj.msg = "Congratulations !! You successfully entered a palindrome!"
  } 
  else {
     returnObj.msg = "Sorry!!! You did not entered a palindrome."
  }
  returnObj.reverse = userString;

  return returnObj;
}

//3. Display a message to the screen
function displayMessage(returnObj) {
   
   document.getElementById("alertHeader").innerHTML = returnObj.msg;
   document.getElementById("msg").innerHTML = `Your phrase reverse is: ${returnObj.reverse}`;
   document.getElementById("alert").classList.remove("invisible");
}