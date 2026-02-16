# Snake Game

A small, responsive JavaScript Snake game (single-file) — now with high‑DPI canvas, mobile swipe + on‑screen controls, persistent high score, sound effects, and difficulty levels.

## Features
- Smooth, crisp rendering on Retina / high-DPI displays
- Keyboard (Arrow / WASD) + touch swipe + on-screen buttons
- High score saved in `localStorage`
- Pause-on-tab switch to avoid accidental deaths
- Sound effects (eat, move, start, level, game over) — toggleable in settings with a volume slider
- Difficulty levels: Easy / Normal / Hard (adjusts game speed)
- Gamepad support (D-pad + left stick) and improved keyboard accessibility
- Background music (toggleable) + richer SFX pack and master volume
- New: choose between `modern` (synth) or `retro` (chiptune beeps) SFX packs, or set `Silent` — and you can load a custom background music file via the **Music (URL)** field in Settings (falls back to built-in synth if no URL is provided).
- Privacy-friendly, opt‑in analytics and social share (no external tracking by default)

## Controls
- Keyboard: Arrow keys or WASD
- Mobile: Swipe or use the on-screen arrows
- UI buttons: Start / Pause, New Game
- Settings: toggle sound and choose difficulty

## Tests & CI
- Frontend smoke test (headless, Puppeteer) validates the main UI elements and runs in CI. Run locally with:
  1) npm start
  2) npm run test:frontend

## Publish
1. Use the included `index.html` as the entry point.
2. Deploy the static files to GitHub Pages / Netlify / Vercel or host them on any static server.

Quick local preview:
```bash
npm start
# open http://localhost:8080/ or http://localhost:8080/index.html
```

---

## Leaderboard (local)
- Scores are stored locally in `localStorage` by default; the game supports optional remote leaderboards if you provide a `/scores` endpoint in settings.
- This repository no longer includes an example server — the client is fully functional as a static site.

## License
MIT — see `LICENSE` file.

## License
MIT — see `LICENSE` file.
