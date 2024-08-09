let userLoginNumber = document.getElementById("foodMuchNumberId");
let userLoginPassword = document.getElementById("foodMuchpasswordId");

document.getElementById("logInPortalId").style.display = "block";
document.getElementById("mainWebId").style.display = "none";

function logInUserFunc() {
    let actualNumber = userLoginNumber.value; // Use userLoginNumber to get the number
    let actualPassword = userLoginPassword.value; // Use userLoginPassword to get the password

    if (actualNumber === "7872517455" && actualPassword === "abhi@787") {
        window.location.hash = "mainWebId"; // Redirect to the desired page
        document.getElementById("logInPortalId").style.display = "none";
        document.getElementById("mainWebId").style.display = "block";

    } else {
        document.getElementById("voidElementId").textContent = "Wrong 😑 ! Please Check the Number or Password";
    }
}