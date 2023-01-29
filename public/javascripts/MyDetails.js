function loadData() {
    let currentUser = JSON.parse(sessionStorage.getItem("user"));
    document.getElementById("full-name").innerHTML = currentUser.firstName + " " + currentUser.lastName;
    document.getElementById("message").innerHTML = currentUser.message;
  //  document.getElementById("message").innerText = currentUser.Message;


} 