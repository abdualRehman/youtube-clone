import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetails = ({ theme }) => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetails(data.items[0]);
      })
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
  }, [id])
  if (!videoDetails?.snippet) return 'Loading...';
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box minHeight="90vh" >
      <Stack direction={{ xs: 'column', md: 'row' }} >
        <Box flex={1} >
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography variant="h5" p={2} fontWeight="bold" color={(theme === 'light') ? '#000' : "#fff"} >
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: (theme === 'light') ? '#000' : '#fff' }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle', md: 'h6' }} color={(theme === 'light') ? '#000' : "#fff"} >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: "5px" }} />
                </Typography>
              </Link>

              <Stack direction="row" gap='20px' alignItems='center' sx={{ color: (theme === 'light') ? '#000' : '#fff' }} >
                <Typography variant="body1" sx={{ opacity: 0.7 }} >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" theme={theme} />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails