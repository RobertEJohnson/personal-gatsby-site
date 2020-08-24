/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Robert Johnson`,
    author: `Robert Johnson`,
    firstName: `Robert`,
    lastName: `Johnson`,
    stageLastName: `Wolfe`,
    description: `Robert Johnson's personal site`,
    occupation: `Full Stack Software Engineer`,
    keywords: [`Robert`, `Johnson`, `Wolfe`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Creative Programmer`,
      `Cat Enthusiast`,
      `Community Actor`,
      `Rad Dude`,
    ],
    readingList: [
      {
        title: `The Stormlight Archive`,
        author: `Brandon Sanderson`,
        link: `https://www.goodreads.com/series/49075-the-stormlight-archive`,
      },
      {
        title: `The Wheel of Time`,
        author: `Robert Jordan`,
        link: `https://www.goodreads.com/search?q=The+Wheel+of+Time&qid=0MFDU7t1dN`,
      },
      {
        title: `Lord of the Rings`,
        author: `J. R. R. Tolkien`,
        link: `https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings`,
      },
    ],
    filmList: [
      {
        title: `What We Do in the Shadows`,
        directors: `Jemaine Clement, Taika Waititi`,
        link: `https://www.imdb.com/title/tt03416742/`,
      },
      {
        title: `Alien`,
        directors: `Ridley Scott`,
        link: `https://www.imdb.com/title/tt0078748/`,
      },
      {
        title: `Step Brothers`,
        directors: `Adam McKay`,
        link: `https://www.imdb.com/title/tt0838283/?ref_=nv_sr_srsg_0`,
      },
    ],
    countryList: ['Scotland', 'Germany', 'France'],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robert Johnson's Personal Site`,
        short_name: `R.Johnson`,
        description: `This is my personal site, get to know me a little better, or just check out my other links. Whatever works for you.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
