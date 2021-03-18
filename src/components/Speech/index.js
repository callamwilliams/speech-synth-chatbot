import React, { useState, useEffect } from 'react';
import { Translate } from 'phosphor-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Wall, Item } from './styles';

const Speech = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [browserSupport, setBrowserSupport] = useState(true);
    const { listening, resetTranscript, transcript, interimTranscript, finalTranscript } = useSpeechRecognition();
    const { startListening, stopListening, browserSupportsSpeechRecognition } = SpeechRecognition;

    const stop = () => {
        stopListening();
        setChatHistory([]);
    };

    const start = () => {
        startListening({ continuous: true, language: 'en-GB' });
    };

    const handleClick = () => (listening ? stop() : start());

    useEffect(() => {
        if (!browserSupportsSpeechRecognition()) {
            setBrowserSupport(false);
        }
    }, [browserSupportsSpeechRecognition]);

    useEffect(() => {
        if (finalTranscript !== '') {
            setChatHistory([...chatHistory, transcript]);
            resetTranscript();
        }
    }, [finalTranscript, resetTranscript]);

    return (
        <div>
            {browserSupport ? (
                <>
                    <Wall>
                        {chatHistory.map((item, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Item key={i}>{item}</Item>
                        ))}

                        {interimTranscript ? <Item>...</Item> : null}
                    </Wall>
                    <Button type="button" onClick={() => handleClick()}>
                        {listening ? 'Listening...' : 'Talk to me'}
                        <span>
                            <Translate size={48} />
                        </span>
                    </Button>
                </>
            ) : (
                <p>Sorry not supported</p>
            )}
        </div>
    );
};

Speech.propTypes = {};

export default Speech;
