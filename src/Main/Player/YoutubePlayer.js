import React from 'react';
import ReactPlayer from "react-player";

import Box from '@mui/material/Box';

import './YoutubePlayer.css'

function YoutubePlayer(props) {
    const url = props.url;

    return (
        <Box className="player-wrapper">
            <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url={url}
                playing={false}
                muted={true}
                controls={true}
            />
        </Box>
    );
}

export default YoutubePlayer