function toggleInputTextOnError(id, error){
    if(error){
        document.getElementById(id).classList.remove("text-3D3B48");
        document.getElementById(id).classList.add("text-[#FF7979]");
        document.getElementById(id).classList.remove("placeholder:text-3D3B48");
        document.getElementById(id).classList.add("placeholder:text-[#FF7979]");
    }
    else{
        document.getElementById(id).classList.remove("text-[#FF7979]");
        document.getElementById(id).classList.add("text-3D3B48");
        document.getElementById(id).classList.remove("placeholder:text-[#FF7979]");
        document.getElementById(id).classList.add("placeholder:text-3D3B48");
    }
}

function toggleInputBorderOnError(id, error){
    if(error){
        document.getElementById(id).classList.remove("border-[#DEDEDE]");
        document.getElementById(id).classList.add("border-[#FF7979]");
    }
    else{
        document.getElementById(id).classList.remove("border-[#FF7979]");
        document.getElementById(id).classList.add("border-[#DEDEDE]");
    }
}

function toggleErrorIconOnError(id, error){
    if(error){
        document.getElementById(id).classList.remove("invisible");
    }
    else{
        document.getElementById(id).classList.add("invisible");
    }
}

function validateName(){
    const name = document.getElementById('name').value;
    // Check if name is empty
    if (name.trim() === '') {
        document.getElementById('error-name').innerText = 'First Name cannot be empty';
        toggleErrorIconOnError('error-icon-name', true);
        toggleInputTextOnError('name', true);
        toggleInputBorderOnError('custom-name-wrapper', true);
        return true;
    }
    else{
        document.getElementById('error-name').innerText = '';
        toggleErrorIconOnError('error-icon-name', false);
        toggleInputTextOnError('name', false);
        toggleInputBorderOnError('custom-name-wrapper', false);
        return false;
    }
}

function validateLastName(){
    const lastname = document.getElementById('surname').value;
    // Check if lastname is empty
    if (lastname.trim() === '') {
        document.getElementById('error-surname').innerText = 'Last Name cannot be empty';
        toggleErrorIconOnError('error-icon-surname', true);
        toggleInputTextOnError('surname', true);
        toggleInputBorderOnError('custom-surname-wrapper', true);
        return true;
    }
    else{
        document.getElementById('error-surname').innerText = '';
        toggleErrorIconOnError('error-icon-surname', false);
        toggleInputTextOnError('surname', false);
        toggleInputBorderOnError('custom-surname-wrapper', false);
        return false;
    }

}

function validateEmail(){
    const email = document.getElementById('email').value;
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-email').innerText = 'Looks like this is not an email';
        toggleErrorIconOnError('error-icon-email', true);
        toggleInputTextOnError('email', true);
        toggleInputBorderOnError('custom-email-wrapper', true);
        return true;
    }
    else{
        document.getElementById('error-email').innerText = '';
        toggleErrorIconOnError('error-icon-email', false);
        toggleInputTextOnError('email', false);
        toggleInputBorderOnError('custom-email-wrapper', false);
        return false;
    }
}

function validatePassword(){
    const password = document.getElementById('password').value;
    // Check if password is empty
    if (password.trim() === '') {
        document.getElementById('error-password').innerText = 'Password cannot be empty';
        toggleErrorIconOnError('error-icon-password', true);
        toggleInputTextOnError('password', true);
        toggleInputBorderOnError('custom-password-wrapper', true);
        return true;
    }
    else{
        document.getElementById('error-password').innerText = '';
        toggleErrorIconOnError('error-icon-password', false);
        toggleInputTextOnError('password', false);
        toggleInputBorderOnError('custom-password-wrapper', false);
        return false;
    }

}

function validateForm() {
    valid_name = !validateName();
    valid_lastname = !validateLastName();
    valid_email = !validateEmail();
    valid_password = !validatePassword();

    return valid_name && valid_lastname && valid_email && valid_password;
}


//Validate when user enters input
document.getElementById('name').addEventListener('input', function () {
    validateName();
});

document.getElementById('surname').addEventListener('input', function () {
    validateLastName();
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail();
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword();
});


// Add event listener to the form submit button
const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
        // Form is valid, do something (e.g., submit the form)
        form.submit();
    }
});