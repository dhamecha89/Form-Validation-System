document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters long.";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Validate Email
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Validate Password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long.";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
