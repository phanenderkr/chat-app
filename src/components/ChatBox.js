import React, { Component } from 'react';
import Conversation from './Conversation';
import styled from 'styled-components';

export default class ChatBox extends Component {
	state = {
		text: ''
	};

	onInputChange = e => {
		const { value: text } = e.target;
		this.setState(() => ({ text }));
	};

	onInputSubmit = e => {
		e.preventDefault();
		const { text } = this.state;
		if (text.trim()) {
			this.props.createNewMessage(this.props.activeConversation.id, text.trim());
			this.setState({
				text: ''
			});
		}
	};

	render() {
		// console.log(`Chatbox -${this.props.activeConversation}`);
		if (!this.props.activeConversation) {
			return <div>Loading...</div>;
		}
		return (
			<ChatboxWrapper>
				{/* <Conversation messages={this.messages} /> */}
				<Conversation
					messages={this.props.activeConversation && this.props.activeConversation.messages}
				/>
				<form onSubmit={this.onInputSubmit} onChange={this.onInputChange}>
					<Input
						type="text"
						name="chat-input"
						id="chat-input"
						autocomplete="off"
						value={this.state.text}
					/>
				</form>
			</ChatboxWrapper>
		);
	}
}

const ChatboxWrapper = styled.div`
	display: flex;
	flex-flow: column;
	width: 75%;
	height: 100%;
	box-sizing: border-box;
`;

const Input = styled.input`
	/* height: 5%; */
	width: 100%;
	box-sizing: border-box;
	padding: 6px;
	font-size: 1.3rem;
	border: 1px solid #333;
	border-radius: 5px;
	/* padding-bottom: 0; */
	margin-bottom: 2px;
`;
