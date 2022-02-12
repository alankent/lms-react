import Head from 'next/head'


// Structured data helps search engines understand the intent of web pages.
// (This is an SEO technique.) It goes inside the <head> element.
//
export default function StructuredData({ data }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  )
}
