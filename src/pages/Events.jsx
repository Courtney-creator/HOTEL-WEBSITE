import { Heart, Cake, Baby, Music, Star, Users, Monitor, Presentation, Coffee, TreePine, Tent } from "lucide-react";
import { PageHero, Eyebrow, Btn } from "../components/UI.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMG } from "../content/images.js";

/* ── EVENTS ── */
const EVENTS = [
  { icon: Heart, title: "Weddings", desc: "Say your vows in the Aurora Garden or under the Sahara tent - elegant setups for up to 148 guests with full decor and catering support." },
  { icon: Cake, title: "Birthday Celebrations", desc: "Balloon garlands, themed signage, dessert table styling, ambient fairy lights, and a Bluetooth sound system. Your celebration, fully dressed." },
  { icon: Baby, title: "Baby Showers", desc: "Intimate themed gatherings in LUNA Lounge or a private gazebo - styled with florals, welcome signage, and personalized touches." },
  { icon: Music, title: "Live Events & Parties", desc: "ASTRA bar hosts networking events and informal parties with cocktails and live music. SAHARA tent handles larger outdoor crowds." },
  { icon: Star, title: "Product Launches", desc: "Aurora Garden is best for high-impact launches and banquets - open-air, expansive, and professionally managed." },
  { icon: TreePine, title: "Private Gazebo Events", desc: "Each of the five gazebos (Tropical, Sunset, Zenith, Eclipse, Solana) comes with a personal grill - perfect for intimate BBQ evenings." },
];

/* ── CONFERENCES ── */
const CONFERENCES = [
  {
    img: IMG.conference,
    name: "ALBA",
    sub: "Main Conference Hall",
    desc: "Our largest indoor space  purpose-built for conferences, training sessions, and large meetings. Full AV setup, natural light, and flexible seating arrangements.",
    features: ["Up to 120 delegates", "Full AV & presentation tech", "Natural light", "Catering available"],
  },
  {
    img: IMG.event1,
    name: "SAHARA",
    sub: "Outdoor Tent Area",
    desc: "A large tented outdoor space ideal for seminars, exhibitions, and team-building events that need open-air scale without sacrificing structure.",
    features: ["Large-scale outdoor capacity", "Tented structure", "Flexible layout", "Ideal for team-building"],
  },
  {
    img: IMG.dining2,
    name: "ZORA",
    sub: "Upstairs Restaurant",
    desc: "A refined indoor venue for formal workshops, hybrid events, and executive dinners. Combines the professionalism of a boardroom with restaurant-quality dining.",
    features: ["Formal workshop setup", "Hybrid-ready", "Fine dining", "Private & elevated"],
  },
];

/* ── MEETINGS ── */
const MEETINGS = [
  {
    name: "LUNA",
    sub: "Lounge",
    desc: "Our most intimate indoor space  nideal for VIP meetings, private planning sessions, and small team briefings. Quiet, comfortable, discreet.",
    capacity: "Up to 12 guests",
  },
  {
    name: "ASTRA",
    sub: "Bar Area",
    desc: "Relaxed but professional  great for informal meetings, networking, and catch-ups over drinks. The bar setting keeps things conversational.",
    capacity: "Small groups",
  },
  {
    name: "Gazebo: Tropical",
    sub: "Private Garden Gazebo",
    desc: "A secluded outdoor gazebo with a personal grill. Perfect for a working lunch or a small team session in the garden.",
    capacity: "4–8 guests",
  },
  {
    name: "Gazebo: Sunset",
    sub: "Private Garden Gazebo",
    desc: "Evening light and privacy great for informal client meetings or end-of-day team wind-downs with food from the grill.",
    capacity: "4–8 guests",
  },
  {
    name: "Gazebo: Zenith",
    sub: "Private Garden Gazebo",
    desc: "Midday meeting space in a shaded outdoor setting. Focused and away from the main hotel buzz.",
    capacity: "4–8 guests",
  },
  {
    name: "Gazebo: Eclipse",
    sub: "Private Garden Gazebo",
    desc: "A private breakout space for smaller teams or creative sessions in the open air.",
    capacity: "4–8 guests",
  },
  {
    name: "Gazebo: Solana",
    sub: "Private Garden Gazebo",
    desc: "The sunniest of our gazebos bright, airy, and completely private for your session.",
    capacity: "4–8 guests",
  },
];

export default function Events() {
  return (
    <div className="events-page">
      <PageHero
        eyebrow="Events, Conferences & Meetings"
        title="A Space for Every Occasion"
        subtitle="From intimate gazebo meetings to garden weddings and full-scale conferences 5PM has you covered."
        img={IMG.event1}
      />

      {/* ── SECTION 1: EVENTS ── */}
      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <Eyebrow>Celebrations</Eyebrow>
            <h2 className="section-heading">Events</h2>
            <p className="events-section-intro">
              Weddings, birthdays, baby showers, product launches  we handle the space,
              the styling, and the details so you can enjoy the moment.
            </p>
          </Reveal>

          <div className="events-card-grid">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.07}>
                <div className="events-card">
                  <e.icon size={24} color="var(--maroon-500)" strokeWidth={1.5} />
                  <h3>{e.title}</h3>
                  <p>{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Event styling callout */}
          <Reveal delay={0.15}>
            <div className="events-styling-box">
              <div className="events-styling-box__label">
                <Sparkle /> Event Styling Available
              </div>
              <div className="events-styling-box__items">
                {[
                  "Themed birthday / baby shower styling",
                  "Balloon garlands, themed signage & florals",
                  "Cake/dessert table with stands",
                  "Personalized welcome signage",
                  "Ambient lighting — fairy lights & lanterns",
                  "Bluetooth sound system (outdoor)",
                ].map((item) => (
                  <span key={item}>✦ {item}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="events-cta-inline">
              <Btn variant="primary" to="/contact">Enquire About Your Event</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: CONFERENCES ── */}
      <section className="section section--maroon">
        <div className="container">
          <Reveal>
            <Eyebrow dark>Professional</Eyebrow>
            <h2 className="section-heading section-heading--light">Conferences</h2>
            <p className="events-section-intro events-section-intro--light">
              Three distinct conference-grade venues with full AV, catering, and support
              services  sized for everything from 20 to 120+ delegates.
            </p>
          </Reveal>

          <div className="conf-grid">
            {CONFERENCES.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div className="conf-card">
                  <div className="conf-card__image">
                    <img src={c.img} alt={c.name} />
                  </div>
                  <div className="conf-card__body">
                    <span className="conf-card__name">{c.name}</span>
                    <span className="conf-card__sub">{c.sub}</span>
                    <p>{c.desc}</p>
                    <ul>
                      {c.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Btn variant="outline" to="/contact" small>Enquire</Btn>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MEETINGS ── */}
      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <Eyebrow>Intimate Spaces</Eyebrow>
            <h2 className="section-heading">Meetings</h2>
            <p className="events-section-intro">
              LUNA lounge, ASTRA bar, and five private garden gazebos - each suited to
              smaller groups who need focus, privacy, and a relaxed setting.
            </p>
          </Reveal>

          <div className="meetings-grid">
            {MEETINGS.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="meeting-card">
                  <div className="meeting-card__header">
                    <span className="meeting-card__name">{m.name}</span>
                    <span className="meeting-card__capacity">{m.capacity}</span>
                  </div>
                  <span className="meeting-card__sub">{m.sub}</span>
                  <p>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="events-cta-inline">
              <Btn variant="primary" to="/contact">Book a Meeting Space</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* tiny inline icon helper */
function Sparkle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
