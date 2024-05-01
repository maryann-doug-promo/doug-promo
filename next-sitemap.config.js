
const SITE_URL = process.env.HTML_THI_WEBSITE || 'https://doug-promo.vercel.app';
const DEFAULT_CHANGE_FREQUENCY = "Monthly";
const DEFAULT_PRIORITY = 0.6;

const PRIORITIES = {
  "/services": 0.9
};
const CHANGE_FREQUENCY = {};

// Paths that need to be manually added
const PATH_TO_ADD = [
  {
    name: `/`,
    changefreq: 'weekly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  {
    name: `/reviews`,
    changefreq: 'weekly',
    priority: 0.4,
    lastmod: new Date().toISOString(),
  }
];

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/.next' },
      { userAgent: '*', disallow: '/node_modules' },
      { userAgent: '*', disallow: '/personal_content' },
      { userAgent: '*', disallow: '/personal_types' },
      { userAgent: '*', disallow: '/shared' },
      // Pages not to look at
      { userAgent: '*', disallow: '/approve-review' },
      // Thing not there but could be someday
      { userAgent: '*', disallow: '/api' },
    ]
  },
  // paths added in additionalPaths doesnt go throug transform
  transform: async (config, path) => {
    return {
      loc: `${SITE_URL}/${path}`,
      changefreq: CHANGE_FREQUENCY[path] ?? DEFAULT_CHANGE_FREQUENCY,
      priority: PRIORITIES[path] ?? DEFAULT_PRIORITY,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const paths = [];
    PATH_TO_ADD.forEach(path => {
      paths.push({
        loc: `${SITE_URL}/${path.name}`,
        changefreq: path.changefreq,
        priority: path.priority,
        lastmod: path.lastmod,
      });
    });
    return paths;
  },
};

export default config;
