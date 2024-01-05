let pass = document.getElementById("pass");
let confirmpass = document.getElementById("confirmpass");
let errorMessage = document.querySelector(".error-message");

confirmpass.addEventListener("input", function (event) {
    if (pass.value !== confirmpass.value) {
        errorMessage.innerHTML = "*Passwords do not match";
        pass.classList.add("error");
        confirmpass.style.border = "1px solid red";
    } else {
        errorMessage.innerHTML = "";
        pass.classList.remove("error");
        confirmpass.style.border = "rgb(5, 5, 141) 1px solid";
        confirmpass.style.boxShadow = "2px 5px 8px 0 rgb(0, 0, 0, 0.2)";
    } 
    }
)