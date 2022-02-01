import { GlobalStyle } from '../styles/theme';
import { ChatProvider } from './hooks/useProps';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ChatProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</ChatProvider>
		</>
	);
}

export default MyApp;
