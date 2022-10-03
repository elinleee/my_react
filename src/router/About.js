import { Box, Grid, Paper, Stack, styled } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';

import './About.css'

function About(props) {
	const { sermonId } = useParams();

	const Item = styled(Paper)(({ theme }) => ({
		// backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		// ...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		width: '100%',
	}));

	return (
		<>
			<Box overflow='hidden'>
				{/* <img src="https://placeimg.com/1920/150/any" /> */}
			</Box>
			<Grid container spacing={.5} className="about-body">
				<Grid item xs={7}>
					<Item className="about-item" sx={{ boxShadow: 'none' }}>
						<div className="about-content">
							<h1 className="mt-0 mb-16 reveal-from-bottom is-revealed">
								석천에 오신 것을 환영합니다.
							</h1>
							<div className="container-xs">
								<p className="m-0 mb-32 reveal-from-bottom is-revealed" data-reveal-delay="400">
									샬롬, 주님의 이름으로 축복합니다. <br/><br/>
									하나님과 가족들과의 만남을 통해 쉼과 교제를 얻고 <br/>
									그로 인한 회복으로 가정과 교회공동체를 하늘가족공동체로 세워가는 석천교회 <br/><br/>
								</p>
								<div className="reveal-from-bottom is-revealed" data-reveal-delay="600">
									<div className="button-group">
										<Button><a href="https://www.youtube.com/channel/UCJUsz3WJ3aLVO1vMEDIDsEQ" target="_blank">예배 실황으로 가기</a></Button>
									</div>
								</div>
							</div>
						</div>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item className="about-item" sx={{ boxShadow: 'none' }}>
						<img src="img/about.png" />
					</Item>
				</Grid>

			</Grid>
		</>
	);
}

export default About;