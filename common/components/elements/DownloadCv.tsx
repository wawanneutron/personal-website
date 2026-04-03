import Link from 'next/link'

import { BiSolidDownvote as DownloadIcon } from 'react-icons/bi'

import { RESUME_URL } from '@/common/constant'

export default function DownloadCv() {
  return (
    <Link
      href={RESUME_URL}
      target="_blank"
      passHref
      className="flex gap-2 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
      data-umami-event="Download Resume"
    >
      <div className="border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500">
        <DownloadIcon className="animate-rain-arrow" />
      </div>
      <span>Download Resume</span>
    </Link>
  )
}
