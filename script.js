const passwordBox = document.getElementById("password");
const length = 12;

//Different characters that are allowed in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase+lowerCase+number+symbol;
//function to generate password
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    //These add random values from each string
    while(length > password.length){ //adds random chars until 12
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}   

//Copy Fnc
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
