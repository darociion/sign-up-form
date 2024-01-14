let pass = document.querySelector("#pass");
let confirmPass = document.querySelector("#confirmPass");
let errorMessage = document.querySelector(".errorMessage");

confirmPass.addEventListener("input", function (event) {
    if (pass.value !== confirmPass.value) {
        errorMessage.style.visibility = "visible";
        pass.classList.add("error");
        confirmPass.style.border = "1px solid red";
    } else {
        errorMessage.style.visibility = "hidden";
        pass.classList.remove("error");
        confirmPass.style.border = "rgb(5, 5, 141) 1px solid";
        confirmPass.style.boxShadow = "2px 5px 8px 0 rgb(0, 0, 0, 0.2)";
    } 
    }
)