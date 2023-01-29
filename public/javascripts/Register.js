function register(){

    let user = {

        Username: document.getElementById("email").value,

        Password: document.getElementById("password").value,

        FirstName: document.getElementById("firstName").value,

        LastName: document.getElementById("lastName").value,

        Message: escapeHtml(document.getElementById("message").value)

    }
    Http.post("/api/User", user, afterSuccessSave)
}

function afterSuccessSave() {
    alert('Thanks for registering. Now you can log on');
    window.location.href = "Login.html";
}

function  escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}