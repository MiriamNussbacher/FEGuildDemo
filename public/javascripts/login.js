function onLogin() {
    fetch("api/secret", {
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }
    }).then(res => res.text())
        .then(data => {
            document.body.innerHTML = data;
        })

}