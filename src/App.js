import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './components';

// '#000'
const App = () => {
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        setTheme(theme);
    },[theme])
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: ((theme === 'light') ? '#f9f9f9' : '#000') }} >
                <Navbar theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path='/' exact element={<Feed theme={theme} />} />
                    <Route path='/video/:id' element={<VideoDetails theme={theme} />} />
                    <Route path='/channel/:id' element={<ChannelDetails theme={theme} />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )

}
export default App