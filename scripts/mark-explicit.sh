#!/usr/bin/env bash
# Mark one or more gallery images as explicit. For each path you pass, this:
#   1. renames the file to add "-explicit" before the extension,
#   2. updates the src in any markdown post that references it,
#   3. regenerates the /photos/all square thumbnail under the new name.
#
# Usage — pass paths exactly as they appear in the markdown (leading slash):
#   ./scripts/mark-explicit.sh /kara/photo-5.jpg /lilias-right/photo-8.jpg
#
# Idempotent: already-marked paths are skipped. Requires ImageMagick.
# After running, restart the dev server (markdown changed) and commit.
set -euo pipefail
cd "$(dirname "$0")/.."

[ "$#" -gt 0 ] || { echo "usage: $0 /dir/photo-N.jpg [more...]"; exit 1; }

for path in "$@"; do
  rel="${path#/}"
  case "$rel" in
    *-explicit.*) echo "  already explicit, skipping: $path"; continue;;
  esac
  [ -f "public/$rel" ] || { echo "  MISSING FILE, skipping: public/$rel" >&2; continue; }

  ext="${rel##*.}"
  stem="${rel%.*}"
  newrel="${stem}-explicit.${ext}"
  # Canonical root-relative forms as they appear in markdown (always one leading
  # slash) — search on these so a path passed without a leading slash can't match
  # mid-string and leave a "//" behind.
  mdpath="/${rel}"
  newpath="/${newrel}"

  # 1. rename the source file (tracked)
  git mv "public/$rel" "public/$newrel" 2>/dev/null || mv "public/$rel" "public/$newrel"

  # 2. update the src in any markdown that references it (dots escaped for sed)
  esc=$(printf '%s' "$mdpath" | sed 's/[.[\*^$]/\\&/g')
  for md in $(grep -rl -- "$mdpath" src/content/words/ 2>/dev/null); do
    sed -i '' "s#${esc}#${newpath}#g" "$md"
    echo "  updated md: $md"
  done

  # 3. regenerate the /photos/all square thumb under the new name, drop the old
  magick "public/$newrel" -resize 320x320^ -gravity center -extent 320x320 -quality 78 "public/${stem}-explicit.sq.webp"
  [ -f "public/${stem}.sq.webp" ] && { git rm -q "public/${stem}.sq.webp" 2>/dev/null || rm -f "public/${stem}.sq.webp"; }

  echo "  ✓ $mdpath -> $newpath"
done
echo "Done. Restart the dev server (markdown changed), then commit."
