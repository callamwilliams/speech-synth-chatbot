import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'next/router';
import { activeTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global';
import { wrapper } from '../store/configureStore';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>LPG chatbot</title>
            <meta property="og:title" content="lpg-voice-chat" key="title" />
            <meta name="theme-color" content="#5bbad5" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <ThemeProvider theme={activeTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

App.defaultProps = {
    pageProps: {},
};

App.propTypes = {
    pageProps: PropTypes.any,
    Component: PropTypes.any.isRequired,
};

export default wrapper.withRedux(withRouter(App));
