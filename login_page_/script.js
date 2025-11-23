// Simple Javascript to toggle forms
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");

        function register() {
            x.style.left = "-400px"; // Move login form out to the left
            y.style.left = "50px";   // Move register form in
            z.style.left = "110px";  // Move the highlight button
        }

        function login() {
            x.style.left = "50px";   // Move login form back in
            y.style.left = "450px";  // Move register form out to the right
            z.style.left = "0";      // Move the highlight button back
        }