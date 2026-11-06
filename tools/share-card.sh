#!/bin/zsh
# Rebuild og.png (link preview) and apple-touch-icon.png from tools/share-card.html.
set -e
cd "${0:A:h}/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
"$CHROME" --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=4000 \
  --user-data-dir="$TMP/p" --screenshot="$PWD/og.png" "file://$PWD/tools/share-card.html" >/dev/null 2>&1

# Square icon: just the tile logo on the dark background.
cat > "$TMP/icon.html" <<'EOF'
<html><body style="margin:0;width:360px;height:360px;background:#15120f;display:grid;place-items:center">
<div style="display:grid;grid-template-columns:repeat(2,104px);gap:20px">
<i style="width:104px;height:104px;border-radius:24px;background:#ff7a45;display:block"></i>
<i style="width:104px;height:104px;border-radius:24px;background:#ff7a45;opacity:.7;display:block"></i>
<i style="width:104px;height:104px;border-radius:24px;background:#ff7a45;opacity:.7;display:block"></i>
<i style="width:104px;height:104px;border-radius:24px;background:#ff7a45;opacity:.4;display:block"></i>
</div></body></html>
EOF
"$CHROME" --headless=new --hide-scrollbars --window-size=360,360 \
  --user-data-dir="$TMP/p" --screenshot="$TMP/icon.png" "file://$TMP/icon.html" >/dev/null 2>&1
sips -z 180 180 "$TMP/icon.png" --out apple-touch-icon.png >/dev/null
echo "Made og.png and apple-touch-icon.png"
