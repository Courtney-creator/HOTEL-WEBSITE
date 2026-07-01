import { PageHero, Btn } from "../components/UI.jsx";
import Reveal from "../components/Reveal.jsx";
import { IMG } from "../content/images.js";

const ROOMS = [
  {
    img: IMG.roomClassic,
    name: "Single Rooms",
    count: "11 rooms",
    desc: "Thoughtfully designed for solo travellers - everything you need, nothing superfluous. Comfortable bed, work nook, and garden-facing window.",
    amenities: ["Single Bed", "Free Wi-Fi", "Rain Shower", "Daily Housekeeping","Coffee & Tea Tray"],
  },
  {
    img: IMG.roomDeluxe,
    name: "Twin Rooms",
    count: "6 rooms",
    desc: "Two well-appointed beds in a spacious, light-filled room. Perfect for colleagues, friends, or family travelling together.",
    amenities: ["Two Single Beds", "Free Wi-Fi", "Work Desk", "Daily Housekeeping", "Coffee & Tea Tray"],
  },
  {
    img: IMG.roomSuite,
    name: "Convertible Rooms",
    count: "15 rooms",
    desc: "Our most flexible option - the room adapts to whether you need a single or double layout. Ideal for solo guests who want more space, or couples.",
    amenities: ["Flexible Bed Layout", "Free Wi-Fi","Daily Housekeeping", "Coffee & Tea Tray"],
  },
  
];

export default function Rooms() {
  return (
    <div className="rooms-page">
      <PageHero
        eyebrow="Accommodation"
        title="Rooms"
        subtitle="36 tastefully furnished rooms across four categories, accommodating up to 148 guests; each designed around comfort and quiet detail."
        img={IMG.lobby}
      />

      <section className="container rooms-list">
        {ROOMS.map((r, i) => (
          <Reveal key={r.name} delay={0.05}>
            <div className={`room-row ${i % 2 === 1 ? "room-row--reverse" : ""}`}>
              <div className="room-row__image">
                <img src={r.img} alt={r.name} />
              </div>
              <div className="room-row__body">
                <span className="room-row__count">{r.count}</span>
                <span className="room-row__price">{r.name}</span>
                <p>{r.desc}</p>
                <div className="room-row__amenities">
                  {r.amenities.map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </div>
                <Btn variant="primary" to="/contact">
                  Enquire About This Room
                </Btn>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
