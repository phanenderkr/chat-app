import React, { Component } from 'react';
import styled from 'styled-components';

export default class Users extends Component {
	render() {
		const { users, title, activeId } = this.props;
		// console.log()
		return (
			<Wrapper>
				<Title>{title}</Title>
				{users &&
					users.map(user => (
						<User
							active={activeId === user.id}
							href="#"
							key={user.id}
							onClick={e => {
								e.preventDefault();
								this.props.onSelection(user.id);
							}}
						>
							{user.isUser ? user.title : `# ${user.title}`}
						</User>
					))}
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	min-height: 50%;
	display: flex;
	text-align: center;
	flex-flow: column;
	align-items: center;
	border-bottom: 2px solid rgb(11, 115, 243);
	box-sizing: border-box;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	margin: 10px;
`;

const User = styled.a`
	font-size: 1.1rem;
	padding: 5px;
	display: inline-block;
	min-width: 40%;

	&:hover {
		background-color: aqua;
		cursor: pointer;
	}
	background-color: ${props => (props.active ? 'black' : '')};
`;
