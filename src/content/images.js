// All images are Unsplash placeholders for this concept build.
// To use real photos: drop files into /src/assets/ and replace each
// value below with an import, e.g. heroExterior: heroExteriorJpg
// (import heroExteriorJpg from "../assets/hero-exterior.jpg";)
const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMG = {
  heroExterior: "",
  exterior: "/5pm.jpeg",
  lobby: "/hall.jpeg",

  roomSuite: "/conv.jpeg",
  roomDeluxe: "/dbleroom.jpeg",
  roomClassic: "/sr.jpeg",
  roomPenthouse: "/tri.jpeg",

  dining1: "/zora.jpeg",
  dining2: "/zora.jpeg",
  dining3: "/conference.jpeg",
  plate1: "/child.jpeg",
  plate2: "chillzone.jpeg",
  bar: "/conv.jpeg",

  event1: "/fer.jpeg",
  event2: "/conference.jpeg",
  conference: "/conference.jpeg",
  wedding: "/zora.jpeg",

  pool: "/child.jpeg",
  spa: "/gardg.jpeg",
  gym: "/chillzone.jpeg",

  gallery1: "/dbleroom.jpeg",
  gallery2: "/entrance.jpeg",
  gallery3: "/hall.jpeg",
  gallery4: "/gardg.jpeg",
  gallery5: "/rooom.jpeg",
  gallery6: "/kidd.jpeg",

  about: "5pm.jpeg",
};
