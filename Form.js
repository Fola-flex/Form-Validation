const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const lastname = document.getElementById('lastname');
const email = document.getElementById('useremail');
const tel = document.getElementById('userphone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

if (performance.navigation.type == 2) {
    location.reload(true);
}

form.addEventListener('submit', (f) => {
    checkInputs();
    
  valids.forEach(function(number) {
      if (number == false) {
          f.preventDefault();
      }
  })
    
});


function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const middlenameValue = middlename.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let valid1 = false;
    let valid2 = false;
    let valid3 = false;
    let valid4 = false;
    let valid5 = false;
    let valid6 = false;
    let valid7 = false;

    if(firstnameValue === '') {
        setErrorFor(firstname, 'This field cannot be blank');
    } else{
        setSuccessFor(firstname);
        valid1 = true;
    }   

    if(middlenameValue === '') {
        setErrorFor(middlename, 'This field cannot be blank');
    } else{
        setSuccessFor(middlename);
        valid2 = true;
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'This field cannot be blank');
    } else{
        setSuccessFor(lastname);
        valid3 = true;
    }

    if(emailValue === '') {
        setErrorFor(email, 'This field cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else{
        setSuccessFor(email);
        valid4 = true;
    }

    if(passwordValue === '') {
        setErrorFor(password, 'This field cannot be blank');
    } else if(passwordValue.length < 10) {
        setErrorFor(password, 'Too Short');
    } else{
        setSuccessFor(password, 'Good');
        valid5 = true;
    }

    if(telValue === '') {
        setErrorFor(tel, 'This field cannot be blank');
    } else if( telValue.length < 9) {
        setErrorFor(tel, 'Enter Valid Phone Number');
    } else if( telValue.length > 15) {
        setErrorFor(tel, 'Enter Valid Phone Number');
    } else if ( isNaN(telValue)) {
        setErrorFor(tel, 'Enter Valid Phone number');
    } else{
        setSuccessFor(tel);
        valid6 = true;
    }

    if(password2Value === '') {
        setErrorFor (password2, 'This field cannot be blank');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
    } else{
        setSuccessFor(password2);
        valid7 = true;
    };

   valids = [valid1, valid2, valid3, valid4, valid5, valid6, valid7]

}



function setErrorFor(input, message) {
     formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';    
}

function setSuccessFor(input) {
     formControl = input.parentElement; 
    formControl.className = 'form-control success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
