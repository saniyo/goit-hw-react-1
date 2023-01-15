import styled from 'styled-components';
import { Nametext }
import PropTypes from 'prop-types';

export const User = ({ user: { name, email } }) => {
    return (
        <>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
        </>
    )
};

User.PropTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
}