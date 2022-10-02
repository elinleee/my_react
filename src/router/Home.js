import React from 'react';
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';

import TypeSelector from '../Main/TypeSelector/TypeSelector';
import YoutubePlayer from '../Main/Player/YoutubePlayer';
import { Box, Stack, Paper } from '@mui/material';

function Home(props) {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		width: '100%',
	}));

	return (
		<>
			<Box width="100%" overflow="hidden">
				<img src="https://placeimg.com/1920/450/any" />
			</Box>
			<Box width="100%" alignItems="center">
				<TypeSelector/>
			</Box>
			<Box width="100%" height="100%">
				<Stack direction="row" spacing={2}>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
					{/* <Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item> */}
				</Stack>
			</Box>

			{/* <SimpleSlider/> */}
			{/* <h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/sermon/1"><li>1번 설교</li></Link>
				<Link to="/sermon/2"><li>2번 설교</li></Link>
			</ul> */}
		</>
	);
}

export default Home;