import Container from '@mui/material/Container'
import StructuredData from './StructuredData'
import MaxVideoPreview from './MaxVideoPreview'
import MaxImagePreview from './MaxImagePreview'
import moment from 'moment'


// Embed a YouTube video (using the embed markup suggested by YouTube).
// Also generate structured data on the page to help search engines understand the purpose of the page.
//
export default function YouTube({ title, description, thumbnailUrl, published, duration, youTubeCode }) {

  const embedUrl = "https://www.youtube.com/embed/" + youTubeCode

  // Video structured data. We cannot use the MP4 URL since its on YouTube, so have to
  // settle for provding an embed URL.
  // https://developers.google.com/search/docs/advanced/structured-data/video
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": [ thumbnailUrl ],
    "uploadDate": published.toISOString(true),
    "duration": duration.toISOString(),
    "embedUrl": embedUrl,
  }

  return (
    <>

      <StructuredData data={structuredData}/>
      <MaxVideoPreview seconds={30}/>
      <MaxImagePreview size={MaxImagePreview.LARGE}/>

      <Container maxWidth="lg">
        <div style={{overflow: "hidden", paddingTop: "56.25%", position: "relative"}}>
          <iframe
            style={{border: 0, position: "absolute", left: 0, top: 0, width: "100%", height: "100%"}}
            src={embedUrl}
            title={"YouTube video player for " + title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Container>

    </>
  )
}
