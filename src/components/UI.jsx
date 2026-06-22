import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";

export function Eyebrow({ children, dark }) {
  return (
    <div className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>
      <span className="eyebrow__line" />
      <span className="eyebrow__text">{children}</span>
    </div>
  );
}

export function GoldRule({ center }) {
  return <div className={`gold-rule ${center ? "gold-rule--center" : ""}`} />;
}

export function Btn({ children, variant = "primary", to, href, onClick, small, style }) {
  const classes = `btn btn--${variant.replace(/([A-Z])/g, "-$1").toLowerCase()} ${small ? "btn--sm" : ""}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes} style={style}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

export function PageHero({ eyebrow, title, subtitle, img }) {
  return (
    <section className="page-hero">
      <img src={img} alt={title} className="page-hero__img" />
      <div className="page-hero__overlay" />
      <div className="page-hero__content container">
        <Reveal>
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__subtitle">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
