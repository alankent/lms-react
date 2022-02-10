import Container from '@mui/material/Container'

export default function YouTube({ code }) {
  return (
    <Container maxWidth="lg">
      <div style={{overflow: "hidden", paddingTop: "56.25%", position: "relative"}}>
        <iframe
          style={{border: 0, position: "absolute", left: 0, top: 0, width: "100%", height: "100%"}}
          src={"https://www.youtube.com/embed/" + code}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </Container>
  );
}
