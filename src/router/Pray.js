import React from 'react';
import { useParams } from 'react-router-dom';

function Pray(props) {
	const { sermonId } = useParams();
    return (
		<>
			<h1>{sermonId} 기도입니다.</h1>
		</>
    );
}

export default Pray;