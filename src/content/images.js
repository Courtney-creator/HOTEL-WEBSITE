// All images are Unsplash placeholders for this concept build.
// To use real photos: drop files into /src/assets/ and replace each
// value below with an import, e.g. heroExterior: heroExteriorJpg
// (import heroExteriorJpg from "../assets/hero-exterior.jpg";)
const cloud = "https://res.cloudinary.com/dirnd62qp/image/upload/v1782133035/55_urzyj8.jpg"
const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMG = {
  heroExterior: "/op.jpg",
  exterior: "/5pm.jpeg",
  lobby: "/hall.jpeg",
  exterior2: "/whole.jpeg",
  exterior3: "/frntdesk.jpeg",

  roomSuite: "/conv.jpeg",
  roomDeluxe: "/dbleroom.jpeg",
  roomClassic: "/singrom.jpeg",
  roomPenthouse: "/tri.jpeg",
  fronter: "/frontr.jpeg",
  frnt: "/frontroom",

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
  event3: "fdish.jpeg",
  event4: "eventt.jpeg",

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
