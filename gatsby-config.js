module.exports = {
  siteMetadata: {
    url: 'https://www.jeffgolota.com',
    title: 'Jeff Golota - Developer & Designer',
    description: 'Hi Im Jeff Golota, come check out what I can do',
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-PZ6KN3B6QD", // Google Analytics / GA
      ],
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true
      },
    },
  }]
};
