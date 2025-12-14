// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Eufaula",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "NOR",
      timezone: "Europe/Oslo",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: false,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "nova",
      background_url: "src/img/banners/kanna.gif",
      categories: [
        {
          name: "ducky",
          links: [
            {
              name: "Kanna ch.",
              url: "https://www.youtube.com/@KannaYanagi",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Kanna twitter",
              url: "https://x.com/Yanagi_Kanna",
              icon: "brand-twitter",
              icon_color: palette.sky,
            },
            {
              name: "Kanna Patreon",
              url: "https://www.patreon.com/c/Kanna_Yanagi/posts?vanity=Kanna_Yanagi",
              icon: "brand-patreon",
              icon_color: palette.peach,
            },
            {
              name: "Kanna Maro",
              url: "https://marshmallow-qa.com/n76bewc55j62p4n",
              icon: "notes",
              icon_color: palette.green,
            },
            {
              name: "Kanna twitch",
              url: "https://www.twitch.tv/kannayanagi",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
            {
              name: "Kanna Throne",
              url: "https://throne.com/kannayanagi",
              icon: "crown",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "daily",
          links: [
            {
              name: "tuta",
              url: "https://app.tuta.com",
              icon: "mail",
              icon_color: palette.red,
            },
            {
              name: "ko-fi",
              url: "https://ko-fi.com",
              icon: "coffee",
              icon_color: palette.peach,
            },
            {
              name: "skeb",
              url: "https://skeb.jp",
              icon: "brush",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.green,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-twitter",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "hobbies",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "fungus",
          links: [
            {
              name: "Fungaia",
              url: "https://fungaia.life",
              icon: "mushroom",
              icon_color: palette.green,
            },
            {
              name: "Mycelium Emporium",
              url: "https://novaex-2b.github.io/",
              icon: "shopping-bag",
              icon_color: palette.peach,
            },
            {
              name: "Pegasus",
              url: "https://pegasusbags.com/collections/bags",
              icon: "horse",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "tea",
          links: [
            {
              name: "Jesse's Teahouse",
              url: "https://jessesteahouse.com/en-us",
              icon: "mug",
              icon_color: palette.green,
            },
            {
              name: "Yunnan Sourcing",
              url: "https://yunnansourcing.com/",
              icon: "leaf",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
