import { PageHero, Eyebrow, GoldRule } from "../components/UI.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMG } from "../content/images.js";

const VALUES = [
  {
    title: "Mission",
    desc: "To offer warm, attentive hospitality that feels personal.",
  },
  {
    title: "Vision",
    desc: "To be known for quiet detail, genuine warmth, and spaces that work as hard as their guests do.",
  },
  {
    title: "Values",
    desc: "Craft over scale. Warmth over formality. Flexibility over rigidity. Every space at 5PM is designed to adapt to the people in it.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="Our Story"
        title="About 5PM Hotel"
        subtitle="Named for the hour the light turns gold over Thome — our founding idea, made literal."
        img={IMG.about}
      />

      <section className="container about-story">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="section-heading">
            Built on a simple belief that small, done exceptionally well, is better than big, done geneically.
          </h2>
          <p>
           Nestled in the tranquil neighborhood of Thome, just off Nairobi's Northern Bypass,
           5PM Hotel is a boutique destination where comfort, connection, and memorable experiences 
           come together. With 36 thoughtfully designed rooms across four categories;
           Single, Twin, Convertible, and Triple, we offer welcoming spaces for families,
            business travelers, couples, and groups seeking personalized hospitality.
          </p>
          <p>
            The name comes from golden hour: that moment just before sunset when the light
            softens and everything, even an ordinary evening, feels a little more special.
            We try to make every guest feel like they've arrived at theirs.
          </p>
          <p>
            Beyond rooms, 5PM is a full venue destination. The hotel features versatile
            event spaces  the expansive Aurora Garden, elegant indoor halls ALBA and ZORA,
            the tented outdoor SAHARA, the ASTRA bar, LUNA lounge, and five private gazebos
            (Tropical, Sunset, Zenith, Eclipse, Solana) each fitted with personal grills
            for intimate cookouts and gatherings.
          </p>
          <p>
            With secure parking for up to 72 vehicles, high-speed internet, and full event
            support services, 5PM Hotel caters seamlessly for both casual stays and
            professional events.
          </p>
          <p>
            At 5PM Hotel, every guest is welcomed like family,every moment is valued,
            and every visit becomes more than just a stay.
          </p>
        </Reveal>
      </section>

      <section className="about-values">
        <div className="container about-values__grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div>
                <GoldRule />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VENUE NAMES */}
      <section className="section section--cream">
        <div className="container">
          <Reveal>
            <Eyebrow>Our Venues</Eyebrow>
            <h2 className="section-heading">Every Space Has a Name</h2>
          </Reveal>
          <div className="about-venues">
            {[
              { name: "ALBA", role: "Main Conference Hall" },
              { name: "ZORA", role: "Upstairs Restaurant" },
              { name: "SAHARA", role: "Outdoor Tent Area" },
              { name: "AURORA", role: "The Garden" },
              { name: "ASTRA", role: "Bar & Lounge" },
              { name: "LUNA", role: "Lounge" },
              { name: "Tropical", role: "Private Gazebo" },
              { name: "Sunset", role: "Private Gazebo" },
              { name: "Zenith", role: "Private Gazebo" },
              { name: "Eclipse", role: "Private Gazebo" },
              { name: "Solana", role: "Private Gazebo" },
            ].map((v, i) => (
              <Reveal key={v.name} delay={i * 0.04}>
                <div className="about-venue-chip">
                  <span>{v.name}</span>
                  <small>{v.role}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container about-photos">
        <Reveal>
          <img src={IMG.exterior} alt="Hotel exterior" />
        </Reveal>
        <Reveal delay={0.1}>
          <img src={IMG.lobby} alt="Hotel lobby" />
        </Reveal>
      </section>
    </div>
  );
}
