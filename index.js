/*regestration form */
document.addEventListener("DOMContentLoaded", function() {
    
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

          
         
            alert("User data saved successfully!");
          
           
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


/* courses*/
$(document).ready(function() {
    var courseContainer = $("#course-container");

    var courses = [
        { 
            "title": "Web Design for Beginners",
            "description": "Dive deep into the core concepts of web development, including HTML, CSS, and JavaScript. ",
            "image": "img_course/web design.jpeg",
            "price": 49.99
        },
        { 
            "title": "Python for Beginners",
            "description": "Explore the fundamental concepts of programming using Python—a versatile and beginner-friendly language.",
            "image": "img_course/python.jpg",
            "price": 59.99
        },
        { 
            "title": "Flutter for Beginners",
            "description": " Dive into the exciting world of Flutter—a powerful framework for building natively compiled applications for mobile, web, and desktop from a single codebase",
            "image": "img_course/fiuter.png",
            "price": 69.99
        }
        ,
        { 
            "title": "Degital Photography",
            "description": " Learn how to make the most of your digital camera—whether it's a DSLR, mirrorless, or smartphone camera",
            "image": "img_course/Digital-Photography.jpg",
            "price": 69.99
        }
        ,
        { 
            "title": "Learn Markting",
            "description": "Dive deep into the core principles of marketing, including market research, consumer behavior, branding, and positioning.",
            "image": "img_course/markting.jpg",
            "price": 69.99
        }
        ,
        { 
            "title": "SQL for Beginners",
            "description": " Dive deep into the fundamental concepts of SQL, including database design,querying data, and manipulating data with SQL commands",
            "image": "img_course/th.jpg",
            "price": 69.99
        }
    ];
    
    // Function to load courses via AJAX
    function loadCourses() {
        displayCourses(courses);
    }
  
    // Function to display courses
    function displayCourses(courses) {
        courseContainer.empty(); 
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

