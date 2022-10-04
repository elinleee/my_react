import { Box, Card, CardContent, CardMedia, Grid, IconButton, Paper, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import './Sermon.css'
import YoutubePlayer from '../Main/Player/YoutubePlayer'
import TypeSelector from '../Main/TypeSelector/TypeSelector';
import { BibleList } from './BibleList';

function Sermon(props) {
	const { sermonId } = useParams();

	const Item = styled(Paper)(({ theme }) => ({
		// backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		// ...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		width: '100%',
	}));

	const RadiusCard = styled(Card)(({ theme }) => ({
		borderRadius: '20px',
		boxShadow: '0px 0px 10px 3px rgb(245,245,245)',
		margin: '10px',
		padding: '15px'
	}));

	return (
		<>
			<Box overflow='hidden'>
				{/* <img src="https://placeimg.com/1920/150/any" /> */}
			</Box>
			<Grid container spacing={.5} className="sermon-body">
				<Grid item xs={4}>
					<Item className="sermon-item" sx={{ boxShadow: 'none' }}>
						<img src="img/sermon.png" />
					</Item>
				</Grid>
				<Grid item xs={6}>
					<Box width="100%" alignItems="center">
						<TypeSelector />
					</Box>
					<Item className="sermon-item" sx={{ boxShadow: 'none' }}>
						{/* <p>말씀 버튼을 누르면 성경 구절을 볼 수 있어요.</p> */}
						<Box width="100%" height="100%">
							<Grid item>
								{
									[0, 1, 2, 3].map((i, index) => {
										return (
											<Item sx={{ boxShadow: 'none' }}>
												<RadiusCard sx={{ display: 'flex' }} key={index}>
													<CardMedia
														// component="YoutubePlayer"
														sx={{ width: '55%', padding: '5px' }}
														// image="/static/images/cards/live-from-space.jpg"
														alt="Live from space album cover"
													>
														<YoutubePlayer url="https://youtu.be/OEJpTksueVU" />
													</CardMedia>
													<Box sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
														<CardContent sx={{ flex: '1 0 auto', }}>
															<Typography component="div" variant="h6">
																우리의 모습을 점검하라
															</Typography>
															<Typography variant="subtitle1" color="text.secondary" component="div">
																빌립보서 2장 9절
															</Typography>
														</CardContent>
														<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
														<Button><a href={"http://ibibles.net/quote.php?kor-"+BibleList["빌립보서"]+"/2:9"} target="_blank">마태복음 5:3-12</a></Button>
														{/* <center><object type="text/html" data={"http://ibibles.net/quote.php?kor-"+BibleList["빌립보서"]+"/2:9"} width="800" height="160"></object></center> */}
														</Box>
													</Box>

												</RadiusCard>
											</Item>
										)
									})
								}

								{/* <Item></Item>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item>
					<Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item> */}
								{/* <Item><YoutubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0" /></Item> */}
							</Grid>
						</Box>
					</Item>
				</Grid>

			</Grid>

		</>
	);
}

export default Sermon;