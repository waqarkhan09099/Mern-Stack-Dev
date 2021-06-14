const form=document.getElementById('form');
const user_name=document.getElementById('user_name');
const email=document.getElementById('email');
const password=document.getElementById('password1')
const confirm_password=document.getElementById('password2')


// All Functions

show_error=(input,message)=>{
    const form_input=input.parentElement;
    form_input.className="form-input error";
    const small=form_input.querySelector('small');
    small.innerText=message;
}

is_valid_email=(email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

show_success=(input)=>{
    const form_input=input.parentElement;
    form_input.className="form-input success";
}

checkRequirement=(inputArray)=>{
    inputArray.forEach((input)=>{
        if(input.value ===''){
            show_error(input,`${input.id} is required`);
        }
        else if(!is_valid_email(input[1])){
        }
        else{
            show_success(input);
        }
    })
}

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     if(user_name.value === ''){
//         show_error(user_name,'Please enter your User Name');
//     }
//     else{
//         show_success(user_name);
//     }
//     if(email.value === ''){
//         show_error(email,'Please enter your email');
//     }
//     else if(!is_valid_email(email.value)){
//         show_error(email,"provide valid email")

//     }
//     else{
//         show_success(email);
//     }
//     if(password.value === ''){
//         show_error(password,'Please enter your password');
//     }
//     else{
//         show_success(password);
//     }
//     if(connfirm_password.value === ''){
//         show_error(connfirm_password,'Please enter your confirm password');
//     }
//     else{
//         show_success(connfirm_password);
//     }
// })



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    checkRequirement([user_name,email,password,confirm_password]);
})