const SITE_URL = process.env.DOMAIN || 'https://hellowawansetiawan.my.id'

export const METADATA = {
  creator: 'Wawan Setiawan',
  description: 'Wawan Setiawan is a Frontend Engineer sharing portfolio projects, web development articles, JavaScript and TypeScript tips, and modern software engineering insights.',
  keyword: 'Wawan Setiawan, Frontend Engineer, Web Developer, JavaScript, TypeScript, Next.js, Vue.js, portfolio, software engineering',
  authors: {
    name: 'Wawan Setiawan',
    url: SITE_URL
  },
  openGraph: {
    url: SITE_URL,
    siteName: 'Wawan Setiawan',
    locale: 'id-ID'
  },
  exTitle: '| Wawan Setiawan',
  profile: 'https://res.cloudinary.com/dqenciruv/image/upload/v1775026417/open-to-work_rciym3.jpg'
}
