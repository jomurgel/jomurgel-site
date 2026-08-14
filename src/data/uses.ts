// /uses — the gear, tools, and software behind the dev and photography work.
// Same shape as the codex so it restyles the same way. Items with a `note`
// render "— note" after the name; `url` makes the name a link.
export type UsesItem = { name: string; url?: string; note?: string };
export type UsesCategory = { label: string; intro?: string; items: UsesItem[] };

export const uses: UsesCategory[] = [
  {
    label: 'Editor Kit',
    items: [
      { name: 'Editor', note: 'VS Code', url: 'https://code.visualstudio.com/' },
      { name: 'Claude Code', url: 'https://claude.com/claude-code', note: 'because I\'m made to' },
      { name: 'Terminal', note: 'Warp', url: 'https://www.warp.dev/' },
      { name: 'zsh', note: 'default shell', url: 'https://ohmyz.sh/' },
      { name: 'Echolon', url: 'https://echolon.app/', note: 'API client — my Postman/Insomnia' },
      { name: 'Tower', url: 'https://www.git-tower.com/', note: 'git, when I don\'t want the CLI' },
      { name: 'Transmit', url: 'https://panic.com/transmit/', note: 'SFTP' },
      { name: 'PHP Monitor', url: 'https://phpmon.app/', note: 'PHP Menubar Management' },
      { name: 'Laravel Valet', url: 'https://laravel.com/docs/valet', note: 'local dev environment' },
    ],
  },
  {
    label: 'Machine',
    items: [
      { name: 'Mac', note: 'Mackbook m3 Pro Max', url: 'https://support.apple.com/en-us/117736' },
      { name: 'Display', note: 'Asus ProArt 27" 4k x2', url: 'https://a.co/d/038hSYWW' },
      { name: 'Keyboard', note: 'Attack Shark R85HE', url: 'https://a.co/d/0789qkFQ' },
      { name: 'Trackpad', note: 'Magic Trackpad', url: 'https://www.apple.com/shop/product/mxk93am/a/magic-trackpad-usb%E2%80%91c-white-multi-touch-surface' },
      { name: 'Mouse', note: 'Logi G502x', url: 'https://www.logitechg.com/en-us/shop/p/g502-x-wired-lightforce' },
    ],
  },
  {
    label: 'Photo + Design Software',
    items: [
      { name: 'Affinity Photo', url: 'https://affinity.studio/', note: 'raster editing' },
      { name: 'Affinity Designer', url: 'https://affinity.studio/', note: 'vector' },
      { name: 'Pixelmator Pro', url: 'https://www.pixelmator.com/pro/' },
      { name: 'FastRawViewer', url: 'https://www.fastrawviewer.com/', note: 'culling raws' },
      { name: 'Sketch', url: 'https://www.sketch.com/', note: 'UI design' },
      { name: 'Figma', url: 'https://www.figma.com/', note: 'UI design' },
      { name: 'ImageMagick', url: 'https://imagemagick.org', note: 'batch resizing + the site image pipeline' },
    ],
  },
  {
    label: 'Camera + Lenses',
    items: [
      { name: 'Canon 5D Mark III', url: 'https://www.usa.canon.com/support/p/eos-5d-mark-iii' },
      { name: 'Canon EF 85mm f/1.8 USM', url: 'https://a.co/d/04tCddmP', note: 'portrait telephoto' },
      { name: 'Sigma 50mm f/1.4 EX DG HSM', url: 'https://a.co/d/09VrGBJ8', note: 'standard prime' },
    ],
  },
  {
    label: 'Photo Equipment',
    items: [
      { name: 'Einstein E640', url: 'https://paulcbuff.com/products/einstein-640-studio-flash', note: 'studio flash' },
      { name: '10ft Air-Cushioned Light Stand', url: 'https://paulcbuff.com/products/10-foot-air-cushioned-light' },
      { name: '24x36" Foldable Softbox', url: 'https://paulcbuff.com/products/foldable-24x36-softbox' },
      { name: '7" Standard Reflector', url: 'https://paulcbuff.com/products/7-reflector' },
      { name: 'Color Gels (set of 20)', url: 'https://paulcbuff.com/products/color-filters-set-of-20' },
      { name: 'PocketWizard PlusX', url: 'https://a.co/d/0gQCVCP7', note: 'wireless flash trigger' },
    ],
  },
  {
    label: 'This Site',
    items: [
      { name: 'Astro', url: 'https://astro.build', note: 'static export, content collections, view transitions' },
      { name: 'Acorn', url: 'https://github.com/jomurgel/acorn.css', note: 'my classless CSS baseline' },
      { name: 'DigitalOcean', url: 'https://www.digitalocean.com', note: 'droplet + nginx' },
      { name: 'GitHub Actions', url: 'https://github.com/features/actions', note: 'build + rsync deploy on merge to main' },
      { name: 'Node', url: 'https://nodejs.org', note: 'build toolchain' },
    ],
  },
];
