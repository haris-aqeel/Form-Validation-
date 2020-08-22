function handleSubmit(e){
    // if (name()  &&    address()&&    email()&&    cnic()&&    dateOfBirth()&&    city()&&    password() &&   contact();)
    e.preventDefault();
    name();
    address();
    email();
    cnic();
    dateOfBirth();
    city();
    password();
    contact();
}



function name() {
    var names = document.getElementById('name');
    if (names.value == "" ){
        names.classList.add('is-invalid');
    }else{
        names.classList.remove('is-invalid');
    }
}



function address() {
    var addresses = document.getElementById('inputAddress');
    if (addresses.value == ""){
        addresses.classList.add('is-invalid');
    }else{
        addresses.classList.remove('is-invalid');
    }
}



function email() {
    var emails = document.getElementById('inputEmail4');
    var atTheRate = false;
    if((emails.value).includes('@')){
        atTheRate = true;   
    }

    if (emails.value == "" || atTheRate == false){
        emails.classList.add('is-invalid');
    }else{
        emails.classList.remove('is-invalid');
    }
}


function cnic(){
    var cnics = document.getElementById('cnic');
    var cnicValue = cnics.value;
    console.log(cnicValue);
    if(cnicValue.length !== 13 ){
        cnics.classList.add('is-invalid');
    }else{
        cnics.classList.remove('is-invalid');
    }
}

function dateOfBirth() {
    var dob = document.getElementById('inputZip1');
    if (dob.value =="" ){
        dob.classList.add('is-invalid');
    }else{
        dob.classList.remove('is-invalid');
    }
}


function city() {
    var cities = document.getElementById('inputState');
    if (cities.value =="" ){
        cities.classList.add('is-invalid');
    }else{
        cities.classList.remove('is-invalid');
    }
}

function password() {
    var passwords = document.getElementById('inputPassword4');
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (passwords.value == "" || !passwords.value.match(paswd)){
        passwords.classList.add('is-invalid');
    }else{
        passwords.classList.remove('is-invalid');
    }
}

function contact() {
    var mobilePhone = document.getElementById('inputNumber');
    if (mobilePhone.value == "" || (mobilePhone.value).length !==11){
        mobilePhone.classList.add('is-invalid');        
    }else{
        mobilePhone.classList.remove('is-invalid');
    }
}
