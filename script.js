document.addEventListener("DOMContentLoaded", () => {
    // Select form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
  
    // Add submit event listener
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Retrieve and trim input values
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Initialize validation variables
      let isValid = true;
      const messages = [];
  
      // Username validation
      username.length < 3 
        ? (isValid = false, messages.push("Username must be at least 3 characters long."))
        : null;
  
      // Email validation
      (!email.includes("@") || !email.includes(".")) 
        ? (isValid = false, messages.push("Email must include '@' and '.' characters."))
        : null;
  
      // Password validation
      password.length < 8 
        ? (isValid = false, messages.push("Password must be at least 8 characters long."))
        : null;
  
      // Display feedback
      feedbackDiv.style.display = "block";
      isValid
        ? (feedbackDiv.textContent = "Registration successful!", feedbackDiv.style.color = "#28a745")
        : (feedbackDiv.innerHTML = messages.join("<br>"), feedbackDiv.style.color = "#dc3545");
    });
  });
  