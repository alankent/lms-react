import Head from 'next/head'


// Set the max-image-preview meta tag to tell search engines the preferred
// snippet image size. Values are
//
// * 'none' - don't show any previews
// * 'standard' - display normal sized preview
// * 'large' - permit search engine to display large previews
//
// See also MaxImagePreview.NONE, MaxImagePreview.STANDARD,
// or MaxImagePreview.LARGE.
//
// https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives
//
export default function MaxImagePreview({ size }) {
  return (
    <Head>
      <meta
        key="robots-max-image-preview"
        name="robots"
        content={"max-image-preview:" + size}
      />
    </Head>
  )
}


MaxImagePreview.NONE = "none"
MaxImagePreview.STANDARD = "standard"
MaxImagePreview.LARGE = "large"
