import Head from 'next/head'


// Generate Twitter meta tags
//
export default function TwitterMetaTags({ title, description, image, site, creator }) {
  return (
    <Head>
      {title && title !== "" && <meta name="twitter:title" content={title}/>}
      {description && description !== "" && <meta name="twitter:description" content={description}/>}
      {image && image !== "" && <meta name="twitter:image" content={image}/>}
      {site && site !== "" && <meta name="twitter:site" content={site}/>}
      {creator && creator !== "" && <meta name="twitter:creator" content={creator}/>}
    </Head>
  )
}

