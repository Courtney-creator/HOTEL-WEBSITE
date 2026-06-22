import { Link } from "react-router-dom";
import { Wifi, Car, Coffee, Sparkles, Users, Utensils, TreePine } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { Eyebrow, Btn } from "../components/UI.jsx";
import { IMG } from "../content/images.js";

const ROOM_TYPES = [
  { type: "Single Rooms", count: "11", desc: "Comfortable solo stays with all essentials." },
  { type: "Twin Rooms", count: "6", desc: "Two beds, ideal for colleagues or friends." },
  { type: "Convertible Rooms", count: "15", desc: "Flexible layout for single or double use." },
  { type: "Triple Rooms", count: "4", desc: "Spacious rooms for small groups or families." },
];

const VENUES_OVERVIEW = [
  { name: "ALBA", sub: "Main Conference Hall", desc: "Ideal for conferences, training sessions, and large meetings." },
  { name: "ZORA", sub: "Upstairs Restaurant", desc: "Perfect for formal workshops, power lunches, or romantic dinners." },
  { name: "SAHARA", sub: "Outdoor Tent Area", desc: "Great for large outdoor events, seminars, and team-building." },
  { name: "AURORA", sub: "Garden", desc: "Best for major events like product launches, open-air meals, and banquets." },
  { name: "ASTRA", sub: "Bar Area", desc: "Ideal for networking events, cocktails, and informal meetings." },
  { name: "LUNA", sub: "Lounge", desc: "Intimate space for VIPs, private meetings, or planning sessions." },
];

const AMENITIES = [
  { icon: Wifi, label: "High-Speed Internet", desc: "Fast, reliable Wi-Fi throughout the property" },
  { icon: Car, label: "Secure Parking", desc: "Space for up to 72 vehicles on-site" },
  { icon: Utensils, label: "All-Day Dining", desc: "ZORA restaurant, ASTRA bar, garden and gazebo dining" },
  { icon: TreePine, label: "Aurora Garden", desc: "Serene open-air space for meals and events" },
  { icon: Users, label: "Event Support", desc: "Full support services for stays and professional events" },
  { icon: Sparkles, label: "Event Styling", desc: "Themed decor, balloon garlands, ambient lighting and more" },
];

const OFFERS = [
  { title: "Golden Hour Getaway", desc: "Stay three nights, the third is on us.", tag: "Save 33%" },
  { title: "Weekend in Thome", desc: "Friday to Sunday stays with late checkout.", tag: "Save 15%" },
  { title: "Garden Romance", desc: "Room upgrade, sparkling wine, garden dinner.", tag: "Couples" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <img src={IMG.heroExterior} alt="5PM Hotel exterior" className="hero__img" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <Reveal>
            <div className="hero__location">Thome · Nairobi, Kenya</div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="hero__title">
              5PM <span>Hotel</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="hero__tagline">
              Where every hour feels like golden hour: 36 rooms, world-class venues,
              and hospitality that feels personal.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
          </Reveal>
        </div>
        <div className="hero__scrollline" />
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="container stats-strip__grid">
          {[
            { num: "36", label: "Tastefully Furnished Rooms" },
            { num: "148", label: "Guests Accommodated" },
            { num: "72", label: "Secure Parking Spaces" },
            { num: "11+", label: "Distinct Venues and Spaces" },
          ].map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__num">{s.num}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="section section--cream">
        <div className="container home-about">
          <div className="home-about__text">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="section-heading">
                A boutique address off the Northern Bypass, Where every Stay
                becomes a Story.
              </h2>
              <p>
                5PM Hotel takes its name from golden hour, that moment just before sunset
                when the light softens and everything feels a little more special. Located
                in Thome off the Northern Bypass, Nairobi, we offer 36 tastefully furnished
                rooms accommodating up to 148 guests, alongside versatile event venues and
                diverse dining experiences.
              </p>
              <p>
                Whether you are here for a quiet overnight stay, a high-stakes conference,
                a wedding, or a birthday celebration, 5PM is built to make every occasion
                feel exactly right. One philosophy: A Stay, A Story.
              </p>
              <Btn variant="outlineDark" to="/about">Read Our Full Story</Btn>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="home-about__img-wrap">
            <img src={IMG.exterior} alt="5PM Hotel" />
          </Reveal>
        </div>
      </section>

      {/* ROOMS OVERVIEW */}
      <section className="section section--deep-cream">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <div>
                <Eyebrow>Accommodation</Eyebrow>
                <h2 className="section-heading">36 Rooms, Four Categories</h2>
              </div>
              <Link to="/rooms" className="section-header__link">View All Rooms →</Link>
            </div>
          </Reveal>
          <div className="room-type-grid">
            {ROOM_TYPES.map((r, i) => (
              <Reveal key={r.type} delay={i * 0.08}>
                <Link to="/rooms" className="room-type-card">
                  <div className="room-type-card__image">
                    <img
                      src={[IMG.roomClassic, IMG.roomDeluxe, IMG.roomSuite, IMG.roomPenthouse][i]}
                      alt={r.type}
                    />
                  </div>
                  <div className="room-type-card__body">
                    <span className="room-type-card__count">{r.count} rooms</span>
                    <h3>{r.type}</h3>
                    <p>{r.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES OVERVIEW */}
      <section className="section section--maroon">
        <div className="container">
          <Reveal>
            <div className="section-header section-header--center">
              <Eyebrow dark>Spaces</Eyebrow>
              <h2 className="section-heading section-heading--light">
                Eleven Venues for Every Occasion
              </h2>
              <p className="venues-sub">
                From the expansive Aurora Garden to private gazebos with personal grills 
                5PM has a space for every kind of gathering.
              </p>
            </div>
          </Reveal>
          <div className="venue-overview-grid">
            {VENUES_OVERVIEW.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.07}>
                <div className="venue-overview-card">
                  <span className="venue-overview-card__name">{v.name}</span>
                  <span className="venue-overview-card__sub">{v.sub}</span>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="venues-gazebo-note">
              <span>+ Five Private Gazebos</span>
              <p>Tropical · Sunset · Zenith · Eclipse · Solana each with a personal grill, ideal for breakouts, small teams, and private cookouts.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <Btn variant="gold" to="/events">Explore Events and Conferences</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DINING PREVIEW */}
      <section className="section section--cream">
        <div className="container split-grid">
          <Reveal>
            <img src={IMG.dining1} alt="ZORA Restaurant" className="dining-preview__img" />
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow>Dining at 5PM</Eyebrow>
            <h2 className="section-heading">Four Ways to Eat and Drink</h2>
            <p className="dining-preview__text">
              ZORA upstairs for power lunches and romantic dinners. ASTRA bar for cocktails
              and live music. The Aurora Garden for serene open-air meals. Or book a private
              gazebo - each fitted with its own grill for barbecues and cozy cookouts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section section--deep-cream">
        <div className="container">
          <Reveal>
            <div className="section-header section-header--center">
              <Eyebrow>Facilities</Eyebrow>
              <h2 className="section-heading">Everything, Considered</h2>
            </div>
          </Reveal>
          <div className="amenity-grid">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.08}>
                <div className="amenity amenity--light">
                  <a.icon size={28} color="var(--maroon-500)" strokeWidth={1.3} />
                  <h4>{a.label}</h4>
                  <p>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <div className="section-header section-header--center">
              <Eyebrow>Offers</Eyebrow>
              <h2 className="section-heading">Special Offers</h2>
            </div>
          </Reveal>
          <div className="offer-grid">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.1}>
                <div className="offer-card">
                  <span className="offer-card__tag">{o.tag}</span>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
