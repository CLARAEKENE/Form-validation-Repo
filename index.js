function formValidation() {
    const firstName =document.forms.formReg.firstName.value;
    const middleName =document.forms.formReg.middleName.value;
    const lastName =document.forms.formReg.lastName.value;
    const email =document.forms.formReg.email.value;
    const password =document.forms.formReg.password.value;
    const password2 =document.forms.formReg.password2.value;
    const address =document.forms.formReg.address.value;

   
    if(firstName ==""){
        window.alert("pls enter your first name");
        firstName.focus();
        return false;
    }

    if(middleName ==""){
        window.alert("pls enter your middle name");
        middleName.focus();
        return false;
    }

    if(lastName ==""){
        window.alert("pls enter your last name");
        lastName.focus();
        return false;
    }

    if(email ==""){
        window.alert("pls enter your valid email address");
        email.focus();
        return false;
    }
    
    if(password != password2){
        window.alert("passwords do not match");
         password.focus();
         return false;   
     }

    if(password.length <= 7){
        window.alert("password should not be less than 8 characters");
        password.focus();
        return false;
    }

    if(address ==""){
        window.alert("pls enter your address");
        address.focus();  
        return false;
    }
}   
