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
    <div className="space-y-12">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Contact</h1>
        <p className="text-dark-text text-lg">Get in touch for opportunities, collaborations, or questions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="glass-card rounded-2xl p-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark-text mb-3 tracking-wide">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-5 py-4 glass rounded-xl text-dark-text placeholder:text-dark-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark-text mb-3 tracking-wide">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-4 glass rounded-xl text-dark-text placeholder:text-dark-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-dark-text mb-3 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-4 glass rounded-xl text-dark-text placeholder:text-dark-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300 tracking-wide"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-sm text-accent text-center font-medium animate-fade-in">
                Form captured locally. Connect to an API to send emails.
              </p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 animate-slide-up">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📧</span>
                <div>
                  <p className="text-xs text-dark-muted mb-2 uppercase tracking-wider font-semibold">Email</p>
                  <a
                    href={`mailto:${siteAuthor.email}`}
                    className="text-primary hover:text-accent transition-colors font-medium text-lg"
                  >
                    {siteAuthor.email}
                  </a>
                </div>
              </div>

              <div className="premium-divider"></div>

              <div className="flex items-start gap-5 group">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📱</span>
                <div>
                  <p className="text-xs text-dark-muted mb-2 uppercase tracking-wider font-semibold">Phone</p>
                  <a
                    href={`tel:${siteAuthor.phone}`}
                    className="text-primary hover:text-accent transition-colors font-medium text-lg"
                  >
                    {siteAuthor.phone}
                  </a>
                </div>
              </div>

              <div className="premium-divider"></div>

              <div className="flex items-start gap-5 group">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📍</span>
                <div>
                  <p className="text-xs text-dark-muted mb-2 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-dark-text font-medium text-lg">{siteAuthor.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Connect on Social</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`flex items-center gap-4 px-5 py-4 glass rounded-xl hover:scale-105 hover:shadow-glow transition-all duration-300 group ${getSocialBrandColor(link.icon)}`}
                >
                  <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">{getSocialIcon(link.icon)}</span>
                  <span className="text-sm text-dark-text group-hover:text-white transition-colors font-semibold tracking-wide">
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

function getSocialBrandColor(iconName) {
  const colors = {
    github: "hover:bg-[#333]/20",
    linkedin: "hover:bg-[#0077b5]/20",
    mail: "hover:bg-primary/20",
    phone: "hover:bg-accent/20",
  };
  return colors[iconName] || "hover:bg-primary/20";
}
