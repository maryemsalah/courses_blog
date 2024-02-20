/*
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;

    // Create a JavaScript object with user information
    var userData = {
        "name": name,
        "email": email,
        "password":password,
        "gender":gender
    };

    // Convert JavaScript object to JSON string
    var jsonData = JSON.stringify(userData);

    // Store JSON data in local storage
    localStorage.setItem("userData", jsonData);

    // Optional: Display a message to the user
    alert("User data saved successfully!");

    // You can now access the stored user data using localStorage.getItem("userData");
});*/
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener inside this function
    var userForm = document.getElementById("userForm");
    if (userForm) {
        userForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get user input
            var name = document.getElementById("username").value;
             var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var gender = document.getElementById("gender").value;

            // Create a JavaScript object with user information
            var userData = {
                "name": name,
                "email": email,
                "password":password,
                "gender":gender
            };

            // Convert JavaScript object to JSON string
            var jsonData = JSON.stringify(userData);

            // Store JSON data in local storage
            localStorage.setItem("userData", jsonData);

          
            // Optional: Display a message to the user
            alert("User data saved successfully!");
          
            // You can now access the stored user data using localStorage.getItem("userData");
        });
    } else {
        console.error("Element with ID 'userForm' not found.");
    }
});

/*log in form*/

document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            var isRegistered = registeredUsers.some(function(user) {
                return user.username === username && user.password === password && user.email === email;
            });

            if (isRegistered) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to dashboard
            } else {
                alert("Invalid username, email, or password. Please register first.");
                window.location.href = "register.html"; // Redirect to registration page
            }
        });
    } else {
        console.error("Element with class 'loginForm' not found.");
    }
});
