class Http {
    constructor() {

    }

    static get(url, successFunction,errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {


                successFunction(JSON.parse(xhttp.response));

            }

            if (this.readyState == 4 && this.status == 204) {
                console.log(url);
              //  setNoContent();
                alert("אין נתונים");
                

            }

            else if (this.readyState == 4) {
               // errorFunction();
             
            }

        };

        xhttp.open("GET", url, true);
        if (sessionStorage.getItem("Token") != null)
        xhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem("Token"));
        xhttp.send();
    }


    static post(url,data, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                if (xhttp.response != "")
                    successFunction(JSON.parse(xhttp.response));
                else
                    successFunction();

            }

            if (this.readyState == 4 && this.status == 204) {

                //  setNoContent();
                alert("אין נתונים");


            }

            else if (this.readyState == 4 && this.status > 300) {
                errorFunction(this);

            }

        };

        xhttp.open("POST", url, true);
        if (sessionStorage.getItem("Token")!= null)
            xhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem("Token"));
        xhttp.setRequestHeader('Content-Type', 'application/json');

        xhttp.send(JSON.stringify(data));
    }

    static put(url, data, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {


                successFunction(xhttp.response);

            }

            if (this.readyState == 4 && this.status == 204) {

                //  setNoContent();
                alert("אין נתונים");


            }

            else if (this.readyState == 4) {
                errorFunction();

            }

        };

        xhttp.open("Put", url, true);

        xhttp.send(JSON.stringify(data));
    }


    static put(url, successFunction, errorFunction) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {


                successFunction(xhttp.response);

            }

            if (this.readyState == 4 && this.status == 204) {

                //  setNoContent();
                alert("אין נתונים");


            }

            else if (this.readyState == 4) {
                errorFunction();

            }

        };

        xhttp.open("Delete", url, true);

        xhttp.send();
    }
}