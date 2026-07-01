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

       
      </section>
    </div>
  );
}
