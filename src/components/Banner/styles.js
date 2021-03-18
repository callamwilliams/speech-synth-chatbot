import styled from 'styled-components';

export const Image = styled.img`
    object-fit: cover;
    object-position: inherit;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    transition: transform 0.2s ease-in-out;
    text-decoration: none;

    // IE11
    @media all and (-ms-high-contrast: none) {
        position: absolute;
        top: 50%;
        left: 50%;
        height: auto;
        width: auto;
        transform: translate3d(-50%, -50%, 0);
    }
`;

export const Figure = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    object-position: 50% 50%;
    overflow: hidden;
`;

export const Child = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
