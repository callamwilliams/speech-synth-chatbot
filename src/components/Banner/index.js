import React from 'react';
import PropTypes from 'prop-types';
import { Figure, Image, Child } from './styles';

const Banner = ({ image, title, children }) => (
    <Figure>
        <Image src={image} alt={title} loading="lazy" />
        <Child>{children}</Child>
    </Figure>
);

Banner.defaultProps = {
    children: [],
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default Banner;
