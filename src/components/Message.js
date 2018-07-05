import React from 'react';
// import moment from 'moment';
import styled from 'styled-components';

export default props => {
	// console.log(moment(props.message.time).toDate());
	const { name, time, content } = props.message;
	return (
		<MessageWrapper>
			<TopRow>
				<Sender>{name}</Sender>
				<span>{time.toDate().toUTCString()}</span>
			</TopRow>

			<Content>{content}</Content>
		</MessageWrapper>
	);
};

const MessageWrapper = styled.div`
	background-color: antiquewhite;
	max-width: 90%;
	margin: 10px;
	margin-top: 0;
	border: 1px solid #3ff;
	border-radius: 5px;
`;

const TopRow = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 5px 10px;
`;

const Sender = styled.h1`
	display: inline-block;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 1px 10px 3px 3px;
`;

const Content = styled.p`
	padding: 3px 15px;
	box-sizing: border-box;
`;
