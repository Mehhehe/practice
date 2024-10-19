function login() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    const validUsername = "ventic";
    const validPassword = "ventic123";

    
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");

       
        window.location.href = "index.html";
    } else {
        document.getElementById("loginMessage").innerText = "Invalid username or password!";
    }
}

