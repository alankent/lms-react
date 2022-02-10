import Container from '@mui/material/Container'
import StructuredData from './StructuredData'
import moment from 'moment'

export default function YouTube({ title, description, thumbnailUrl, published, duration, youTubeCode }) {

  const embedUrl = "https://www.youtube.com/embed/" + youTubeCode

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
  );
}
