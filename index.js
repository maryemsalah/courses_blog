
// registration form
/*
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var PhoneNumber = document.getElementById("PhoneNumber").value;
  
    // Create a JavaScript object with user information
    var userData = {
        "name": name,
        "email": email,
        "gender": gender,
        "PhoneNumber": PhoneNumber 
        
    };

    // Convert JavaScript object to JSON string
    var jsonData = JSON.stringify(userData);

    // Store JSON data in local storage
    localStorage.setItem("userData", jsonData);

    // Optional: Display a message to the user
    alert("User data saved successfully!");
    
    var userDataJSON = localStorage.getItem("userData");
    var userData = JSON.parse(userDataJSON);
    console.log(userData);
    // You can now access the stored user data using localStorage.getItem("userData");
}); */
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
            var gender = document.getElementById("Gender").value;
            var PhoneNumber = document.getElementById("PhoneNumber").value;
            // Create a JavaScript object with user information
            var userData = {
                "name": name,
                "email": email,
                "password": password,
                "gender": gender,
                "PhoneNumber": PhoneNumber 
            };

            // Convert JavaScript object to JSON string
            var jsonData = JSON.stringify(userData);

            // Store JSON data in local storage
            localStorage.setItem("userData", jsonData);

            // Optional: Display a message to the user
            alert("User data saved successfully!");
            window.location.href = "index.html";
            // You can now access the stored user data using localStorage.getItem("userData");
        });
       
    } else {
        console.error("Element with ID 'userForm' not found.");
    }
    var userDataJSON = localStorage.getItem("userData");
var userData = JSON.parse(userDataJSON);
console.log(userData);
});


//login 
document.addEventListener("DOMContentLoaded", function() {
    var loginForms = document.getElementsByClassName("loginForm");

    // Loop through each login form and attach event listener
    for (var i = 0; i < loginForms.length; i++) {
        loginForms[i].addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting
        
            // Get username, email, and password from form inputs
            var username = this.querySelector("#username").value;
            var email = this.querySelector("#email").value;
            var password = this.querySelector("#password").value;

            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
            
            // Check if user is registered
            var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

            console.log("Registered Users:", registeredUsers);
            
            var isRegistered = registeredUsers.some(function(user) {
                return user.username === username && user.password === password && user.email === email;
            });

            if (isRegistered) {
                alert("Login successful!");
                // Redirect user to dashboard or home page
                window.location.href = "index.html"; // Change this to the actual URL of your dashboard page
            } else {
                alert("Invalid username, email, or password. Please register first.");
                // Redirect user to registration page
                window.location.href = "register.html"; // Change this to the actual URL of your registration page
            }
        });
    }

    if (loginForms.length === 0) {
        console.error("Element with class 'loginForm' not found.");
    }
});


// script.js
$(document).ready(function() {
    var courseContainer = $("#course-container");

    var courses = [
        { 
            "title": "Course 1",
            "description": "Description of Course 1",
            "image": "img_course/web design.jpeg",
            "price": 49.99
        },
        { 
            "title": "Course 2",
            "description": "Description of Course 2",
            "image": "img_course/fiuter.png",
            "price": 59.99
        },
        { 
            "title": "Course 3",
            "description": "Description of Course 3",
            "image": "img_course/python.jpg",
            "price": 69.99
        }
        ,
        { 
            "title": "Course 3",
            "description": "Description of Course 3",
            "image": "img_course/th.jpg",
            "price": 69.99
        }
        ,
        { 
            "title": "Course 3",
            "description": "Description of Course 3",
            "image": "img_course/Digital-Photography.jpg",
            "price": 69.99
        }
        ,
        { 
            "title": "Course 3",
            "description": "Description of Course 3",
            "image": "img_course/markting.jpg",
            "price": 69.99
        }
    ];
    
    // Function to load courses via AJAX
    function loadCourses() {
        displayCourses(courses);
    }
  
    // Function to display courses
    function displayCourses(courses) {
        courseContainer.empty(); // Clear previous content
        courses.forEach(function(course) {
            var card = createCourseCard(course);
            courseContainer.append(card);
        });
    }

    // Function to create a course card from template
    function createCourseCard(course) {
        var template = `
        <div class="card">
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <div class="course-details">
            <h2 class="course-title">${course.title}</h2>
            <p class="course-description">${course.description}</p>
            <p class="course-price">$${course.price}</p>
            <button class="apply-button">Apply Now</button>
        </div>
    </div>
        `;
        return $(template);
    }

    // Load courses when the page loads
    loadCourses();
});


