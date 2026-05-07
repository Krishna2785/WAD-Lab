document.getElementById("registerForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));



    // AJAX POST Request

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 201){

            alert("User Registered Successfully");

        }

    };

    xhr.send(JSON.stringify(user));



    document.getElementById("registerForm").reset();

});
