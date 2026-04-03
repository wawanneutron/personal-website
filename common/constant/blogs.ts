import { BlogDetailProps, BlogItem, CommentItemProps } from '@/common/types/blog'

const BLOG_USER = {
  name: 'Wawan Setiawan',
  username: 'wawansetiawan',
  twitter_username: null,
  github_username: 'wawanneutron',
  user_id: 177502,
  website_url: 'https://hellowawansetiawan.my.id',
  profile_image: 'https://res.cloudinary.com/dqenciruv/image/upload/v1775026417/open-to-work_rciym3.jpg',
  profile_image_90: 'https://res.cloudinary.com/dqenciruv/image/upload/v1775026417/open-to-work_rciym3.jpg'
}

export const BLOGS: BlogItem[] = [
  {
    type_of: 'article',
    id: 1,
    title: '7 Pola Arsitektur Frontend yang Bikin Project Tetap Rapi Saat Tim Membesar',
    description:
      'Bahas folder structure, separation of concerns, dan strategi komponen reusable supaya codebase frontend tetap enak di-maintain walau fitur terus bertambah.',
    published: true,
    published_at: '2026-03-12T08:00:00.000Z',
    slug: '7-pola-arsitektur-frontend-project-tetap-rapi',
    path: '/7-pola-arsitektur-frontend-project-tetap-rapi',
    url: 'https://hellowawansetiawan.my.id/blog/7-pola-arsitektur-frontend-project-tetap-rapi',
    comments_count: 0,
    public_reactions_count: 128,
    page_views_count: 3421,
    published_timestamp: '2026-03-12T08:00:00.000Z',
    body_markdown: `## Kenapa arsitektur frontend itu penting?

Saat aplikasi masih kecil, struktur folder terlihat "baik-baik saja". Tapi begitu fitur bertambah, tim membesar, dan deadline makin rapat, codebase bisa cepat jadi sulit dibaca.

## 1) Gunakan pendekatan feature-based

Pisahkan kode berdasarkan fitur bisnis, bukan berdasarkan tipe file global. Contoh: \`modules/auth\`, \`modules/blog\`, \`modules/dashboard\`.

## 2) Batasi dependency antar fitur

Komponen dari fitur A sebaiknya tidak mengimpor internals fitur B secara langsung. Buat layer shared yang jelas.

## 3) Standard naming

Pakai aturan penamaan yang konsisten untuk file, komponen, hook, dan util agar onboarding dev baru lebih cepat.

## 4) UI dan logic dipisahkan secukupnya

Jangan over-engineering, tapi pastikan business logic tidak menumpuk di komponen presentasional.

## 5) Dokumentasi ringan tapi relevan

Tidak perlu panjang, cukup decision log singkat untuk arsitektur penting agar tim paham konteks.

Dengan pola ini, perubahan fitur jadi lebih aman, testing lebih mudah, dan review code jauh lebih efisien.
`,
    positive_reactions_count: 112,
    cover_image: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775056757/article-1_muvsw6.avif',
    tag_list: ['Frontend', 'Architecture', 'React'],
    canonical_url: 'https://hellowawansetiawan.my.id/blog/7-pola-arsitektur-frontend-project-tetap-rapi',
    reading_time_minutes: 8,
    user: BLOG_USER,
    db_views_count: 3421,
    total_views_count: 3421,
    collection_id: 0,
    created_at: '2026-03-12T08:00:00.000Z'
  },
  {
    type_of: 'article',
    id: 2,
    title: 'Nuxt vs Next di Dunia Nyata: Kapan Pilih yang Mana?',
    description:
      'Bukan sekadar perbandingan fitur. Artikel ini fokus ke studi kasus: SEO, time-to-market, skill tim, hingga biaya maintenance jangka panjang.',
    published: true,
    published_at: '2026-03-05T08:00:00.000Z',
    slug: 'nuxt-vs-next-di-dunia-nyata',
    path: '/nuxt-vs-next-di-dunia-nyata',
    url: 'https://hellowawansetiawan.my.id/blog/nuxt-vs-next-di-dunia-nyata',
    comments_count: 0,
    public_reactions_count: 96,
    page_views_count: 2764,
    published_timestamp: '2026-03-05T08:00:00.000Z',
    body_markdown: `Nuxt dan Next sama-sama solid. Pilihan terbaik sangat bergantung pada konteks tim.

### Pilih Next jika:
- Tim kamu kuat di React ecosystem
- Butuh fleksibilitas besar untuk custom architecture
- Ingin integrasi kuat dengan tooling React modern

### Pilih Nuxt jika:
- Tim lebih nyaman di Vue ecosystem
- Butuh convention yang jelas dan cepat dieksekusi
- Ingin struktur project yang lebih opinionated sejak awal

Pada akhirnya, framework terbaik adalah yang menurunkan kompleksitas delivery tim kamu, bukan sekadar yang paling hype.
`,
    positive_reactions_count: 87,
    cover_image: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775056757/article-2_qlpt3e.avif',
    tag_list: ['Nuxt', 'Next.js', 'JavaScript'],
    canonical_url: 'https://hellowawansetiawan.my.id/blog/nuxt-vs-next-di-dunia-nyata',
    reading_time_minutes: 7,
    user: BLOG_USER,
    db_views_count: 2764,
    total_views_count: 2764,
    collection_id: 0,
    created_at: '2026-03-05T08:00:00.000Z'
  },
  {
    type_of: 'article',
    id: 3,
    title: 'Checklist CI/CD untuk Frontend: Dari Pull Request sampai Production',
    description:
      'Panduan praktis menyiapkan pipeline yang aman: lint, test, build preview, quality gate, dan strategi rollback cepat saat incident.',
    published: true,
    published_at: '2026-02-23T08:00:00.000Z',
    slug: 'checklist-ci-cd-frontend-dari-pr-sampai-production',
    path: '/checklist-ci-cd-frontend-dari-pr-sampai-production',
    url: 'https://hellowawansetiawan.my.id/blog/checklist-ci-cd-frontend-dari-pr-sampai-production',
    comments_count: 0,
    public_reactions_count: 104,
    page_views_count: 3198,
    published_timestamp: '2026-02-23T08:00:00.000Z',
    body_markdown: `Pipeline frontend yang sehat minimal punya 5 tahap:

1. **Install + cache dependency**
2. **Lint + type check**
3. **Unit test**
4. **Build preview environment**
5. **Deploy production dengan approval**

Tambahkan juga rollback plan. Sistem rilis yang baik bukan yang tidak pernah gagal, tapi yang bisa pulih cepat saat gagal.
`,
    positive_reactions_count: 95,
    cover_image: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775056759/article-3_tpj41d.avif',
    tag_list: ['CI/CD', 'DevOps', 'Frontend'],
    canonical_url: 'https://hellowawansetiawan.my.id/blog/checklist-ci-cd-frontend-dari-pr-sampai-production',
    reading_time_minutes: 9,
    user: BLOG_USER,
    db_views_count: 3198,
    total_views_count: 3198,
    collection_id: 0,
    created_at: '2026-02-23T08:00:00.000Z'
  },
  {
    type_of: 'article',
    id: 4,
    title: 'TypeScript Patterns yang Paling Kepakai di Project Enterprise',
    description:
      'Belajar pakai utility type, discriminated unions, dan contract typing untuk bikin kode lebih aman tanpa bikin development lambat.',
    published: true,
    published_at: '2026-02-15T08:00:00.000Z',
    slug: 'typescript-patterns-paling-kepakai-di-project-enterprise',
    path: '/typescript-patterns-paling-kepakai-di-project-enterprise',
    url: 'https://hellowawansetiawan.my.id/blog/typescript-patterns-paling-kepakai-di-project-enterprise',
    comments_count: 0,
    public_reactions_count: 81,
    page_views_count: 2417,
    published_timestamp: '2026-02-15T08:00:00.000Z',
    body_markdown: `Pattern TypeScript yang paling sering dipakai di production:

- **Discriminated Union** untuk state UI kompleks
- **Utility Types** seperti \`Pick\`, \`Omit\`, \`Partial\`
- **Typed API Contract** supaya frontend-backend sinkron

Tujuannya bukan membuat typing rumit, tapi menjaga refactor tetap aman saat aplikasi berkembang.
`,
    positive_reactions_count: 76,
    cover_image: 'https://res.cloudinary.com/dqenciruv/image/upload/q_auto/f_auto/v1775056757/article-4_xmcnsx.avif',
    tag_list: ['TypeScript', 'Best Practice', 'Frontend'],
    canonical_url: 'https://hellowawansetiawan.my.id/blog/typescript-patterns-paling-kepakai-di-project-enterprise',
    reading_time_minutes: 6,
    user: BLOG_USER,
    db_views_count: 2417,
    total_views_count: 2417,
    collection_id: 0,
    created_at: '2026-02-15T08:00:00.000Z'
  }
]

