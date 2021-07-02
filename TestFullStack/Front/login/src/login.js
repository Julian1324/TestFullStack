function isOnline(){
    
    if(localStorage.length>0){
        window.location='../userprofile/userprofile.html';
    }
}

function onSignInClick(){
    window.location='../signup/signup.html';
}

function backHome(){
    window.location= "../../Front/index.html";
}

function onLoginAction(){
    const Http = new XMLHttpRequest();

    const name= document.querySelector('#username').value;
    const password= document.querySelector('#password').value;

    const url=`http://localhost:4000/login?name=${name}&password=${password}`;
    Http.open('GET', url, true);
    
    Http.send();

    
    Http.onreadystatechange = (e) => {

        if(Http.status==0 || Http.status==404){

        }else{
            localStorage.setItem('logged',`${name}`);
            window.location= '../userprofile/userprofile.html';
        }
        
    }

    document.querySelector('#username').value='';
    document.querySelector('#password').value='';
}