import { useState } from 'react';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import theme from '../styles/theme.json';
import { useProps } from './hooks/useProps';

function Titulo(props) {
	const Tag = props.tag || 'h1';
	return (
		<>
			<Tag>{props.children}</Tag>
			<style jsx>{`
				${Tag} {
					color: ${theme.theme.colors.neutrals['000']};
					font-size: 24px;
					font-weight: 600;
				}
			`}</style>
		</>
	);
}

export default function PaginaInicial() {
	const { user, setUser } = useProps();

	return (
		<>
			<Box
				styleSheet={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: theme.theme.colors.primary['olive'],
					backgroundImage: 'url(/images/bg.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundBlendMode: 'multiply',
				}}
			>
				<Box
					styleSheet={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexDirection: {
							xs: 'column',
							sm: 'row',
						},
						width: '100%',
						maxWidth: '700px',
						borderRadius: '5px',
						padding: '32px',
						margin: '16px',
						boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
						backgroundColor: theme.theme.colors.primary['black'],
						backgroundImage: 'url(/images/rocket.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundBlendMode: '',
						backgroundSize: '50%',
						backgroundPosition: 'center ',
					}}
				>
					{/* Formulário */}
					<Box
						as="form"
						onSubmit={(e) => {
							e.preventDefault();
						}}
						styleSheet={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							width: { xs: '100%', sm: '50%' },
							textAlign: 'center',
							marginBottom: '32px',
						}}
					>
						<Titulo tag="h2">Pronto para decolar? 🚀</Titulo>
						<Text
							variant="body3"
							styleSheet={{
								marginBottom: '32px',
								color: theme.theme.colors.neutrals[300],
							}}
						>
							{theme.name}
						</Text>

						<TextField
							fullWidth
							value={user}
							onChange={(e) => setUser(e.target.value)}
							textFieldColors={{
								neutral: {
									textColor: theme.theme.colors.neutrals[200],
									mainColor: theme.theme.colors.neutrals[900],
									mainColorHighlight: theme.theme.colors.primary['olive'],
									backgroundColor: theme.theme.colors.neutrals[800],
								},
							}}
						/>
						<Button
							type="submit"
							href="/chat"
							label="Entrar"
							fullWidth
							buttonColors={{
								contrastColor: theme.theme.colors.neutrals['000'],
								mainColor: theme.theme.colors.primary['blue'],
								mainColorLight: theme.theme.colors.primary['dark-blue'],
								mainColorStrong: theme.theme.colors.primary['light-blue'],
							}}
						/>
					</Box>
					{/* Formulário */}

					{/* Photo Area */}
					<Box
						styleSheet={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							maxWidth: '200px',
							padding: '16px',
							backgroundColor: theme.theme.colors.neutrals[800],
							border: '1px solid',
							borderColor: theme.theme.colors.neutrals[999],
							borderRadius: '10px',
							flex: 1,
							minHeight: '240px',
						}}
					>
						<Image
							styleSheet={{
								borderRadius: '50%',
								marginBottom: '16px',
							}}
							src={`https://github.com/${user}.png`}
							alt="Imagee"
						/>
						<Text
							variant="body4"
							styleSheet={{
								color: theme.theme.colors.neutrals[200],
								backgroundColor: theme.theme.colors.neutrals[900],
								padding: '3px 10px',
								borderRadius: '1000px',
							}}
						>
							{user}
						</Text>
					</Box>
					{/* Photo Area */}
				</Box>
			</Box>
		</>
	);
}