export const BLOG_COMMENTS: Record<number, CommentItemProps[]> = {
  1: [],
  2: [],
  3: [],
  4: []
}

export const getStaticBlogDetailBySlug = (slug: string): BlogDetailProps | null => {
  const blog = BLOGS.find(item => item.slug === slug)

  if (!blog) return null

  return {
    type_of: blog.type_of,
    id: blog.id,
    title: blog.title,
    description: blog.description,
    readable_publish_date: blog.published_at,
    slug: blog.slug,
    path: blog.path,
    url: blog.url,
    comments_count: blog.comments_count,
    public_reactions_count: blog.public_reactions_count,
    collection_id: blog.collection_id || null,
    published_timestamp: blog.published_timestamp,
    positive_reactions_count: blog.positive_reactions_count,
    cover_image: blog.cover_image,
    social_image: blog.cover_image,
    canonical_url: blog.canonical_url,
    created_at: blog.created_at,
    edited_at: null,
    crossposted_at: null,
    published_at: blog.published_at,
    last_comment_at: null,
    reading_time_minutes: blog.reading_time_minutes,
    tag_list: blog.tag_list.join(', '),
    tags: blog.tag_list,
    body_html: '',
    body_markdown: blog.body_markdown,
    user: blog.user,
    blog_slug: null
  }
}
