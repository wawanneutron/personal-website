import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BackButton from '@/common/components/elements/BackButton'
import Container from '@/common/components/elements/Container'
import ReaderPage from '@/common/components/elements/ReaderPage'
import { BLOG_COMMENTS, getStaticBlogDetailBySlug } from '@/common/constant/blogs'
import { METADATA } from '@/common/constant/metadata'

const SITE_URL = process.env.DOMAIN || 'https://hellowawansetiawan.my.id'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getStaticBlogDetailBySlug(params.slug)

  if (!blog) {
    return {
      title: `Blog ${METADATA.exTitle}`,
      description: METADATA.description
    }
  }

  return {
    title: `${blog.title} ${METADATA.exTitle}`,
    description: blog.description,
    openGraph: {
      images: blog.cover_image,
      url: `${process.env.DOMAIN}/${blog.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: blog.user.name
    },
    keywords: blog.title,
    alternates: {
      canonical: `${SITE_URL}/${blog.slug}`
    }
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const blog = getStaticBlogDetailBySlug(params.slug)

  if (!blog) notFound()

  const comments = BLOG_COMMENTS[blog.id] || []
  const pageViewCount = blog.total_views_count || 0

  return (
    <>
      <Container data-aos="fade-up">
        <BackButton url="/blog" />
        <ReaderPage content={blog} pageViewCount={pageViewCount} comments={comments} />
      </Container>
    </>
  )
}
