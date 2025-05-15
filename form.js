// Initialize EmailJS with your user ID
(function() {
  emailjs.init("7I5_gBx7WY4WPOsBb"); // Replace with your actual EmailJS user ID
})();

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Gather data from the form
  var templateParams = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      questions: document.getElementById("questions").value
  };

  // Send email using EmailJS service
  emailjs.send('service_hne1zgl', 'template_umwpsyh', templateParams)
      .then(function(response) {
          alert("Email sent successfully!");
          // Optionally, reset the form
          document.getElementById('contactForm').reset();
      }, function(error) {
          alert("Failed to send email.");
          console.log(error);
      });
});
