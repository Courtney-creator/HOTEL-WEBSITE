# 5PM Hotel — Website (Concept)

A boutique luxury hotel showcase site for 5PM Hotel, Nairobi. Built with
React + Vite + React Router. Pure showcase — no booking engine, just a
single contact form on the Contact page.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command:
   `npm run build`. Output directory: `dist`.
4. Deploy.

## Replacing placeholder images

All images are Unsplash placeholders, defined in one place:
`src/content/images.js`. To use real photos:

1. Drop your image files into `src/assets/`.
2. In `images.js`, replace a value like:
   ```js
   roomSuite: u("photo-1582719508461-905c673771fd", 900, 900),
   ```
   with an import at the top of the file and the imported variable:
   ```js
   import roomSuiteJpg from "../assets/room-suite.jpg";
   // ...
   roomSuite: roomSuiteJpg,
   ```

## Editing content

- Room details: `src/pages/Rooms.jsx` (the `ROOMS` array)
- Menu items: `src/pages/Dining.jsx` (the `MENU` array)
- Event spaces: `src/pages/Events.jsx` (the `SPACES` array)
- Contact details / phone / WhatsApp number: appears in
  `src/components/Footer.jsx`, `src/components/WhatsAppFloat.jsx`, and
  `src/pages/Contact.jsx` — search for `254700000000` and
  `stay@5pmhotel.co.ke` to update everywhere at once.

## Contact form

The form on `/contact` is currently front-end only (it doesn't send
anywhere). To make it functional, wire it up to a form backend such as
Formspree, Web3Forms, or a small serverless function — `handleSubmit` in
`src/pages/Contact.jsx` is the only place that needs to change.

## Notes

- This was built and code-reviewed in a sandboxed environment without
  network access, so `npm install` / `npm run build` have not been run
  end-to-end here. Run `npm install && npm run dev` first thing to catch
  anything that needs fixing.
