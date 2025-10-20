# Stage 1 Task — Multi-Page Frontend Project  
**Author:** Jason Nanayaw Owusu  
**Project Type:** Frontend Development (HTML, CSS, JavaScript)  

---

## 🚀 Overview
This project is part of the **HNG Internship Stage 1** challenge.  
It extends the Stage 0 single-page profile card into a **multi-page application** with the following pages:

1. **Profile Page (`profile.html`)** – Displays a styled personal profile card.  
2. **About Me Page (`about.html`)** – Reflective page with structured sections.  
3. **Contact Us Page (`contact.html`)** – A form with validation and accessibility features.

Each page follows **semantic HTML**, **responsive design**, and includes **data-testid** attributes for testing and evaluation.

---

## 🧩 File Structure



---

## 🧠 Features

### ✅ Profile Page
- Displays profile image, name, bio, hobbies, dislikes, and social links.
- Live time display (updates every second).
- Responsive and accessible layout.

### ✅ About Me Page
- Sections:
  - Bio (`test-about-bio`)
  - Goals (`test-about-goals`)
  - Areas of low confidence (`test-about-confidence`)
  - Note to future self (`test-about-future-note`)
  - Extra thoughts (`test-about-extra`)
- Proper heading structure and semantic markup.

### ✅ Contact Us Page
- Includes a working form with validation.
- Fields:
  - Full name (`test-contact-name`)
  - Email (`test-contact-email`)
  - Subject (`test-contact-subject`)
  - Message (`test-contact-message`)
- Validation rules:
  - All fields required.
  - Valid email format.
  - Message must be at least 10 characters.
- Displays:
  - Error messages (`test-contact-error-<field>`)
  - Success message (`test-contact-success`)
- Fully accessible using labels, `aria-describedby`, and keyboard navigation.

---

## ♿ Accessibility
- Semantic elements (`header`, `main`, `section`, `footer`).
- Form inputs are associated with labels.
- ARIA attributes for error and success states.
- Fully keyboard-navigable.

---

## 📱 Responsiveness
- Built with flexible layouts and media queries.  
- Works across mobile, tablet, and desktop viewports.

---

## ⚙️ How to Run Locally
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/stage1-project.git
   cd stage1-project
