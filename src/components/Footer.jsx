import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              5PM <span>Hotel</span>
            </div>
            <p className="footer__about">
              A boutique sanctuary off the Northern Bypass, Thome, Nairobi; where every stay becomes a story.
            </p>
          </div>

          <div>
            <div className="footer__heading">Explore</div>
            {[
              { to: "/rooms", label: "Rooms" },
              { to: "/events", label: "Events" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="footer__link">
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <div className="footer__heading">Contact</div>
            <div className="footer__text">Northern Bypass, Thome, Nairobi</div>
            <div className="footer__text">+254 722867400</div>
            <div className="footer__text">operations@5pm.co.ke</div>
          </div>

          <div>
            <div className="footer__heading">Newsletter</div>
            <p className="footer__text footer__text--tight">
              Stays and stories from 5PM, occasionally.
            </p>
            <div className="footer__newsletter">
              <input placeholder="Your email" />
              <ChevronRight size={18} color="var(--gold)" />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} 5PM Hotel, Nairobi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
