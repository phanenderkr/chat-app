import uuid from 'uuid';
import moment from 'moment';

//? Messages format
// * {name, content, time}

export const setInitialState = () => {
	const dateString = '2018-02-19';
	let date1 = moment(dateString);
	let date2 = date1.clone().add(25, 'minutes');
	let date3 = date1.clone().add(35, 'minutes');
	let date4 = date1.clone().add(45, 'minutes');
	// console.log(date2);

	let conversationCricket = {
		id: uuid(),
		title: 'cricket',
		isUser: false,
		messages: [
			{
				name: 'Messi',
				time: date1,
				content: 'This is not my game'
			},
			{
				name: 'Iniesta',
				time: date2,
				content: 'Same here'
			},
			{
				name: 'Sachin',
				time: date3,
				content: 'This is our game'
			},
			{
				name: 'Dravid',
				time: date4,
				content: 'Yeah'
			}
		]
	};

	let conversationFootball = {
		id: uuid(),
		title: 'football',
		isUser: false,
		messages: [
			{
				name: 'Messi',
				time: date1,
				content: 'Message from messi'
			},
			{
				name: 'Iniesta',
				time: date2,
				content: 'Message from iniesta'
			},
			{
				name: 'Sachin',
				time: date3,
				content: 'Message from sachin'
			},
			{
				name: 'Dravid',
				time: date4,
				content: 'Message from darvid'
			}
		]
	};

	let conversationSachin = {
		id: uuid(),
		title: 'Sachin',
		isUser: true,
		messages: [
			{
				name: 'Sachin',
				time: date1,
				content: 'Message from sachin'
			},
			{
				name: 'Sachin',
				time: date2,
				content: 'Message from sachin'
			},
			{
				name: 'Sachin',
				time: date3,
				content: 'Message from sachin'
			},
			{
				name: 'Sachin',
				time: date4,
				content: 'Message from sachin'
			}
		]
	};

	let conversationMessi = {
		id: uuid(),
		title: 'Messi',
		isUser: true,
		messages: [
			{
				name: 'Messi',
				time: date1,
				content: 'Message from Messi'
			},
			{
				name: 'Messi',
				time: date2,
				content: 'Message from Messi'
			},
			{
				name: 'Messi',
				time: date3,
				content: 'Message from Messi'
			},
			{
				name: 'Messi',
				time: date4,
				content: 'Message from Messi'
			}
		]
	};

	let conversationIniesta = {
		id: uuid(),
		title: 'Iniesta',
		isUser: true,
		messages: [
			{
				name: 'Iniesta',
				time: date1,
				content: 'Message from Iniesta'
			},
			{
				name: 'Iniesta',
				time: date2,
				content: 'Message from Iniesta'
			},
			{
				name: 'Iniesta',
				time: date3,
				content: 'Message from Iniesta'
			},
			{
				name: 'Iniesta',
				time: date4,
				content: 'Message from Iniesta'
			}
		]
	};

	let conversationDravid = {
		id: uuid(),
		title: 'Dravid',
		isUser: true,
		messages: [
			{
				name: 'Dravid',
				time: date1,
				content: 'Message from Dravid'
			},
			{
				name: 'Dravid',
				time: date2,
				content: 'Message from Dravid'
			},
			{
				name: 'Dravid',
				time: date3,
				content: 'Message from Dravid'
			},
			{
				name: 'Dravid',
				time: date4,
				content: 'Message from Dravid'
			}
		]
	};

	return {
		[conversationCricket.id]: conversationCricket,
		[conversationFootball.id]: conversationFootball,
		[conversationSachin.id]: conversationSachin,
		[conversationMessi.id]: conversationMessi,
		[conversationIniesta.id]: conversationIniesta,
		[conversationDravid.id]: conversationDravid
	};
};
