module.exports = {
  title: "DeFi Hackathon | Nov 1-3, 2019",
  description: "Join us in building the future of finance at a three-day event in San Francisco.",
  dest: "dist",
  markdown: {
    anchor: {
      permalinkSymbol: ""
    }
  },
  runtimeCompiler: true,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/6138116/6541612/css/fonts.css"
      }
    ],
    ["meta", { name: "theme-color", content: "#131529" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "DeFi Hackathon" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          'The Decentralized Finance ("DeFi") Hackathon event is a three-day event that leverages open source software and decentralized networks to transform traditional financial products into trustless and transparent solutions without intermediaries.'
      }
    ],
    [
      "meta",
      { property: "og:url", content: "https://hackathon.sfblockchainweek.io" }
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://hackathon.sfblockchainweek.io/og-image.png"
      }
    ],
    ["meta", { property: "twitter:title", content: "DeFi Hackathon" }],
    [
      "meta",
      {
        property: "twitter:description",
        content:
          'The Decentralized Finance ("DeFi") Hackathon event is a three-day event that leverages open source software and decentralized networks to transform traditional financial products into trustless and transparent solutions without intermediaries.'
      }
    ],
    [
      "meta",
      {
        property: "twitter:url",
        content: "https://hackathon.sfblockchainweek.io"
      }
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: "https://hackathon.sfblockchainweek.io/og-image.png"
      }
    ],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-5KX3R6V');`
    ]
  ],
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-51029217-8"
      }
    ]
  ],
  chainWebpack(config) {
    config.resolve.alias.set("vue", "vue/dist/vue.common.js");
  }
};
