const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;    //selecteaza elementul parent a inputului
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}


//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;    //selecteaza elementul parent a inputului
    formControl.className = 'form-control success';
}


//check if email is valid
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){        //forEach loops through the array
        if(input.value.trim() == '') {         //trim to trim out whitespaces
            console.log(input.id)
            showError(input, '${getFieldName(input)}  is required');
        }   else{
            showSuccess(input);
        }
    });         
}

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();     /*previne eventul 'submit' sa actioneze, in cazul nostru nu submite form-ul si nu sterge informatiile din field */


    checkRequired([username, email, password, password2]);


    // if(username.value == ''){       //conditie ce sa afiseze daca e gol field-ul
    //     showError(username, 'Username is required');
    // } else{
    //     showSuccess(username);
    // }

n 
    // if(email.value == ''){       
    //     showError(email, 'Email is required');
    //     }  
    //     else if(!isValidEmail(email.value)){
    //         showError(email, 'Email is not valid!');
    //     } 
    //     else{
    //     showSuccess(email);
    //     }

    // if(password.value == ''){
    //     showError(password, 'Password is required');
    // } else{
    //     showSuccess(password);
    // }

    // if(password2.value == ''){
    //     showError(password2, 'Password is required');
    // } else{
    //     showSuccess(password2);
    // }

});