import theme from '../styles/theme.json';
import { Box, Button, Image } from '@skynexui/components';
import { useProps } from '../hooks/useProps';

export function Header() {
	const { user } = useProps();
	return (
		<Box
			styleSheet={{
				width: '100%',
				marginBottom: '16px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Image
				styleSheet={{
					width: '80px',
					height: '80px',
					borderRadius: '50%',
					display: 'inline-block',
					marginRight: '8px',
				}}
				src={`https://github.com/${user}.png`}
				alt="Avatar github"
			/>
			<Button
				colorVariant="neutral"
				variant="tertiary"
				href="/"
				label="Logout"
				rounded="sm"
			/>
		</Box>
	);
}
