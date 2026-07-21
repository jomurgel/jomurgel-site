#!/usr/bin/env bash
# Generate per-cover derivatives for every post that has a coverImage:
#
#   cover.jpg -> cover.thumb.webp   ~1000px square WebP, for the /photos wall
#                                   and the /words + tag listings (coverThumb helper)
#   cover.jpg -> cover.hero.jpg     wide, short crop (~2.4:1, capped at 1920 wide)
#                                   for the full-bleed post hero (coverHero helper)
#
# Covers are kept full-res as the source; these derivatives are what actually
# ship. Re-run after changing any post's coverImage. Requires ImageMagick.
# Run from the repo root: ./scripts/gen-covers.sh
set -euo pipefail
cd "$(dirname "$0")/.."

covers=$(for f in src/content/words/*.md; do
  grep -q 'coverImage:' "$f" && grep -m1 'coverImage:' "$f" \
    | sed -E 's/.*coverImage: *"?([^"]+)"?.*/\1/'
done | sort -u)

count=0
while read -r c; do
  [ -z "$c" ] && continue
  src="public$c"
  base="public${c%.*}"
  [ -f "$src" ] || { echo "  MISSING SOURCE: $src" >&2; continue; }

  # Square WebP thumbnail (wall + listings).
  magick "$src" -resize 1000x1000^ -gravity center -extent 1000x1000 -quality 80 "${base}.thumb.webp"

  # Wide, short hero crop — cap width at 1920 (never upscale), height = width / 2.4.
  w=$(magick identify -format '%w' "$src")
  tw=$(( w < 1920 ? w : 1920 ))
  th=$(( tw * 10 / 24 ))
  magick "$src" -resize "${tw}x" -gravity center -extent "${tw}x${th}" -quality 85 "${base}.hero.jpg"

  echo "  $c -> .thumb.webp + .hero.jpg (${tw}x${th})"
  count=$((count + 1))
done <<< "$covers"

echo "Generated derivatives for $count cover(s)."
