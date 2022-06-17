require("babel-register")({
  presets: ["es2015", "react"]
});
const router = require('./routes').default;
const Sitemap = require('react-router-sitemap').default;
(
	new Sitemap(router)
    .build("https://numberstowords.online")
		.save('./public/sitemap.xml')
);
