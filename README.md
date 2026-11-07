# My Portfolio

One page listing everything I've built, grouped, with thumbnails.

- **Edit `sites.js`** to add, remove, regroup or describe sites. That's the only file you need to touch.
- **Thumbnails:** `./tools/thumbs.sh` grabs screenshots for any live site that doesn't have one yet (`--all` to redo every site, or pass ids like `./tools/thumbs.sh kidkalc`). Needs Google Chrome.
- **My view vs. shared view:** open the page with `#me` at the end of the address to see everything: sites that aren't live yet, ones marked `hidden`, private-repo locks, Code links and to-do notes. The device remembers it. Use `#public` (or the "See shared view" button) to switch back. The **Share** button always copies the plain link.
  - This only hides things on the page. Anyone who reads `sites.js` can still see every entry.
- **Preview locally:** `python3 -m http.server 8765`, then open http://localhost:8765
- **Opening apps:** apps on `junkerfamily.github.io` open inside the portfolio with a slim bar on top — tap **‹ Portfolio** to get back (Esc works on a computer). This matters on an iPhone home-screen icon, where those apps would otherwise take over the window. Apps on other addresses (Cloudflare etc.) still open in a new tab. Add `frame: true` or `frame: false` to a site in `sites.js` to override. Details in [OPENING-APPS.md](OPENING-APPS.md).
