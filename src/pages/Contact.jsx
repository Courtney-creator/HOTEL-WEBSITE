import { MapPin, Phone, Mail, MessageCircle, Instagram, Check } from "lucide-react";
import { PageHero, Eyebrow, Btn } from "../components/UI.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMG } from "../content/images.js";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Address", val: "Off Northern Bypass, Thome, Nairobi, Kenya" },
  { icon: Phone, label: "Phone", val: "+254 722867400" },
  { icon: Mail, label: "Email", val: "operations@5pm.co.ke" },
];

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/fivepm_nairobi?igsh=cnFqaHlxbGFnemw3&utm_source=qr",
  tiktok: "https://www.tiktok.com/@fivepm_nairobi?_r=1&_t=ZS-9834IRz1KBm",
};

function TikTokIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.9-.83-1.46-2-1.6-3.3h-3.3v14.24c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.24 0 .48.03.7.09V10.7a6.19 6.19 0 0 0-.7-.04A6.15 6.15 0 0 0 2.83 16.8a6.15 6.15 0 0 0 6.15 6.15 6.15 6.15 0 0 0 6.15-6.15V9.28a9.44 9.44 0 0 0 5.52 1.77V7.75c-1.44 0-2.77-.48-3.85-1.29-.09-.06-.14-.13-.2-.19z" />
    </svg>
  );
}

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

            <div className="contact-social">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact-social__tab"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noreferrer"
                className="contact-social__tab"
              >
                <TikTokIcon size={18} /> TikTok
              </a>
            </div>

          
          </div>
        </Reveal>

       
      </section>
    </div>
  );
}

      
