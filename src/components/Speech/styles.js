import styled from 'styled-components';

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    min-width: 500px;
    padding: 10px 20px;
    background: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 15px;
    color: ${(props) => props.theme.colors.tertiary};
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.1s ease-in;
    font-size: 1.4rem;

    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.secondary};
    }

    span {
        margin-left: 20px;
    }
`;

export const Wall = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    font-size: 0.9em;
    margin: 0 0 -3px auto;
    padding: 20px;
    background-color: #fbfbfb;
    border-radius: 1.4em 0.3em 1.4em 1.4em;
    color: #333333;
`;
