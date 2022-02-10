import CoursePageLayout from '../../../components/CoursePageLayout'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Course_ch001() {
  return (
    <CoursePageLayout id="ch001">
      
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        For more information, check out my {" "}
        <a href="https://extra-ordinary.tv/2018/10/22/project-wookie-a-beginner-youtube-playlist/">blog</a>.
      </Typography>

    </CoursePageLayout>
  );
}
