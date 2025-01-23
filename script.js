document.addEventListener("DOMContentLoaded", () => {
    // Form and feedback division selection
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
  
    // Form submission event listener
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission to the server
  
      // Retrieve and trim user inputs
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Validation logic
      let isValid = true;
      const messages = [];
  
      // Username validation
      if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
      }
  
      // Email validation
      if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Email must contain '@' and '.' characters.");
      }
  
      // Password validation
      if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
      }
  
      // Feedback display logic
      feedbackDiv.style.display = "block";
      if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; // Green color
      } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // Red color
      }
    });
  });

  