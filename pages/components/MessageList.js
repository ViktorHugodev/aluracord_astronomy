import theme from '../../styles/theme.json';
import { Box, Text, Image, Icon } from '@skynexui/components';
import { useProps } from '../hooks/useProps';

export function MessageList() {
	const { listMessages, handleRemoveMessage } = useProps();

	return (
		<Box
			tag="ul"
			styleSheet={{
				overflowY: 'scroll',

				display: 'flex',
				flexDirection: 'column-reverse',
				flex: 1,
				color: theme.theme.colors.neutrals['000'],
				marginBottom: '16px',
			}}
		>
			{listMessages.map((message) => {
				return (
					<Text
						key={message.id}
						tag="li"
						styleSheet={{
							borderRadius: '5px',
							padding: '4px',
							marginBottom: '12px',
							hover: {
								padding: '4px',
								backgroundColor: theme.theme.colors.neutrals[800],
							},
						}}
					>
						<Box
							styleSheet={{
								marginBottom: '8px',
							}}
						>
							<Image
								styleSheet={{
									width: '20px',
									height: '20px',
									borderRadius: '50%',
									display: 'inline-block',
									marginRight: '8px',
								}}
								src={`https://github.com/${message.author}.png`}
								alt="Avatar github"
							/>
							<Text tag="strong">{message.author}</Text>
							<Text
								tag="span"
								styleSheet={{
									fontSize: '10px',
									marginLeft: '8px',
									color: theme.theme.colors.neutrals[300],
								}}
							>
								{new Date().toLocaleDateString()}
							</Text>
						</Box>
						<Box
							styleSheet={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							{message.text.startsWith(':sticker:') ? (
								<Image
									width="180px"
									alt="sticker"
									src={message.text.replace(':sticker:', '')}
								/>
							) : (
								message.text
							)}

							<Icon
								onClick={() => handleRemoveMessage(message.id)}
								label="Icon Component"
								name="FaTimes"
								styleSheet={{
									color: theme.theme.colors.primary['flame'],
									cursor: 'pointer',
								}}
							/>
						</Box>
					</Text>
				);
			})}
		</Box>
	);
}
