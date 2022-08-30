import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";



const VideoCard = ({ video: { id: { videoId }, snippet }, theme }) => {

    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '358px', md: '320px' },
                boxShadow: 'none', borderRadius: '10px',
                ':hover': {
                    boxShadow: '5px 5px 10px #4e4b4bb8',
                    transform: 'scale(1.1)',
                },
            }}
        raised={true}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180, backgroundSize: 'cover' }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: (theme === 'light') ? '#e0e0e0' : '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color={(theme === 'light') ? "#000" : "#fff"} >
                        {snippet?.title.slice(0, 60) || demoVideoTitle}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray" >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>

        </Card>
    )
}

export default VideoCard