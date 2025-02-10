document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.querySelector(".switch-buttons button:nth-child(1)");
    const signUpButton = document.querySelector(".switch-buttons button:nth-child(2)");

    signInButton.addEventListener("click", function () {
        toggleActive(signInButton, signUpButton);
        window.location.href = "signIn.html"; // Redirect to sign-in page
    });

    signUpButton.addEventListener("click", function () {
        toggleActive(signUpButton, signInButton);
        window.location.href = "signUp.html"; // Redirect to sign-up page
    });

    function toggleActive(activeButton, inactiveButton) {
        activeButton.classList.add("active");
        activeButton.classList.remove("inactive");

        inactiveButton.classList.add("inactive");
        inactiveButton.classList.remove("active");
    }
});

function signIn(){
        window.location.href = "signIn.html";
}

function showTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');

    document.getElementById('industries-content').style.display = tabName === 'industries' ? 'block' : 'none';
    document.getElementById('services-content').style.display = tabName === 'services' ? 'block' : 'none';
}





