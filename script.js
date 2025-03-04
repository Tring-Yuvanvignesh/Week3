document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.querySelector(".switch-buttons button:nth-child(1)")
    const signUpButton = document.querySelector(".switch-buttons button:nth-child(2)")

    signInButton.addEventListener("click", function () {
        location.href = "signIn.html"; 
    })

    signUpButton.addEventListener("click", function () {
        location.href = "signUp.html";
    })

})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#signIn-submit").addEventListener("click", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }
        else{
            location.href = "landingPage.html"
        }

    });

});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#signUp-submit").addEventListener("click", function (event) {
        event.preventDefault(); 

        let name = document.querySelector("#signUp-name").value.trim();
        let email = document.querySelector("#signUp-email").value.trim();
        let password = document.getElementById("signUp-password").value.trim();


        if (name === "") {
            alert("Please enter a valid name (letters only).");
            return;
        }

        if (email === "") {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        location.href = "signIn.html";

    });

});

function signIn() {
    location.href= "signIn.html"
}

document.addEventListener("DOMContentLoaded", function () {
    const teamMenu = document.querySelector(".team-menu");
    const buttons = teamMenu.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");
        });
    });
});





