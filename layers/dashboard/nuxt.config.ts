// Dashboard Layer - Client-side only rendering
export default defineNuxtConfig({
  ssr: false,

  colorMode: {
  preference: 'dark',
},
  routeRules: {
    '/dashboard/**': {
      prerender: true,
    },
    '/dashboard': {
      redirect: '/dashboard/links',
    },
  },
})
