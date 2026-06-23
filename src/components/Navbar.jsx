import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const solid = scrolled || pathname !== "/";

  return (
    <>
      <nav className={`navbar ${solid ? "navbar--solid" : ""}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            5PM <span>HOTEL</span>
          </Link>

          <div className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`navbar__link ${pathname === item.to ? "navbar__link--active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="btn btn--gold btn--sm navbar__cta">
            Enquire
          </Link>

          <button className="navbar__toggle" onClick={handleOpen} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="navbar__mobile">
          <div className="navbar__mobile-top">
            <span className="navbar__mobile-logo">5PM <span>HOTEL</span></span>
            <button className="navbar__mobile-close" onClick={handleClose} aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <div className="navbar__mobile-links">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`navbar__mobile-link ${pathname === item.to ? "navbar__mobile-link--active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a href="https://wa.me/254722867400" className="navbar__mobile-whatsapp">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}