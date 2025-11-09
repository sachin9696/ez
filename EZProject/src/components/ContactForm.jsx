import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    setSubmitMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setSubmitMessage("Form Submitted");
        setFormData({ email: "", name: "", phone: "", message: "" });
        setErrors({});
      } else {
        setSubmitMessage("Submission failed. Please try again.");
      }
    } catch {
      setSubmitMessage("Network error. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}

        <textarea
          name="message"
          placeholder="Message *"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" className="submit-btn">
          Submit
        </button>

        {submitMessage && (
          <p
            className={
              submitMessage === "Form Submitted"
                ? "success-msg"
                : "error-msg"
            }
            role="alert"
          >
            {submitMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
