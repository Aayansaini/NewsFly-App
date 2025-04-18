import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle sending email using a backend or service like EmailJS
    alert(`News updates will be sent to: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-content obj-width">
        <h2>📩 Stay Updated</h2>
        <p>Subscribe to get tech news delivered straight to your inbox.</p>
        <form onSubmit={handleSubmit} className="email-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <p className="copyright">© 2025 NewsFly | Made with 🤍</p>
      </div>
    </footer>
  );
}

export default Footer;
