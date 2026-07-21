#!/usr/bin/env bash
# Generate square WebP thumbnails for every /photos wall cover.
#
# The /photos wall crops covers to a square frame, so shipping the full 2000px
# cover per tile is wasteful. This builds a ~1000px square WebP beside each cover
# (cover.jpg -> cover.thumb.webp); PhotoGallery.astro loads the .thumb.webp via
# the coverThumb() helper. Re-run after changing any photo post's coverImage.
#
# Requires ImageMagick (magick). Run from the repo root: ./scripts/gen-thumbs.sh
set -euo pipefail
cd "$(dirname "$0")/.."

covers=$(for f in src/content/words/*.md; do
  if grep -q 'type: *"photo"' "$f"; then
    grep -m1 'coverImage:' "$f" | sed -E 's/.*coverImage: *"?([^"]+)"?.*/\1/'
  fi
done | sort -u)

count=0
while read -r c; do
  [ -z "$c" ] && continue
  src="public$c"
  thumb="public${c%.*}.thumb.webp"
  if [ -f "$src" ]; then
    magick "$src" -resize 1000x1000^ -gravity center -extent 1000x1000 -quality 80 "$thumb"
    echo "  $c -> $(basename "$thumb")"
    count=$((count + 1))
  else
    echo "  MISSING SOURCE: $src" >&2
  fi
done <<< "$covers"

echo "Generated $count thumbnail(s)."
