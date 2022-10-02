import React from 'react';
import { Link } from 'react-router-dom'

function Home(props) {
    return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/sermon/1"><li>1번 설교</li></Link>
				<Link to="/sermon/2"><li>2번 설교</li></Link>
			</ul>
		</>
    );
}

export default Home;