import Head from 'next/head'


// Set the max-video-preview meta tag to tell search engines the preferred
// snippet length in seconds.
//
// * 0 = at most, use a static image from the video
// * N = at most N seconds
// * -N or not set = there is no limit
//
export default function MaxVideoPreview({ seconds }) {
  if (!seconds || seconds < 0) {
    seconds = -1
  }
  return (
    <Head>
      <meta
        key="robots-max-video-preview"
        name="robots"
        content={"max-video-preview:" + seconds}
      />
    </Head>
  )
}
