import React from 'react';
import Banner from '../components/Banner';
import Speech from '../components/Speech';

const HomePage = () => (
    <main data-testid="lpg-voice-chat-index" role="main">
        <Banner image="/st-pauls.jpg" title="Welcome to LPG Chatbot">
            <Speech />
        </Banner>
    </main>
);

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default HomePage;
