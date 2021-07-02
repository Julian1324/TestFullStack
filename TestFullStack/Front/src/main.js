function onloadStart(){
    var welcomeMessage= document.querySelector('.welcomeMessage');
    welcomeMessage.style.backgroundPosition="bottom";
    
    setInterval(() => {
        welcomeMessage.animate([
            { opacity: "0"},
            { opacity: "0"},
            { opacity: "0.5"},
            { opacity: "0.8"},
            { opacity: "1"}
        ],{
            duration: 1500
        });

        welcomeMessage.animate([
            {marginTop: "15vh"}
        ],{
            duration: 3000
        });
        
    }, 3000);

    

    
}

function onLoginClick(){
    window.location="./login/login.html";
}

function onSignInClick(){
    window.location="./signup/signup.html";
}