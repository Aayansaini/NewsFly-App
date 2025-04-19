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
        <div className="section1">
        <h2>📩 Stay Updated</h2>
        <br />
        <p>Subscribe to get tech news delivered straight to your inbox.</p>
        </div>
        <div className="section2">
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
        <br />
        <p className="copyright">© 2025 NewsFly | Found by Aayan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
