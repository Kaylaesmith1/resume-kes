// document.getElementById("contactForm").addEventListener("submit", async function(event) {
//     event.preventDefault(); 

//     let form = event.target;
//     let formData = new FormData(form);

//     let response = await fetch(form.action, {
//         method: "POST",
//         body: formData,
//         headers: { "Accept": "application/json" }
//     });

//     if (response.ok) {
//         document.getElementById("thankYouMessage").style.display = "block";
//         setTimeout(() => { window.location.href = "/"; }, 4000); 
//         form.reset();
//     } else {
//         alert("Oops! Something went wrong.");
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        let formData = new FormData(form);
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            document.getElementById("thankYouMessage").style.display = "block";
            setTimeout(() => {
                window.location.href = "https://kaylaesmith1.github.io/resume-kes/index.html";
            }, 3000); // Redirect after 3 seconds
            form.reset();
        } else {
            console.error("Form submission failed.");
        }
    });
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