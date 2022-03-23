import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

import theme from 'styles/theme';

interface Props extends AppProps {
	emotionCache: any;
	clientSideEmotionCache: any;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: Props) {
//   return <Component {...pageProps} />
  	return (
    	<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
                <Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
  	);
}

export default MyApp
