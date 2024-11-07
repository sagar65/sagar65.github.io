function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone_number = document.getElementById("phone_number").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const text = `name: ${name}, email: ${email}, phone_number: ${phone_number}, message: ${message}`;

    var settings = {
        "url": "https://polydactyl-storm-couch.glitch.me/send-email",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            "to": "info@cadlions.com",
            "subject": subject,
            "text": text
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}