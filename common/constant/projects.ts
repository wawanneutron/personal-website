export interface Project {
  id: number
  judul: string
  deskripsi: string
  url: string
  image_url: string
  tech: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    judul: 'RIDI - LPDB KUMKM',
    deskripsi: 'LPDB KUMKM Aplikasi pengelolaan pengajuan dana usaha kecil dan menengah',
    url: 'https://inkubator.lpdb.id/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775033485/ridi_jhv1u6.png',
    tech: ['Vue js', 'Nuxt js', 'CSS', 'Tailwind Css', 'HTML', 'JavaScript'],

  },
  {
    id: 2,
    judul: 'Purposeful Experience',
    deskripsi: 'Aplikasi E-Learning',
    url: 'https://pex.firstacademy.co.id/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775033488/pex_g4oocp.png',
    tech: ['Vue js', 'Nuxt js', 'CSS', 'Vuetify', 'HTML', 'JavaScript'],

  },
  {
    id: 3,
    judul: 'youarestellar',
    deskripsi: 'Web Job Portal',
    url: 'https://youarestellar.co.id/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775033486/yas_dxygej.jpg',
    tech: ['Vue js', 'Nuxt js', 'CSS', 'Vuetify', 'HTML', 'JavaScript'],

  },
  {
    id: 4,
    judul: 'Company Profile',
    deskripsi: 'Website Company Profile PT Infra Solusi Indonesia (i-Solution)',
    url: 'https://dev-isol.netlify.app/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775033486/company-profile_fqqrmy.png',
    tech: ['Vue js', 'Nuxt js', 'CSS', 'Vuetify', 'HTML', 'JavaScript'],

  },
  {
    id: 5,
    judul: 'Stellar Growth',
    deskripsi: 'Manage candidate and create job for recruiter',
    url: 'https://growth.youarestellar.co.id/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775035086/sg_pt7i3k.webp',
    tech: ['Vue js', 'Nuxt js', 'CSS', 'Vuetify', 'HTML', 'JavaScript'],

  },
  {
    id: 6,
    judul: 'Admin Dashboard E-Learning',
    deskripsi: 'Admin Dashboard Purposeful Experience',
    url: 'https://pex-admin-dev.youarestellar.co.id/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775033487/pex-admin_thwgzq.png',
    tech: ['Vue js', 'Nuxt js', 'CSS', 'Vuetify', 'HTML', 'JavaScript'],

  },
  {
    id: 7,
    judul: 'Virtual Painter',
    deskripsi: 'Building virtual painter simulation PT Bina Adidaya',
    url: 'https://pentaprima.co.id/virtualpainter/',
    image_url: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775033486/pentaprima_qmijtv.png',
    tech: ['PHP', 'Laravel', 'Mysql', 'HTML', 'CSS', 'Bootstrap'],

  },
]
