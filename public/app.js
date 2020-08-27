function handleSubmit(e){
    
    e.preventDefault();
    fname();
    address();
    email();
    fcnic();
    dateOfBirth();
    city();
    password();
    contact();
    
    if (fname()  &&    address()&&    email()&&    fcnic()&&    dateOfBirth()&&    city()&&    password() &&   contact()){
        alert('Your Response has been submitted')
    getValues();
    }
}

function getValues() {
    var names = document.getElementById('name');
    var addresses = document.getElementById('inputAddress');
    var emails = document.getElementById('inputEmail4');
    var cnics = document.getElementById('cnic');
    var dob = document.getElementById('inputZip1');
    var cities = document.getElementById('inputState');
    var passwords = document.getElementById('inputPassword4');
    var mobilePhone = document.getElementById('inputNumber');

    var person1 = {
        name0: names.value,
        address: addresses.value,
        email: emails.value,
        cnic: cnics.value,
        dateofbirth: dob.value,
        city1: cities.value,
        password: passwords.value,
        contact: mobilePhone.value
    }

    // var keys = firebase.database().ref('person1').push().key;
    firebase.database().ref('person1').push(person1)

    

}

function fname() {
    var names = document.getElementById('name');
    if (names.value == "" ){
        names.classList.add('is-invalid');
        return false
    }else{
        names.classList.remove('is-invalid');
        return true
    }
}



function address() {
    var addresses = document.getElementById('inputAddress');
    if (addresses.value == ""){
        addresses.classList.add('is-invalid');
        return false
    }else{
        addresses.classList.remove('is-invalid');
        return true
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
        return false
    }else{
        emails.classList.remove('is-invalid');
        return true
    }
}


function fcnic(){
    var cnics = document.getElementById('cnic');
    var cnicValue = cnics.value;
    console.log(cnicValue);
    if(cnicValue.length !== 13 ){
        cnics.classList.add('is-invalid');
        return false
    }else{
        cnics.classList.remove('is-invalid');
        return true
    }
}

function dateOfBirth() {
    var dob = document.getElementById('inputZip1');
    if (dob.value =="" ){
        dob.classList.add('is-invalid');
        return false
    }else{
        dob.classList.remove('is-invalid');
        return true
    }
}


function city() {
    var cities = document.getElementById('inputState');
    if (cities.value =="" ){
        cities.classList.add('is-invalid');
        return false
    }else{
        cities.classList.remove('is-invalid');
        return true
    }
}

function password() {
    var passwords = document.getElementById('inputPassword4');
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (passwords.value == "" || !passwords.value.match(paswd)){
        passwords.classList.add('is-invalid');
        return false
    }else{
        passwords.classList.remove('is-invalid');
        return true
    }
}

function contact() {
    var mobilePhone = document.getElementById('inputNumber');
    if (mobilePhone.value == "" || (mobilePhone.value).length !==11){
        mobilePhone.classList.add('is-invalid');
        return false        
    }else{
        mobilePhone.classList.remove('is-invalid');
        return true
    }
}

console.log(firebase.database)