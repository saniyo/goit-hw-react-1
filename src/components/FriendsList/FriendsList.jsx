import PropTypes from 'prop-types';

import {
  UserCardContainer,
  UserStatsItem,
  UserSpanStats,
  UserImg,            
  UserName,
} from './FriendsList.styled';

export const FriendsList = ({items}) => {
    const elements = items.map(({avatar, name, isOnline, id}) => {
        return (
        <UserStatsItem key={id}>
            <UserSpanStats isOnline={isOnline}></UserSpanStats>
            <UserImg src={avatar} alt="user ava"/>
            <UserName>{name}</UserName>
        </UserStatsItem>
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
        })
    )
 }