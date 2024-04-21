function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "anita1234" && password === "12345678") {
        alert("Login successful!");
        window.location.href = "https://1drv.ms/x/s!AkPvbJOdWUXZgi_5FUvUrJTQD9DK?e=0C16sL";
        return false; // Prevent form submission
    } else {
        alert("Invalid credentials, please try again.");
        return false; // Stay on the page
    }
}
