import React from 'react';
import { useParams } from 'react-router-dom';

function Together(props) {
	const { sermonId } = useParams();
    return (
		<>
			<h1>{sermonId} 석천입니다.</h1>
		</>
    );
}

export default Together;