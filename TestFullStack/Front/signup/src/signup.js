function backHome(){
    window.location= "../../Front/index.html";
}

function isOnline(){
    
    if(localStorage.length>0){
        window.location='../userprofile/userprofile.html';
    }
}

function onLoginClick(){
    window.location='../login/login.html';
}

function onSignUpAction(){
    const Http = new XMLHttpRequest();

    const name= document.querySelector('#username').value;
    const password= document.querySelector('#password').value;
    const passwordToConfirm= document.querySelector('#passwordc').value;

    if(password==passwordToConfirm){
        const url=`http://localhost:4000/signup?name=${name}&password=${password}`;
        Http.open('POST', url, true);
        Http.send();

    
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }

        document.querySelector('#username').value='';
        document.querySelector('#password').value='';

        alert('Registered user successfully');
        window.location= "../index.html";
    }else{
        alert("Incorrect data, please verify the information");
    }
}