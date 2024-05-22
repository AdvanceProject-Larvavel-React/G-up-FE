import React from 'react';
import PropTypes from 'prop-types';

const ErrorComponent = ({ message }) => {
    return (
        <div style={{ color: 'red' }}>{message}</div>
    );
}

ErrorComponent.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorComponent;
