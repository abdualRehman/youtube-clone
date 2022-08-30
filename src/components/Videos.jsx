import { Stack, Box } from "@mui/system";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction , theme }) => {
    if(!videos?.length) return 'Loading...'
    return (
        <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2} >
            {videos.map((item, idx) => {
                if (item?.id?.videoId || item?.id?.channelId) {
                    return (
                        <Box key={idx} sx={{width: { xs: '100%', sm: '358px', md: '320px' }}} >
                            {item?.id?.videoId && <VideoCard video={item} theme={theme} />}
                            {item?.id?.channelId && <ChannelCard channelDetails={item} theme={theme} />}
                        </Box>
                    )
                }
            })}
        </Stack>
    )
}


export default Videos