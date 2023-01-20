import { FriendsListElement } from './FriendsListElement';
import PropTypes from 'prop-types';


import {
  UserCardContainer,
} from './FriendsList.styled';

export const FriendsList = ({items}) => {
    const elements = items.map(({id, ...props}) => {
        return (
        <FriendsListElement key={id} {...props}/>
        )
    });

    return (
    <UserCardContainer>
        {elements}
    </UserCardContainer>
    )
 };

 FriendsList.defaultProps = {
    items: [],
 }

 FriendsList.propTypes = {
     items: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
 }