// prevent creating full trace
process.traceDeprecation = true;

import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/index.css';
import { Layout } from '~/components/General/Layout';
import { ToastContainerWithStyles } from '~/components/General/Notification/ToastContainerWithStyles';
import StoreUpdater from '~/components/StoreUpdater';
import { StyledThemeProvider } from '~/context/ThemeContext';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <StoreUpdater />
            <StyledThemeProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ToastContainerWithStyles />
            </StyledThemeProvider>
        </div>
    );
};

export default App;
