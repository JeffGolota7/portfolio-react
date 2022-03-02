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
  }]
};