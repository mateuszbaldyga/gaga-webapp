module.exports = {
  "**/*.{js,ts,tsx}": () => ["npm run typecheck", "npm run lint -- --quiet"],
  "**/*.{js,jsx,ts,tsx,css,scss}": ["npm run prettier"],
  "messages/**/*.json": () => ["npm run i18n:check"],
};
