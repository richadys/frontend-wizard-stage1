document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-testid='test-contact-form']");
  if (!form) return;

  // Input fields
  const nameField = document.querySelector("[data-testid='test-contact-name']");
  const emailField = document.querySelector("[data-testid='test-contact-email']");
  const subjectField = document.querySelector("[data-testid='test-contact-subject']");
  const messageField = document.querySelector("[data-testid='test-contact-message']");
  const successMsg = document.querySelector("[data-testid='test-contact-success']");

  // Error fields
  const errors = {
    name: document.querySelector("[data-testid='test-contact-error-name']"),
    email: document.querySelector("[data-testid='test-contact-error-email']"),
    subject: document.querySelector("[data-testid='test-contact-error-subject']"),
    message: document.querySelector("[data-testid='test-contact-error-message']")
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    successMsg.hidden = true;

    // Reset errors
    Object.values(errors).forEach((el) => (el.textContent = ""));

    // Validate Full Name
    if (nameField.value.trim() === "") {
      errors.name.textContent = "Full name is required.";
      nameField.setAttribute("aria-describedby", "test-contact-error-name");
      isValid = false;
    }

    // Validate Email
    if (emailField.value.trim() === "") {
      errors.email.textContent = "Email is required.";
      emailField.setAttribute("aria-describedby", "test-contact-error-email");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      errors.email.textContent = "Enter a valid email address (e.g. name@example.com).";
      emailField.setAttribute("aria-describedby", "test-contact-error-email");
      isValid = false;
    }

    // Validate Subject
    if (subjectField.value.trim() === "") {
      errors.subject.textContent = "Subject is required.";
      subjectField.setAttribute("aria-describedby", "test-contact-error-subject");
      isValid = false;
    }

    // Validate Message
    if (messageField.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters long.";
      messageField.setAttribute("aria-describedby", "test-contact-error-message");
      isValid = false;
    }

    // Success Message
    if (isValid) {
      successMsg.hidden = false;
      successMsg.textContent = "✅ Thank you! Your message has been sent successfully.";
      form.reset();

      // Optionally auto-hide success message after 3 seconds
      setTimeout(() => {
        successMsg.hidden = true;
      }, 3000);
    }
  });
});
