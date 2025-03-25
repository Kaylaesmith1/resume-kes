document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Stop the default form submission

    let form = event.target;
    let formData = new FormData(form);

    let response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    });

    if (response.ok) {
        document.getElementById("thankYouMessage").style.display = "block"; // Show thank you message
        setTimeout(() => { window.location.href = "/"; }, 3000); // Redirect to homepage after 3 seconds
        form.reset(); // Optional: Reset form fields
    } else {
        alert("Oops! Something went wrong.");
    }
});

// function sendMail(contactForm) {
// emailjs.send("service_6a8xgnp","template_1nbot8m", {
// "from_name": contactForm.name.value,
// "from_email": contactForm.emailaddress.value,
// "project_request": contactForm.projectsummary.value
// })
// .then(
//     function(response) {
//         console.log("Email successfully sent", response);
//     },
//     function(error) {
//         console.log("Email failed to send", error);
//     }
// );
//     return false;
// }