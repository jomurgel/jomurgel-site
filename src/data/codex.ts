// The Codex — everything from jomurgel.com/codex. Living, overly-long list of
// things I love. Structured so it's easy to restyle later.
export type CodexItem = { name: string; url?: string; note?: string; done?: boolean };
export type CodexCategory = { label: string; intro?: string; items: CodexItem[] };

const plain = (names: string[]): CodexItem[] => names.map((name) => ({ name }));

export const codex: CodexCategory[] = [
  {
    label: 'Albums',
    items: [
      { name: 'After Dark — Essenger', url: 'https://open.spotify.com/album/7dszm1dxmXo1Tgw97QOPeA' },
      { name: 'Arrival (soundtrack)', url: 'https://open.spotify.com/album/1woCvthHJakakroP6dXNxs' },
      { name: 'Goosebumps The Musical: Phantom of the Auditorium', url: 'https://open.spotify.com/track/5T9Lwj0JikgBDvUHZbYEZW' },
      { name: 'In Search of the Antidote — Fletcher', url: 'https://open.spotify.com/album/1ZXvAPiGoqDXWsLHd3oZ8Q' },
      { name: 'Kintsugi — Death Cab for Cutie', url: 'https://open.spotify.com/album/6BK3muExDOuk0VnyMn9NVw' },
      { name: 'MCMLXXXV — Rufio', url: 'https://open.spotify.com/album/2LX1PiZLgicEHaFxyYoaKJ' },
      { name: 'Once Upon A Time — Feeling Left Out' },
      { name: 'Petty Fights — Pretty Pity', url: 'https://open.spotify.com/album/42e4aAtvGRj5CuihPbyBVJ' },
      { name: 'Question Bedtime — MC Frontalot', url: 'https://open.spotify.com/album/2hdF4ENcOo16q4RNIp6EDz' },
      { name: 'Sticks and Stones — New Found Glory', url: 'https://open.spotify.com/album/29rNv6X8yQsCMiIOqkHud8' },
      { name: 'Wicked — Original Broadway Cast' },
    ],
  },
  {
    label: 'Songs',
    items: [
      { name: '99 Boys — EMELINE', url: 'https://open.spotify.com/track/0GqWXMhLivLWNWdCl1nbDo' },
      { name: 'Burn the Width — Peggy', url: 'https://open.spotify.com/track/15kyuCM5xLyafRa1CIA23M' },
      { name: 'Feminine Rage — Peggy', url: 'https://open.spotify.com/track/2ahPoa4ECPPlZ1QJ7oSRok' },
      { name: 'Healing — Fletcher', url: 'https://open.spotify.com/track/2jgq1RlYLt4FZldm4KAfj2' },
      { name: 'Reptile Guy — Wolves of Glendale', url: 'https://open.spotify.com/track/7mX0jUA7FIdd8a8wc0SRTV' },
      { name: 'Umbrella — No More Kings', url: 'https://open.spotify.com/track/4j3i83Ni7efM2e3PFSQZhf' },
    ],
  },
  {
    label: 'Books',
    intro: "Currently the Lady Janies series, because I'm a teenage girl. They're quite fun.",
    items: [
      { name: 'Dungeon Crawler Carl Series — Matt Dinniman' },
      { name: 'Project Hail Mary — Andy Weir' },
      { name: 'Ready Player One — Ernest Cline' },
      { name: 'Ready Player Two — Ernest Cline' },
      { name: 'Snow Crash — Neal Stephenson' },
      { name: 'The Girl With the Dragon Tattoo Series — Stieg Larsson' },
      { name: 'The Harry Potter Series', note: 'despite the author' },
      { name: 'The Hell Divers Series — Nicholas Sansbury Smith' },
      { name: 'The Lady Janies Series — Cynthia Hand, Brodi Ashton, Jodi Meadows' },
      { name: 'The Martian — Andy Weir' },
      { name: 'The Off-Campus Series — Elle Kennedy' },
      { name: 'The Tenth Planet Trilogy — Dean Wesley Smith & Kristine Kathryn Rusch' },
      { name: 'Wicked — Gregory Maguire' },
    ],
  },
  {
    label: 'Movies',
    intro: 'Favorite is Wicked (2024) as of November 2024. Arrival falls to number two.',
    items: [
      ...plain([
        'Arrival', 'Atomic Blonde', 'Attack the Block', 'Baby Driver', 'Back to the Future Trilogy',
        'Cashback', 'Definitely, Maybe', 'Dungeons & Dragons: Honor Among Thieves', 'Edge of Tomorrow',
        'Employee of the Month', 'Everything Everywhere All at Once', 'Goonies', 'Happy Death Day',
        'Happy Death Day 2 U', 'Mad Max: Fury Road', 'Mimic', 'Premium Rush', 'Rare Exports',
        'Ready Player One', 'Ready or Not', 'Resurrect Dead: The Mystery of the Toynbee Tiles',
        'Running Man (2025)', 'Safety Not Guaranteed', 'Scott Pilgrim vs. the World', 'Slither',
        'The Conjuring',
      ]),
      { name: 'The Girl With the Dragon Tattoo', note: 'US and Swedish' },
      ...plain([
        'The Italian Job (2003)', 'The John Wick movies', 'The Relic', 'The Wizard of Speed and Time',
        'Top Gun: Maverick', 'Tremors', 'Tremors 2', 'Wicked', 'Yesterday',
      ]),
    ],
  },
  {
    label: 'Television',
    items: plain([
      'Alien: Earth', "Bob's Burgers", 'Bridgerton', 'Brooklyn Nine-Nine', 'Firefly', 'Fringe', 'From',
      'Ghosts', 'High Potential', 'How I Met Your Mother', 'Loki', 'Love, Death & Robots', 'Mythic Quest',
      'Poker Face', 'Psych', 'Reacher', 'Rooster', 'Scrubs', 'Severance', 'Shrinking', 'Silicon Valley',
      'Silo', 'Star Trek', 'Ted Lasso', 'The Big Bang Theory', 'The Curse of Oak Island', 'The Great North',
      'The Magicians', 'The Rookie', 'Upload', 'Watchmen', 'Westworld', 'Widows Bay',
    ]),
  },
  {
    label: 'Illustrators',
    items: [
      { name: 'Anna Marine', url: 'https://www.instagram.com/annamarineart/' },
      { name: 'Audrey Kawasaki', url: 'https://www.audkawa.com/' },
      { name: 'Bao Pham', url: 'https://www.instagram.com/baotpham/' },
      { name: 'Conrad Roset', url: 'https://www.conradroset.com/' },
      { name: 'Dave Kloc', url: 'https://www.davekloc.com/' },
      { name: 'Jay Ryan', url: 'https://thebirdmachine.com/' },
      { name: 'Lois van Baarle', url: 'https://loish.net/' },
      { name: 'MC Baldassari', url: 'https://www.mcbaldassari.com/' },
      { name: 'Madie Arts', url: 'https://madiearts.bigcartel.com/' },
      { name: 'Mike Mitchell', url: 'https://linktr.ee/mikemitchell' },
      { name: 'Pernille Ørum', url: 'https://www.instagram.com/pernilleoerum/' },
      { name: 'Sabrina Carpenter (gravveyards)', url: 'https://www.instagram.com/gravveyards/' },
      { name: 'Sara Golish', url: 'https://www.saragolish.com/' },
      { name: 'Stella Im Hultberg', url: 'https://www.stellaimhultberg.com/' },
      { name: 'Tara McPherson', url: 'https://www.taramcpherson.com/' },
    ],
  },
  {
    label: 'Needleworkers',
    items: [{ name: 'Clara Raurich (Pussie Toys)', url: 'https://www.instagram.com/pussie_toys/' }],
  },
  {
    label: 'Sculptors',
    items: [{ name: 'Luo Li Rong', url: 'https://www.instagram.com/luo_li_rong_art' }],
  },
  {
    label: 'Typographers',
    items: [{ name: 'Jessica Hische', url: 'https://www.jessicahische.is/' }],
  },
  {
    label: 'Photographers',
    items: [
      { name: 'Alissa Brunelli', url: 'http://www.alissabrunelli.com/' },
      { name: 'Anne-Constance Frénoy', url: 'https://www.anneconstancefrenoy.com/' },
      { name: 'Billy Kidd', url: 'https://www.billy-kidd.com/' },
      { name: 'Brandon Witzel', url: 'http://www.brandonwitzelphotography.com/', note: 'as much as people complain about his style' },
      { name: 'Chloé McLennan', url: 'https://www.chloemclennan.com/' },
      { name: 'Corwin Prescott', url: 'https://www.instagram.com/corwinprescott' },
      { name: 'Emily Soto', url: 'https://www.emilysoto.com/' },
      { name: 'Haris Nukem', url: 'http://www.harisnukem.com/', note: "can't look away" },
      { name: 'J. Isobel de Lisle', url: 'https://www.instagram.com/jisobeldelisle', note: 'got me into photography' },
      { name: 'Jingna Zhang', url: 'https://www.zhangjingna.com' },
      { name: 'Luciana Macedo', url: 'https://lucianamacedo.com/' },
      { name: 'Nishe', url: 'http://blog.nishe.net/' },
      { name: 'Ruth Bernhard', url: 'https://en.wikipedia.org/wiki/Ruth_Bernhard', note: 'my #1 favorite' },
      { name: 'Savannah Buswell', url: 'http://www.savvy.photo/' },
    ],
  },
  {
    label: 'Podcasts',
    items: [
      { name: 'Brad and Will Made a Tech Pod', url: 'https://techpod.content.town/' },
      { name: 'Decoder', url: 'https://www.theverge.com/decoder-podcast-with-nilay-patel' },
      { name: 'Dungeons & Daddies', url: 'https://www.dungeonsanddaddies.com/' },
      { name: 'Endless Thread', url: 'https://www.wbur.org/podcasts/endlessthread/' },
      { name: "Girls Who Don't D&D", url: 'https://girlswhodontdnd.com/' },
      { name: 'Hey Riddle Riddle', url: 'https://www.heyriddleriddle.com/' },
      { name: 'Last Podcast on the Left', url: 'https://www.lastpodcastontheleft.com/' },
      { name: 'Smalltown Murder', url: 'https://shutupandgivememurder.com/' },
      { name: 'Smashing Security', url: 'https://www.smashingsecurity.com/' },
      { name: 'The Vergecast', url: 'https://www.theverge.com/the-vergecast/' },
      { name: 'Twenty Thousand Hertz', url: 'https://20k.org/' },
      { name: 'Version History', url: 'https://www.theverge.com/version-history-podcast' },
    ],
  },
  {
    label: 'YouTube',
    items: [
      { name: "Adam Savage's Tested", url: 'https://www.youtube.com/channel/UCiDJtJKMICpb9B1qf7qjEOA' },
      { name: 'Corridor Crew', url: 'https://youtube.com/@corridorcrew' },
      { name: 'Mythical Kitchen', url: 'https://www.youtube.com/mythicalkitchen' },
      { name: 'PBS Idea Channel (defunct)', url: 'https://www.youtube.com/channel/UC3LqW4ijMoENQ2Wv17ZrFJA' },
      { name: 'The Verge', url: 'https://www.youtube.com/@TheVerge' },
    ],
  },
];
