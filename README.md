# Frontend Mentor — Intro Component with Sign Up Form

A responsive sign-up form component built as a solution to the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

---

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Resources](#resources)
- [Author](#author)

---

## Overview

### 🎯 The Challenge

Users should be able to:

- View an optimal layout depending on their device's screen size
- See hover and focus states for all interactive elements
- Receive validation errors when submitting the form if:
  - Any field is left empty → *"[Field] cannot be empty"*
  - The email address is not formatted correctly → *"Looks like this is not an email"*

### Links

- **Solution URL:** [Solution link](https://github.com/ShubhangiMishra215/Intro-component-with-sign-up-form.git)
- **Live Site URL:** [live site URL]( https://shubhangimishra215.github.io/Intro-component-with-sign-up-form/)

---

## My Process

### ⚙️ Built With

- [React](https://react.dev/) — UI library with functional components and hooks
- Mobile-first responsive design
- Custom form validation using React state

---

### 💡 What I Learned

**Controlled components** — managing every input through React state made validation straightforward and predictable.

```jsx
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
```

**Reusable input components** — abstracting each field into a shared component kept the form logic clean and avoided repetition.

**Conditional error rendering** — showing and hiding error messages based on validation state without any external library.

---

### 🚀 Continued Development

- Add stronger email regex and password strength rules
- Animate error messages (shake / fade-in effect)
- Improve accessibility with ARIA labels and better focus management
- Write unit tests for form validation logic

---

### 📚 Resources

- [React Docs — Forms](https://react.dev/learn) — hooks and controlled components
- [Lucide React](https://lucide.dev) — icon library used for error indicators

---

## 👤 Author

- Frontend Mentor — [ShubhangiMishra215](https://www.frontendmentor.io/profile/ShubhangiMishra215)
- GitHub — [ShubhangiMishra215](https://github.com/ShubhangiMishra215)