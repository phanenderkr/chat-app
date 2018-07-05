import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Conversation = props => {
	if (!props.messages) {
		return <div>Loading...</div>;
	}
	const messages = props.messages.sort((a, b) => a.time - b.time);
	return (
		<ConversationWrapper>
			{messages.map((message, index) => <Message message={message} key={index} />)}
		</ConversationWrapper>
	);
};

export default Conversation;

const ConversationWrapper = styled.div`
	height: 95%;
	border-bottom: 1px solid #222;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
`;
