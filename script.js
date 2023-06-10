// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    console.log(formData)
  
    // Send form data to backend
    fetch('http://localhost:5500/submit', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); // Clear form fields
      } else {
        alert('Error submitting form. Please try again.');
      }
    })
    .catch(function(error) {
      console.log(error);
      alert('An error occurred. Please try again later.');
    });
  });
  