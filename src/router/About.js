import React from 'react';
import { useParams } from 'react-router-dom';

function About(props) {
	const { sermonId } = useParams();
    return (
		<>
			<h1>{sermonId} 소개입니다.</h1>
		</>
    );
}

export default About;