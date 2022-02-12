import Head from 'next/head'


// Generate standard HTML meta tags
//
export default function HtmlMetaTags({ title, description }) {
  return (
    <Head>
      {title && title != "" && <title>{title}</title>}
      {description && description != "" && <meta name="description" content={description}/>}
    </Head>
  )
}

