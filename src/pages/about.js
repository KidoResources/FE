import React from 'react';
import Navbar from '../components/navBar';

const About = () => {
return (
    <Navbar />,
	<div
	style={{
		display: 'flex',
		justifyContent: 'Center',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>GeeksforGeeks is a Computer Science portal for geeks.</h1>
	</div>
);
};

export default About;

