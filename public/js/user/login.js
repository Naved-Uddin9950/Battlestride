let email = document.getElementsByTagName('input[type:email]');
let password = document.getElementsByTagName('input[type:password]');

const validate = (e) => {
    // Regular expressions for email and password validation
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passPattern = /^.{8,}$/;
    
    // Get the email and password input elements
    let emailInput = document.querySelector('input[type="email"]');
    let passInput = document.querySelector('input[type="password"]');
    
    // Get the values of email and password inputs
    let emailValue = emailInput.value;
    let passValue = passInput.value;
    
    // Validate email
    if (!emailPattern.test(emailValue)) {
        alert("Invalid email address");
        e.preventDefault();
        return false;
    }
    
    // Validate password
    if (!passPattern.test(passValue)) {
        alert("Password must be at least 8 characters long");
        e.preventDefault();
        return false;
    }
    
    // If both email and password are valid
    sendData.click();
    return true;
}

let submit = document.getElementById('submit');
let sendData = document.getElementById('sendData');

submit.addEventListener('click', validate);

