import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Check } from "lucide-react";
import { PageHero, Eyebrow, Btn } from "../components/UI.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMG } from "../content/images.js";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Address", val: "Off Northern Bypass, Thome, Nairobi, Kenya" },
  { icon: Phone, label: "Phone", val: "+254 722867400" },
  { icon: Mail, label: "Email", val: "operations@5pm.co.ke" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: this is a front-end-only demo. Wire this up to your form
    // backend of choice (Formspree, a serverless function, etc.)
    // before relying on it to actually deliver messages.
    setSent(true);
  };

  return (
    <div className="contact-page">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We're off the Northern Bypass in Thome, Nairobi — easy to find, hard to forget."
        img={IMG.map}
      />

      <section className="container contact-grid split-grid">
        <Reveal>
          <div>
            <Eyebrow>Reach Us</Eyebrow>
            <h2 className="section-heading">Visit or Call</h2>

            <div className="contact-details">
              {CONTACT_DETAILS.map((c) => (
                <div key={c.label} className="contact-detail">
                  <c.icon size={20} color="var(--maroon-500)" />
                  <div>
                    <div className="contact-detail__label">{c.label}</div>
                    <div className="contact-detail__value">{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/254722867400"
              target="_blank"
              rel="noreferrer"
              className="contact-whatsapp"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>

            <div className="contact-map">
              <img src={IMG.map} alt="Map location" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact-form">
            {sent ? (
              <div className="contact-form__success">
                <Check size={32} color="var(--maroon-500)" />
                <p>Thanks, {form.name || "there"} — we'll respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form__fields">
                <div>
                  <label>Full Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                  />
                </div>
                <Btn variant="primary">Send Message</Btn>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
