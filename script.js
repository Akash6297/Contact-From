function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").ariaValueMax,
        email_id : document.getElementById("email_id").ariaValueMax,
        message : document.getElementById("message").ariaValueMax

    }
    emailjs.send("service_p0gj2xs", "service_p0gj2xs", params).then(function (res) {
        alert("Success! " + res.status);
    })
}