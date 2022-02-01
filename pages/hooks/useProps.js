import { createContext, useContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
export const ChatContext = createContext({});
const superbaseClient = createClient(
	process.env.NEXT_PUBLIC_API_URL,
	process.env.NEXT_PUBLIC_API_KEY
);

function realTimeMessages(addMessage) {
	return superbaseClient
		.from('messages')
		.on('INSERT', (response) => {
			addMessage(response.new);
		})
		.subscribe();
}

export function ChatProvider(props) {
	const [user, setUser] = useState('viktorhugodev');
	const [message, setMessage] = useState('');
	const [listMessages, setListMessages] = useState([]);

	useEffect(() => {
		superbaseClient
			.from('messages')
			.select('*')
			.order('id', { ascending: false })
			.then((response) => {
				const { data } = response;

				setListMessages(data);
			});

		const subscribe = realTimeMessages((message) => {
			setListMessages((newList) => {
				return [message, ...newList];
			});
		});

		return () => {
			subscribe.unsubscribe();
		};
	}, []);

	function handleMessage(message) {
		if (message.trim()) {
			const newMessage = {
				text: message,
				author: `${user}`,
			};

			superbaseClient
				.from('messages')
				.insert([newMessage])
				.then((response) => {
					// const { data } = response;
					// setListMessages([data[0], ...listMessages]);
				});

			setMessage('');
		}
	}

	function handleRemoveMessage(id) {
		const filteredMessage = listMessages.filter((message) => message.id !== id);
		setListMessages(filteredMessage);
	}
	return (
		<ChatContext.Provider
			value={{
				user,
				setUser,
				message,
				listMessages,
				handleMessage,
				setMessage,
				handleRemoveMessage,
			}}
		>
			{props.children}
		</ChatContext.Provider>
	);
}

export function useProps() {
	const context = useContext(ChatContext);
	return context;
}
/**
 * Criar sessão amigos do github
 */
