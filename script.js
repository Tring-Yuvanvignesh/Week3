document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.querySelector(".switch-buttons button:nth-child(1)");
    const signUpButton = document.querySelector(".switch-buttons button:nth-child(2)");

    signInButton.addEventListener("click", function () {
        window.location.href = "signIn.html"; 
    });

    signUpButton.addEventListener("click", function () {
        window.location.href = "signUp.html";
    });

});

function signIn(){
        window.location.href = "signIn.html";
}





