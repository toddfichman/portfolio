module.exports = {
  siteMetadata: {
    title: `Front End Engineer`,
    description: `This is the personal website for Todd Fichman`,
    author: `Todd Fichman`,
    skills: `Javascript, React, Node, CSS, HTML, Sass, Front-end, Front end`
  },
  plugins: [
    
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
