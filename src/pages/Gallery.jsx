import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "../components/UI.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMG } from "../content/images.js";

const ITEMS = [
  { img: IMG.roomSuite, cat: "Rooms" },
  { img: IMG.exterior, cat: "Exterior" },
  { img: IMG.dining1, cat: "Dining" },
  { img: IMG.event1, cat: "Events" },
  { img: IMG.gallery1, cat: "Rooms" },
  { img: IMG.lobby, cat: "Exterior" },
  { img: IMG.gallery2, cat: "Dining" },
  { img: IMG.wedding, cat: "Events" },
  { img: IMG.gallery3, cat: "Rooms" },
  { img: IMG.pool, cat: "Exterior" },
  { img: IMG.gallery4, cat: "Dining" },
  { img: IMG.conference, cat: "Events" },
  { img: IMG.spa, cat: "Exterior" },
  { img: IMG.gallery5, cat: "Rooms" },
  { img: IMG.gallery6, cat: "Dining" },
  { img: IMG.gym, cat: "Exterior" },
];

const CATS = ["All", "Rooms", "Exterior", "Events"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  return (
    <div className="gallery-page">
      <PageHero
        eyebrow="Gallery"
        title="A Visual Tour"
        subtitle="Rooms, grounds, dining, and gatherings — a glimpse before you arrive."
        img={IMG.gallery1}
      />

      <section className="container gallery-section">
        <Reveal>
          <div className="gallery-filters">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`gallery-filter ${filter === c ? "gallery-filter--active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <Reveal key={`${item.cat}-${i}`} delay={(i % 8) * 0.05}>
              <button
                className={`gallery-cell ${i % 5 === 0 ? "gallery-cell--tall" : ""}`}
                onClick={() => setLightbox(item)}
                aria-label={`View ${item.cat} photo`}
              >
                <img src={item.img} alt={item.cat} />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.img} alt={lightbox.cat} />
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
