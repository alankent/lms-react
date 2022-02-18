import Head from 'next/head'


// Set the max-snippet size, guidance for search engine to the maximum number of characters to extract from the page to show in search results snippets. 
//
// * 'none' (or specifying -1) means there is no limit.
// * 0 means don't use any text from page to show in snippets.
// * A positive integer means use at most that many characters from the page.
//
// https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives
//
export default function MaxSnippet({ characters }) {

  if (!limit || limit < 0 || limit === "none") {
    limit = -1
  }

  return (
    <Head>
      <meta
        key="robots-max-snippet"
        name="robots"
        content={"max-snippet:" + characters}
      />
    </Head>
  )
}
