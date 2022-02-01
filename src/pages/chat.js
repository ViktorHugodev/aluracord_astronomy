import { Box, Button, TextField } from '@skynexui/components';
import theme from '../styles/theme.json';
import { ButtonSendSticker } from '../components/ButtonSticker';
import { Header } from '../components/Header';
import { MessageList } from '../components/MessageList';
import { useProps } from '../hooks/useProps';

export default function ChatPage() {
	const { message, handleMessage, setMessage } = useProps();

	return (
		<Box
			styleSheet={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				// backgroundColor: 'rgba(255, 255, 255, 0.9)',
				backgroundImage: `url(/images/bg-chat-main.jpg)`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundBlendMode: 'multiply',
				color: theme.theme.colors.neutrals['000'],
			}}
		>
			<Box
				styleSheet={{
					display: 'flex',
					flexDirection: 'column',

					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					backgroundBlendMode: 'multiply',
					backgroundImage: `url(/images/bg-chat.jpg)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					flex: 1,
					boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
					borderRadius: '5px',
					backgroundColor: theme.theme.colors.neutrals[300],
					height: '100%',
					maxWidth: '90%',
					maxHeight: '90vh',
					padding: '32px',
				}}
			>
				<Header />
				<MessageList />
				<Box
					as="form"
					styleSheet={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<TextField
						value={message}
						onKeyPress={(event) => {
							if (event.key === 'Enter') {
								event.preventDefault();
								handleMessage(message);
							}
						}}
						onChange={(event) => {
							setMessage(event.target.value);
						}}
						placeholder="Insira sua mensagem aqui..."
						styleSheet={{
							width: '100%',
							border: '0',
							resize: 'none',
							borderRadius: '5px',
							padding: '6px 8px',
							backgroundColor: theme.theme.colors.neutrals[800],
							marginRight: '12px',
							color: theme.theme.colors.neutrals[200],
						}}
					/>

					<Button
						colorVariant="dark"
						iconName="arrowUp"
						onClick={() => handleMessage(message)}
						label=""
						rounded="full"
						size="md"
					/>
					<ButtonSendSticker
						onStickerClick={(sticker) => {
							handleMessage(`:sticker: ${sticker}`);
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
}
