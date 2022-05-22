let password = document.getElementById("password")
    , confirm_password = document.getElementById("password_confirm");

const valid = document.getElementById('pass_match');
    
function validatePassword(){
    if(password.value != password_confirm.value) {
    password_confirm.setCustomValidity("Error: Passwords don't match. Please try again.");
    valid.textContent = "*Passwords don't match bruh";
    } else {
    password_confirm.setCustomValidity('');
    valid.textContent = "";
    }
}

password.setCustomValidity("*Password must include at least one uppercase letter, number & special character... or so help me God, I'll slap the sh*t out of you.");
password.onchange = validatePassword;
password_confirm.onkeyup = validatePassword;