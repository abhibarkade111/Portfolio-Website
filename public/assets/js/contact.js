
const Name = document.getElementById('Name');
const email = document.getElementById('email');
const project = document.getElementById('project');
const message = document.getElementById('message');
const from = document.getElementById('form');
console.log("hello")
const db= firebase.firestore();

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("hellorr")
   if(Name.value==="" || email.value===""  || message.value===""  )
   {

    if(Name.value===""){
        errorName.innerText="Please Enter Full Name";
    }
    else{
        errorName.innerText="";
    }
    if(email.value===""){
        errorEmail.innerText="Please Enter Email address";
    }
    else{
        errorEmail.innerText="";
    }
   
    
    if(message.value===""){
        errorMessage.innerText="Please Write Something ";
    }
    else{
        errorMessage.innerText="";
    }
    
   }
   else{

    db.collection('contactMeForm').add({
        Name:Name.value,
        email:email.value,
        Message:message.value,
    })
    .then(()=>{
        console.log('form submiited')
    })

    alert("Form Submitted Successfully.\nThank You!")

    Name.value="";
    email.value="";
    message.value="";

    errorEmail.innerText='';
    errorName.innerText='';
    errorMessage.innerText='';
   
}
})
