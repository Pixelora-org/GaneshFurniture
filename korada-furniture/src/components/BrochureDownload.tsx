import React from 'react'
import { FileDown } from 'lucide-react'

type BrochureDownloadProps = {
  href: string
  title: string
  description: string
}

export function BrochureDownload({ href, title, description }: BrochureDownloadProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mt-3 text-amber-100 md:text-lg">{description}</p>
      </div>
      <a
        href={href}
        download
        className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600 lg:mt-0"
      >
        <FileDown className="h-5 w-5" />
        Download brochure (PDF)
      </a>
    </section>
  )
}
