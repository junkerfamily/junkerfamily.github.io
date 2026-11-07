// ─────────────────────────────────────────────────────────────
//  Your portfolio list. This is the only file you need to edit.
//
//  Each site:
//    id       short unique name, also the thumbnail file name (thumbs/<id>.jpg)
//    name     display name
//    url      live link ("" if it isn't deployed yet)
//    repo     source code link (optional, shown only in "My view")
//    group    one of the group ids below
//    host     "github" | "cloudflare" | "firebase" | "local" | "other"
//    blurb    one line about it
//    tags     optional list of words for search
//    private  true if the repo is private (shows a lock in My view)
//    hidden   true to keep it out of the shared view (still shows in My view)
//    star     true to feature it at the top
//    todo     a note to yourself (shown only in My view)
//    added    "YYYY-MM" roughly when it was made (used for sorting)
//    frame    optional. true = open inside the portfolio with a "Portfolio" back bar,
//             false = open in a new tab. Default: true for junkerfamily.github.io apps.
//
//  After adding a site, run:  ./tools/thumbs.sh <id>   to grab its thumbnail.
// ─────────────────────────────────────────────────────────────

window.PORTFOLIO = {
  owner: "Dan Junker",
  tagline: "Games, tools and little apps I've built — mostly for family, friends and fun.",
  githubUser: "junkerfamily",

  groups: [
    { id: "escape", name: "Escape Rooms",       note: "A series of single-player, themed escape rooms." },
    { id: "kids",   name: "Kids & Learning",    note: "Made for the young ones." },
    { id: "games",  name: "Games & Puzzles",    note: "" },
    { id: "family", name: "Home & Family",      note: "Everyday helpers for the household." },
    { id: "tools",  name: "Tools & Calculators", note: "" },
  ],

  sites: [
    // ── Escape Rooms (Cloudflare Pages) ──
    { id: "hollow-manor", name: "The Hollow Manor", url: "https://hollow-manor.pages.dev", group: "escape", host: "cloudflare",
      blurb: "Halloween escape room — the one that started the series.", tags: ["halloween", "puzzle"], star: true, added: "2026-10" },
    { id: "thanksgiving-island", name: "Escape from Thanksgiving Island", url: "https://thanksgiving-island.pages.dev", group: "escape", host: "cloudflare",
      blurb: "Thanksgiving escape room, sibling to The Hollow Manor.", tags: ["thanksgiving", "puzzle"], added: "2026-10" },
    { id: "roadkill-kafe", name: "Escape the Roadkill Kafe", url: "https://roadkill-kafe.pages.dev", group: "escape", host: "cloudflare",
      blurb: "Escape a haunted 1950s roadside diner.", tags: ["diner", "puzzle"], added: "2026-10" },
    { id: "coffin-creek", name: "Showdown at Coffin Creek", url: "https://coffin-creek.pages.dev", group: "escape", host: "cloudflare",
      blurb: "Murder-mystery escape room on a frontier Main Street.", tags: ["western", "mystery", "puzzle"], added: "2026-11" },
    { id: "scrooges-last-christmas", name: "Scrooge's Last Christmas", url: "https://scrooges-last-christmas.pages.dev", group: "escape", host: "cloudflare",
      blurb: "Escape room built on Dickens's A Christmas Carol.", tags: ["christmas", "puzzle"], added: "2026-11" },
    { id: "escape-the-vexthal", name: "Escape the Vex'Thal", url: "https://escape-aliencraft.pages.dev", group: "escape", host: "cloudflare",
      blurb: "Alien abduction escape room — decode their glyphs and hack the captain's password.", tags: ["aliens", "space", "sci-fi", "puzzle"], added: "2026-11" },
    { id: "escape-room-trainer", name: "Escape Room Trainer", url: "https://junkerfamily.github.io/escape-room-trainer/", repo: "https://github.com/junkerfamily/escape-room-trainer", group: "escape", host: "github",
      blurb: "Quick-fire training: ciphers, locks, strategy and themes, with puzzles and hints.", tags: ["puzzle", "ciphers", "training"], added: "2026-11" },

    // ── Kids & Learning ──
    { id: "kidkalc", name: "KidKalc", url: "https://junkerfamily.github.io/KidKalc/", repo: "https://github.com/junkerfamily/KidKalc", group: "kids", host: "github",
      blurb: "A visual calculator — see the answer in dots, carrots, gardens and baskets.", tags: ["math"], star: true, added: "2026-11" },
    { id: "spaceship", name: "Explorer 1 Flight Deck", url: "https://junkerfamily.github.io/spaceship/", repo: "https://github.com/junkerfamily/spaceship", group: "kids", host: "github",
      blurb: "Pretend spaceship mission control for the iPad.", tags: ["space", "ipad", "pretend"], star: true, added: "2026-11" },
    { id: "wordy", name: "Wordy", url: "https://junkerfamily.github.io/Wordy/", repo: "https://github.com/junkerfamily/Wordy", group: "kids", host: "github",
      blurb: "Word trainer for kids.", tags: ["reading", "spelling"], added: "2026-04" },
    { id: "christmas-tree", name: "Christmas Tree Builder", url: "https://junkerfamily.github.io/ChristmasTree/", repo: "https://github.com/junkerfamily/ChristmasTree", group: "kids", host: "github", private: true,
      blurb: "Decorate your own Christmas tree.", tags: ["christmas"], added: "2025-12" },
    { id: "rocket-builder", name: "Rocket Builder", url: "", repo: "https://github.com/junkerfamily/RocketBuilder", group: "kids", host: "github", private: true, hidden: true,
      blurb: "Kid-level rocket building game with 3 difficulty levels.", tags: ["space"], added: "2025-03" },
    { id: "painttalk", name: "PaintTalk", url: "", group: "kids", host: "local", hidden: true,
      blurb: "Coloring pictures by theme. Lives on this Mac only (Projects/PaintTalk).", tags: ["art", "coloring"] },

    // ── Games & Puzzles ──
    { id: "saving-sabrina", name: "Saving Sabrina", url: "https://junkerfamily.github.io/SaveThePrincess/", repo: "https://github.com/junkerfamily/SaveThePrincess", group: "games", host: "github",
      blurb: "Climb a five-floor tower of crate, hammer and gargoyle puzzles to rescue the princess.", tags: ["puzzle", "princess", "tower", "sokoban"], added: "2026-11" },
    { id: "greed", name: "Greed", url: "https://junkerfamily.github.io/Greed/", repo: "https://github.com/junkerfamily/Greed", group: "games", host: "github", private: true,
      blurb: "Chase the leprechaun's gold — just don't lose it all.", tags: ["luck", "gold"], added: "2026-10" },
    { id: "wordfall", name: "Worder Fall", url: "https://junkerfamily.github.io/Wordfall/", repo: "https://github.com/junkerfamily/Wordfall", group: "games", host: "github", private: true,
      blurb: "Scrambled words fall and stack — unscramble the bottom one to zap it.", tags: ["words"], added: "2025-09" },
    { id: "tictac-rps", name: "TicTac-RPS", url: "https://junkerfamily.github.io/TicTac-RPS/", repo: "https://github.com/junkerfamily/TicTac-RPS", group: "games", host: "github",
      blurb: "Tic Tac Toe meets Rock Paper Scissors.", tags: ["strategy"], added: "2025-10" },
    { id: "joke-vault", name: "Joke Vault", url: "https://junkerfamily.github.io/joke-vault/", repo: "https://github.com/junkerfamily/joke-vault", group: "games", host: "github",
      blurb: "A vault full of jokes with lots of filter options.", tags: ["jokes", "fun"], added: "2025-09" },
    { id: "blackjack", name: "Blackjack", url: "", repo: "https://github.com/junkerfamily/blackjack", group: "games", host: "github", hidden: true,
      blurb: "Casino blackjack with fun money and auto mode. Needs its Flask server, so not on Pages.", tags: ["cards"], added: "2025-11" },
    { id: "rps-checkers", name: "RPS Checkers", url: "", repo: "https://github.com/junkerfamily/rps-checkers-game", group: "games", host: "github", private: true, hidden: true,
      blurb: "Rock Paper Scissors on a checkerboard, with strategy.", tags: ["strategy"], added: "2025-06" },
    { id: "sliding-puzzle", name: "Sliding Puzzle", url: "", repo: "https://github.com/junkerfamily/sliding-puzzle-web", group: "games", host: "github", private: true, hidden: true,
      blurb: "4×4 sliding puzzle with optional numbering.", tags: ["puzzle"], added: "2025-04" },

    // ── Home & Family ──
    { id: "ez-message", name: "EZ-Message", url: "https://junkerfamily.github.io/EZ_Message/", repo: "https://github.com/junkerfamily/EZ_Message", group: "family", host: "github", private: true,
      blurb: "Simple messaging made for my special-needs son.", tags: ["messaging", "accessibility"], star: true, added: "2026-10" },
    { id: "bp-journal", name: "BP Journal", url: "https://bp-journal.junkerfamily.workers.dev", repo: "https://github.com/junkerfamily/BloodPressureJournal", group: "family", host: "cloudflare", private: true,
      blurb: "Snap a photo of your blood pressure monitor — AI reads the numbers, then track the trend.", tags: ["health", "blood pressure", "camera", "ai", "chart"], added: "2026-11" },
    { id: "honeydo", name: "HoneyDo", url: "https://junkerfamily.github.io/HoneyDo/", repo: "https://github.com/junkerfamily/HoneyDo", group: "family", host: "github", private: true,
      blurb: "Quick and easy honey-do list for couples.", tags: ["tasks"], added: "2026-01" },
    { id: "eventmaker", name: "EventMaker", url: "https://junkerfamily.github.io/EventMaker/", repo: "https://github.com/junkerfamily/EventMaker", group: "family", host: "github",
      blurb: "Voice calendar — say it, and it becomes an event.", tags: ["calendar", "voice"], added: "2025-09" },
    { id: "dvd-library", name: "DVD Library", url: "", repo: "https://github.com/junkerfamily/dvd-library", group: "family", host: "cloudflare", private: true, hidden: true,
      blurb: "Phone app for cataloguing DVDs by barcode, with eBay values. (Add its workers.dev link.)", tags: ["movies", "barcode"], added: "2026-11" },
    { id: "daily-readings", name: "Catholic Readings Explainer", url: "", repo: "https://github.com/junkerfamily/DailyReadings", group: "family", host: "github", private: true, hidden: true,
      blurb: "Daily Mass readings with AI explanations at different grade levels.", tags: ["faith", "ai"], added: "2025-12" },

    // ── Tools & Calculators ──
    { id: "ira-moves", name: "IRA Moves", url: "https://junkerfamily.github.io/IRA-Moves/", repo: "https://github.com/junkerfamily/IRA-Moves", group: "tools", host: "github",
      blurb: "Would moving money out of an IRA save money, short and long term?", tags: ["finance", "calculator"], added: "2025-09" },
    { id: "pictocalc", name: "PictoCalc", url: "https://pictocalc.pages.dev", repo: "https://github.com/junkerfamily/PictoCalc", group: "tools", host: "cloudflare",
      blurb: "Tap the pictures, get the total — an order calculator for temporary sales help.", tags: ["calculator", "accessibility", "point of sale"], added: "2026-09",
      todo: "Check prices in Admin (moved from Railway; Railway-only edits weren't carried over)." },
    { id: "superplow", name: "SuperPlow", url: "https://junkerfamily.github.io/SuperPlow/", repo: "https://github.com/junkerfamily/SuperPlow", group: "tools", host: "github", private: true,
      blurb: "Snowplow helper and tracker.", tags: ["snow", "tracker"], added: "2026-09" },
    { id: "myfavorites", name: "My Favorites", url: "https://junkerfamily.github.io/MyFavorites/", repo: "https://github.com/junkerfamily/MyFavorites", group: "tools", host: "github",
      blurb: "Links manager — the old version of this page.", tags: ["links"], hidden: true, added: "2025-10" },
    { id: "prototyper", name: "Request Prototyper", url: "", group: "tools", host: "local", hidden: true,
      blurb: "Form/request prototyping tool. Lives on this Mac only (Projects/ProtoTyper).", tags: ["dev"] },
    { id: "sat1982", name: "SAT1982", url: "", repo: "https://github.com/junkerfamily/SAT1982", group: "tools", host: "github", hidden: true,
      blurb: "(Add a description.)", tags: [], added: "2025-06" },
  ],
};
