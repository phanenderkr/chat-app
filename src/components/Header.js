import React from 'react';
import styled from 'styled-components';

export default () => (
	<Header>
		<Title>Chat App</Title>
	</Header>
);

const Header = styled.header`
	background-color: #222;
	padding: 5px;
	box-sizing: border-box;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 1.5em;
`;
