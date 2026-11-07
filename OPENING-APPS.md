# How apps open from the portfolio

## The problem it solves

On an iPhone, the portfolio's home-screen icon opens as its own full-screen window with no browser buttons. Most of the apps live at the same address as the portfolio (`junkerfamily.github.io/…`). Before this change, tapping one of them replaced the portfolio in that window. There was no back button, and reopening the icon just brought back the last app you'd used.

## How it works now

- **Apps on `junkerfamily.github.io`** open inside the portfolio, under a slim bar at the top:
  - **‹ Portfolio** (orange button, left) takes you back to the main screen.
  - The app's name is shown in the middle.
  - On a computer, the button on the right opens the app in its own tab. It's hidden on the iPhone home-screen icon, because a "new tab" there would take over the window again.
  - On a computer, **Esc** also closes the app.
- **Apps on other addresses** (the Cloudflare escape rooms, PictoCalc, BP Journal) still open the way they did before: in a new tab, or on the iPhone in a pop-up browser sheet that already has a **Done** button. They stay that way so their saved progress and logins keep working.
- **Cmd-click / Ctrl-click** on a card still opens the app in a new tab.

## Changing it for one app

In `sites.js`, add `frame` to a site's entry:

- `frame: true` opens it inside the portfolio with the back bar.
- `frame: false` opens it in a new tab.

Leave `frame` out to use the default: inside the portfolio for `junkerfamily.github.io` apps, and a new tab for everything else.

```js
{ id: "pictocalc", name: "PictoCalc", url: "https://pictocalc.pages.dev", frame: true, ... },
```

## If something looks wrong

- **An app looks off or won't load inside the bar:** set `frame: false` for it.
- **The home-screen icon still opens to an old app:** swipe it closed in the app switcher once and reopen it so it picks up the new version.
