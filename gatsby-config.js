const website = require('./config/config')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

const gatsbyRemarkPlugins = [
  'gatsby-plugin-typegen',
  {
    resolve: 'gatsby-remark-smartypants',
    options: {
      dashes: 'oldschool'
    }
  },
  {
    resolve: 'gatsby-remark-prismjs',
    options: {
      classPrefix: 'language-',
      inlineCodeMarker: {
        tsx: 'tsx'
      },
      aliases: {}
    }
  },
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1200
    }
  },
  {
    resolve: 'gatsby-remark-copy-linked-files',
    options: {}
  }
]

module.exports = {
  siteMetadata: {
    title: website.title,
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
		description: website.description,
    author: website.author,
    linkedin: website.linkedin,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
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
        name: `a4-data`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
     {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: gatsbyRemarkPlugins
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
