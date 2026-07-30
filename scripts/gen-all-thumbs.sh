#!/usr/bin/env bash
# Generate small square WebP thumbnails for every in-post photo, used by /photos/all.
#
#   gallery image  ->  <name>.sq.webp   (320px, center-cropped square)
#
# The /photos/all page is a dense 6/8/12-column grid of these tiny squares, so it
# stays light and the small size obfuscates individual frames. Re-run after adding
# or changing photos. Requires ImageMagick + python3. Run from the repo root.
set -euo pipefail
cd "$(dirname "$0")/.."

srcs=$(python3 - <<'PY'
import re, glob
seen = set()
for path in glob.glob('src/content/words/*.md'):
    s = open(path).read()
    parts = s.split('---', 2)
    if len(parts) < 3 or 'type: "photo"' not in parts[1]:
        continue
    for src in re.findall(r'<img[^>]*\bsrc="([^"]+)"', parts[2]):
        if src not in seen:
            seen.add(src)
            print(src)
PY
)

count=0
while IFS= read -r src; do
  [ -z "$src" ] && continue
  in="public$src"
  out="public${src%.*}.sq.webp"
  [ -f "$in" ] || { echo "  MISSING: $in" >&2; continue; }
  magick "$in" -resize 320x320^ -gravity center -extent 320x320 -quality 78 "$out"
  count=$((count + 1))
done <<< "$srcs"

echo "Generated $count square thumbnail(s)."
