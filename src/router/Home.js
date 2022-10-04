import React from 'react';
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';

import TypeSelector from '../Main/TypeSelector/TypeSelector';
import YoutubePlayer from '../Main/Player/YoutubePlayer';
import { Box, Stack, Paper, Grid, Card } from '@mui/material';
import SimpleSlider from '../Main/Slick/SimpleSlider';

function Home(props) {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		width: '100%',
		borderRadius: '20px',
		boxShadow: '0px 0px 10px 3px rgb(245,245,245)',
	}));
	const RadiusCard = styled(Card)(({ theme }) => ({
		borderRadius: '20px',
		boxShadow: '0px 0px 10px 3px rgb(245,245,245)',
		// margin: '10px',
		padding: '10px'
	}));

	return (
		<>
			<Box width="100%" overflow="hidden">
				<SimpleSlider/>
			</Box>
			<Box width="100%" alignItems="center">
				<TypeSelector/>
			</Box>
			<Box width="100%" height="100%">
				<Grid container  columns={16} justifyContent='space-around'>
				<Grid item xs={5}>
				<RadiusCard><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></RadiusCard>
				</Grid>
				<Grid item xs={5}>
				<RadiusCard><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></RadiusCard>
				</Grid>
				<Grid item xs={5}>
				<RadiusCard><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></RadiusCard>
				</Grid>
				</Grid>
				{/* <Stack direction="row" spacing={2}>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
				</Stack> */}
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