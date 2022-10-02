import React from 'react';
import { useParams } from 'react-router-dom';

function Sermon(props) {
	const { sermonId } = useParams();
    return (
		<>
			<h1>{sermonId} 설교입니다.</h1>
		</>
    );
}

export default Sermon;