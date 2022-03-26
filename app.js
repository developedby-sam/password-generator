const generateBtn = document.querySelector("button");
const passwordBox = document.querySelector(".password-box");

const UPPERCASE_LIST = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LIST = "abcdefghijklmnopqrst";
const NUMBERS_LIST = "0123456789";
const SYMBOLS_LIST = "!@#$%^&*()~";

// FUNCTIONS
const PasswordGenerator = (listIn, passwordLength) => {
  let password = "";
  for (let indx = 0; indx < passwordLength; indx++) {
    let randomIndx = Math.floor(Math.random() * listIn.length);
    password += listIn.charAt(randomIndx);
  }

  return password;
};

function CopyPassword() {
  const textarea = document.createElement("textarea");
  const password = document.querySelector(".password-box").value;
  console.log(password);

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to the clipboard!");
}

// EVENT LISTENERS
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const passwordLength = document.getElementById("passwordLengthInputId").value;
  const isUppercaseChecked = document.getElementById("uppercaseKeyId").checked;
  const isLowercaseChecked = document.getElementById("lowercaseKeyId").checked;
  const isNumbersChecked = document.getElementById("numberKeyId").checked;
  const isSymbolsChecked = document.getElementById("symbolsKeyId").checked;
  let inputList = "";

  if (
    !isUppercaseChecked &&
    !isLowercaseChecked &&
    !isNumbersChecked &&
    !isSymbolsChecked
  )
    alert("Please! Select at least one checklist option.");

  if (isUppercaseChecked) inputList += UPPERCASE_LIST;
  if (isLowercaseChecked) inputList += LOWERCASE_LIST;
  if (isNumbersChecked) inputList += NUMBERS_LIST;
  if (isSymbolsChecked) inputList += SYMBOLS_LIST;

  const password = PasswordGenerator(inputList, passwordLength);

  passwordBox.value = password;
});

passwordBox.addEventListener("click", CopyPassword);
