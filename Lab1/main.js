window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

    
function alertSubFunc() {
    let email = document.getElementById("email").value;
    console.log(email);
    alert("Subscriber \"added\":" + email)
}