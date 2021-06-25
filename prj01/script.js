const form=document.getElementById('form');
const user_name=document.getElementById('User_Name');
const email=document.getElementById('Email');
const password=document.getElementById('Password')
const confirm_password=document.getElementById('Confirm_Password')


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
Check_length=(input,min,max)=>{
    if(input.value.length<min){
        show_error(input,`${input.id} provide at minimum atleast ${min} character`);
    }else  if(input.value.length>max){
        show_error(input,`${input.id} provide atleast ${max} character`);
    }else{
        show_success(input);
    }
}

match_password=(input,input1)=>{
    if(input.value!==input1.value){
        show_error(input1,"Password Does not Match");
    } 
}

checkRequirement=(inputArray)=>{
    inputArray.forEach((input)=>{
        if(input.value ===''){
            show_error(input,`${input.id} is required`);
        }
        else if(!is_valid_email(email.value)){
            show_error(email,"Provide valid email");
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
    Check_length(user_name,3,10);
    Check_length(password,4,20);
    Check_length(confirm_password,4,20);
    match_password(password,confirm_password);
})