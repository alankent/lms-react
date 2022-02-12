import Head from 'next/head'


// Generate OpenGraph meta tags.
// 'type' is recommended to be 'article' or 'website'.
//
export default function OpenGraphMetaTags({ type, title, description, image, permaLink, siteName, locale }) {
  return (
    <Head>
      {type && type != "" && <meta property="og:type" content={type} />}
      {title && title != "" && <meta property="og:title" content={title} />}
      {description && description != "" && <meta property="og:description" content={description} />}
      {image && image != "" && <meta property="og:image" content={image} />}
      {permaLink && permaLink != "" && <meta property="og:url" content={permaLink} />}
      {siteName && siteName != "" && <meta property="og:site_name" content={siteName} />}
      {locale && locale != "" && <meta property="og:locale" content={locale} />}
    </Head>
  )
}

