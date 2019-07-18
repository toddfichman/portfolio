module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.toddfichman.com/',
    title: `Front End Engineer`,
    description: `Portfolio For Todd Fichman`,
    author: `Todd Fichman`,
    skills: `Javascript, React, Node, CSS, HTML, Sass, Front-end,`,
    keywords: `Javascript, React, Node, CSS, HTML, Sass, Front-end, Front end, web development, software development,`
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-142162111-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Todd Fichman's Site`,
        short_name: `Todd Fichman`,
        start_url: `/`,
        background_color: `#4281a4`,
        theme_color: `#4281a4`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
