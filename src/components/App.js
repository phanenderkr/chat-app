import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import moment from 'moment';

import Header from './Header';
import ChatBox from './ChatBox';
import Users from './Users';
import { setInitialState } from '../helper/initialState';

class App extends Component {
	// state = setInitialState();
	state = {
		conversations: {},
		activeConversationId: null
	};

	componentDidMount() {
		if (!localStorage.getItem('state')) {
			const initialState = setInitialState();
			setTimeout(() => {
				this.setState(() => ({
					conversations: initialState,
					activeConversationId: Object.keys(initialState)[0]
				}));
			}, 2000);
		}
	}

	getAllConvos = () => {
		if (
			Object.keys(this.state.conversations).length !== 0 &&
			this.state.conversations.constructor === Object
		) {
			return _.map(this.state.conversations, (val, key) => val);
		}
	};

	getUsers = () => {
		const allUsers = this.getAllConvos();
		if (allUsers) {
			return allUsers.filter(user => user.isUser);
		}
	};

	getChannels = () => {
		const allUsers = this.getAllConvos();
		if (allUsers) {
			return allUsers.filter(user => !user.isUser);
		}
	};

	selectConversation = id => {
		this.setState(() => ({ activeConversationId: id }));
	};

	createNewMessage = (id, message) => {
		const newMessage = {
			name: 'You',
			content: message,
			time: moment()
		};
		const oldMessages = this.state.conversations[id].messages;
		const conversations = this.state.conversations;
		this.setState(state => {
			return {
				conversations: {
					...conversations,
					[id]: {
						...conversations[id],
						messages: [...oldMessages, newMessage]
					}
				}
			};
		});
	};

	render() {
		// console.log(`App-${this.state.conversations[this.state.activeConversationId]}`);
		// console.log(`App-${this.state.activeConversationId}`);
		return (
			<EntireApp>
				<Header />
				<AppBody>
					<UsersBody>
						<Users
							title="Channels"
							users={this.getChannels()}
							onSelection={this.selectConversation}
							activeId={this.state.activeConversationId}
						/>
						<Users
							title="Users"
							users={this.getUsers()}
							onSelection={this.selectConversation}
							activeId={this.state.activeConversationId}
						/>
					</UsersBody>

					<ChatBox
						createNewMessage={this.createNewMessage}
						activeConversation={this.state.conversations[this.state.activeConversationId]}
					/>
				</AppBody>
			</EntireApp>
		);
	}
}

export default App;

const EntireApp = styled.div`
	height: 100vh;
`;

const AppBody = styled.div`
	display: flex;
	box-sizing: border-box;
	height: 95%;
`;

const UsersBody = styled.div`
	width: 25%;
	background-color: rgb(115, 115, 243);
	min-height: 100%;
	border-right: 4px solid rgb(6, 6, 51);
	display: flex;
	flex-flow: column;
	color: white;
`;
