let isInstructor = false;

// Vanilla JS w/ query selector for Login form
document.querySelector("#btnLogin").addEventListener("click",(e) => {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regEduEmail = /(([a-zA-Z0-9._-]+)@([a-zA-Z0-9-]+)\.([eduEDU]{2,4}))/
    let strUsername = document.querySelector("#txtUsername").value
    const regPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/
    let strPassword = document.querySelector("#txtPassword").value
    strUsername = strUsername.toLowerCase()
    let blnError = false
    let strMessage = ''

    if(!regEmail.test(strUsername)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Username must be an email address</p>'
    }else if(!regEduEmail.test(strUsername)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Username must end with .edu</p>'
    }
    
    if(regPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
    }
    if(regPassword.length < 8){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password must contain at least 8 character</p>'
    }
    if(!regPassword.test(strPassword)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password must contain at least one capitalized letter</p>'
        strMessage += '<p class="mb-0 mt-0">Password must contain at least one lower case letter</p>'
        strMessage += '<p class="mb-0 mt-0">Password must contain at least one special character such as !@#$%^&*()</p>'
    }
            
    if(blnError){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });  
    }else{
        Swal.fire({
            title: "Good job!",
            text: "Login success!",
            icon: "success"
        });
    }
})

// Vanilla JS w/ query selector for Registration form
document.querySelector("#btnRegister").addEventListener("click",(e) => {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regEduEmail = /(([a-zA-Z0-9._-]+)@([a-zA-Z0-9-]+)\.([eduEDU]{2,4}))/
    let strUsername = document.querySelector("#txtRegisterUsername").value
    const regPassword = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/
    let strPassword = document.querySelector("#txtRegisterPassword").value
    strUsername = strUsername.toLowerCase()
    let strFirstName = document.querySelector("#txtFirstname").value
    let strLastName = document.querySelector("#txtLastname").value

    let blnError = false
    let strMessage = ''

    if(!regEmail.test(strUsername)){
        blnError = true
        strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
    }else if(!regEduEmail.test(strUsername)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Username must end with .edu</p>'
    }
            
    if(regPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
    }
    if(regPassword.length < 8){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password must contain at least 8 character</p>'
    }
    if(!regPassword.test(strPassword)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password must contain at least one capitalized letter</p>'
        strMessage += '<p class="mb-0 mt-0">Password must contain at least one lower case letter</p>'
        strMessage += '<p class="mb-0 mt-0">Password must contain at least one special character such as !@#$%^&*()</p>'
    }

    if(strFirstName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">First Name Cannot Be Blank</p>'
    }
    if(strLastName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Last Name Cannot Be Blank</p>'
    }

    if(blnError){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });  
    }else{
        Swal.fire({
            title: "Good job!",
            text: "Registration success!",
            icon: "success"
        });
    }
})

// jQuery handler for btnStudent
$('#btnStudent').on('click',function(){
    isInstructor = false;
    $('#pgStatic').slideUp('slow')
    $('#frmStudentLogin').slideDown('fast')
})

// jQuery handler for btnInstructor
$('#btnInstructor').on('click',function(){
    isInstructor = true;
    $('#pgStatic').slideUp('slow')
    $('#frmStudentLogin').slideDown('fast')
})

// jQuery handler for btnStudentSwapLogin, moves from student login form to student registration form
$('#btnStudentSwapLogin').on('click',function(){
    $('#frmStudentLogin').slideUp('slow')
    $('#frmStudentRegister').slideDown('fast')

    if (isInstructor) {
        $('#contactFieldWrapper').hide(); // just hide this wrapper
    } else {
        $('#contactFieldWrapper').show();
    }
})

//jQuery handler for btnSwapRegister, moves from student registration form to student login form
$('#btnStudentSwapRegister').on('click',function(){
    $('#frmStudentRegister').slideUp('slow')
    $('#frmStudentLogin').slideDown('fast')
})

//jQuery handler for btnPasswordReset, moves from student login page to password reset form
$('#btnPasswordReset').on('click',function(){
    $('#frmStudentLogin').slideUp('slow')
    $('#frmPasswordReset').slideDown('fast')
})

//jQuery handler for btnReturnLogin, moves from password reset form back to student login page
$('#btnReturnLogin').on('click',function(){
    $('#frmPasswordReset').slideUp('slow')
    $('#frmStudentLogin').slideDown('fast')
})