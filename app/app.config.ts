export default defineAppConfig({
  title: 'bytely',
  github: '',
  coffee: '',
  twitter: '',
  telegram: '',
  description: 'Link Shortener from Fischmann.IT',
  image: 'https://jobs.fischmann.it/images/logo.png',
  previewTTL: 300,
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
