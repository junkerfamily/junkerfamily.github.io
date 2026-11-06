#!/bin/zsh
# Grab thumbnails for sites in sites.js using headless Google Chrome.
#   ./tools/thumbs.sh            # every live site that has no thumbnail yet
#   ./tools/thumbs.sh --all      # redo every live site
#   ./tools/thumbs.sh kidkalc    # just these ids
set -e
cd "${0:A:h}/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p thumbs
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

# id<TAB>url for every site with a url
list=$(node -e '
  global.window = {}; require("./sites.js");
  for (const s of window.PORTFOLIO.sites) if (s.url) console.log(s.id + "\t" + s.url);
')

want_all=0; ids=()
for a in "$@"; do [[ $a == --all ]] && want_all=1 || ids+=$a; done

echo "$list" | while IFS=$'\t' read -r id url; do
  if (( ${#ids} )); then (( ${ids[(Ie)$id]} )) || continue
  elif (( ! want_all )) && [[ -f thumbs/$id.jpg ]]; then continue; fi
  echo "📸 $id  ←  $url"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --mute-audio \
    --window-size=1280,800 --virtual-time-budget=6000 \
    --user-data-dir="$TMP/profile" \
    --screenshot="$TMP/$id.png" "$url" >/dev/null 2>&1 || { echo "   ⚠ failed"; continue; }
  sips -s format jpeg -s formatOptions 82 --resampleWidth 800 "$TMP/$id.png" --out "thumbs/$id.jpg" >/dev/null
done
echo "Done. Thumbnails are in thumbs/"
