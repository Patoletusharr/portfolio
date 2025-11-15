"use client";

import { useState } from "react";
import { siteAuthor, socialLinks } from "@/data/siteData";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Currently this is a frontend-only form.
    // TO MAKE IT FUNCTIONAL:
    // 1. Create an API route at /app/api/contact/route.js
    // 2. Use fetch() to POST form data to that API
    // 3. From the API route, send emails (e.g. via SendGrid, Resend) or store in DB
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Contact</h1>
        <p className="text-dark-muted">Get in touch for opportunities, collaborations, or questions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-dark-text focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-dark-text focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-dark-text focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover:shadow-glow transition-all"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-sm text-accent text-center">
                Form captured locally. Connect to an API to send emails.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-dark-muted mb-1">Email</p>
                  <a
                    href={`mailto:${siteAuthor.email}`}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {siteAuthor.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-sm text-dark-muted mb-1">Phone</p>
                  <a
                    href={`tel:${siteAuthor.phone}`}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {siteAuthor.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-dark-muted mb-1">Location</p>
                  <p className="text-dark-text">{siteAuthor.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Connect on Social</h2>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 px-4 py-3 bg-dark-card border border-dark-border rounded-xl hover:border-primary/50 transition-all group"
                >
                  <span className="text-xl">{getSocialIcon(link.icon)}</span>
                  <span className="text-sm text-dark-text group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Comment */}
      {/* TO MAKE THE FORM FUNCTIONAL:
          1. Create /app/api/contact/route.js
          2. Install an email service SDK (e.g., npm install @sendgrid/mail or resend)
          3. In the API route, receive the form data and send an email
          4. Update the handleSubmit function above to POST to /api/contact
      */}
    </div>
  );
}

function getSocialIcon(iconName) {
  const icons = {
    github: "🔗",
    linkedin: "💼",
    mail: "📧",
    phone: "📱",
  };
  return icons[iconName] || "🔗";
}
