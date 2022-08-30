import { Link } from "react-router-dom";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetails, marginTop, theme }) => (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', sm: '358px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
    }}>
        <Link to={channelDetails?.id?.channelId ? `/channel/${channelDetails?.id?.channelId}` : '#'} >
            <CardContent sx={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', textAlign: 'center', color: (theme === 'light') ? '#000' : '#fff'
            }}>
                <CardMedia
                    src={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetails?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                />
                <Typography variant="h6"  >
                    {channelDetails?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>
                {channelDetails?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subcribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)


export default ChannelCard;