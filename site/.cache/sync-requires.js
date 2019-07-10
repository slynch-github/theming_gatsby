const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-events-src-templates-events-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\theme_development\\gatsby-theme-events\\src\\templates\\events.js"))),
  "component---gatsby-theme-events-src-templates-event-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\theme_development\\gatsby-theme-events\\src\\templates\\event.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\sl452\\Documents\\Gatsby\\theme_development\\site\\.cache\\dev-404-page.js")))
}

