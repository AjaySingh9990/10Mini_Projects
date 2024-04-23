// import { codeToremoveMessage } from "./codeToremoveMessage";

const fname=document.getElementById("fname");
const Email=document.getElementById("Email");
const Phone=document.getElementById("Phone");
const Password=document.getElementById("Password");
const Confirm=document.getElementById("Confirm");



const removeMessage=(className)=>{
    const existingErrorMessage = document.querySelector('.'+ className);
        if (existingErrorMessage) {
            existingErrorMessage.remove();
        }
        
    };

const  createDiv=(reference,message,errorclass)=>{
    removeMessage(errorclass);
    const errorMessage=document.createElement("div");
    errorMessage.classList.add(errorclass);
    const sample=errorMessage.innerText=message;
    console.log(sample);
    //insert the message after input field
    reference.parentNode.insertBefore(errorMessage,reference.nextSibling);
    reference.value=''; //clear div for re-enter
}

const check=(event)=>{
    event.preventDefault();

    let name=fname.value;
    let email=Email.value;
    let phone=Phone.value;
    let password=Password.value;
    let confirm=Confirm.value;
  
    if(name.length==0){
        createDiv(fname,"*Field should be filled","nameError")
    }
    if(name.length>30){
        createDiv(fname,"*Character must be less than 30","nameError")
       
    }else{
        removeMessage("nameError"); 
        }
   
    //   check Email
    removeMessage("email-error"); 
    if(email.length==0){
        createDiv(Email,"*Field should be filled","email-error")
    }
    if(email.search("@gmail.com")===-1){ 
        createDiv(Email,"*Invalid-Format","email-error");
    }
   
    if(email.indexOf("@gmail.com")!==email.lastIndexOf("@gmail.com") || email.indexOf("@gmail.com")===0){
        createDiv(Email,"*Invalid-Format","email-error");
    }

    
    if(phone.length!=10){
        createDiv(Phone,"*field Must contains 10 digits","phone-error");
    }

    
    for (let i = 0; i < 10; i++) {
	    if(phone.charCodeAt(i)<=48 && phone.charCodeAt(i)>=57){
            createDiv(Phone,"*Only digits allowed","phone-error");  
        }
   };

   if(password.length!==confirm.length) {
             createDiv(confirm,"*Password not match","confirm-error");  
   }

   
    
};

const submit=document.querySelector(".btn").addEventListener("click",(event)=>{
     
     check(event);
})


