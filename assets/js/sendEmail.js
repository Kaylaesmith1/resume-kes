function sendMail(contactForm) {
emailjs.send("service_6a8xgnp","template_1nbot8m", {
"from_name": contactForm.name.value,
"from_email": contactForm.emailaddress.value,
"project_request": contactForm.projectsummary.value
})
.then(
    function(response) {
        console.log("Email successfully sent", response);
    },
    function(error) {
        console.log("Email failed to send", error);
    }
);
    return false;
}