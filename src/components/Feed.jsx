import { useState, useEffect } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// #e0e0e0
const Feed = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [selectedCategory])
  return (
    <Stack sx={{
      flexDirection: { sx: 'column', md: "row" }
    }} >
      <Box sx={{ height: { sx: 'auto', md: '90vh' }, borderRight: `1px solid  ${theme === 'light' ? '#e0e0e0' : '#3d3d3d'}`, px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          theme={theme}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: (theme === 'light') ? '#000' : '#fff' }} >
          Copyright 2022 A.R Web Creators
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: '89vh', flex: 2 }} >
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: (theme === 'light') ? '#000' : '#fff' }} >
          {selectedCategory} <span style={{ color: '#FC1503' }} >
            Videos
          </span>
        </Typography>
        <Videos videos={videos} theme={theme} />
      </Box>

    </Stack>
  )
}

export default Feed