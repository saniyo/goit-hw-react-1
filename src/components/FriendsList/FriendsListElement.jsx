import {
    UserStatsItem,
    UserSpanStats,
    UserImg,            
    UserName,
  } from './FriendsList.styled';
import PropTypes from 'prop-types';


export const FriendsListElement = ({isOnline, avatar, name}) => {
    return (
        <UserStatsItem>
        <UserSpanStats isOnline={isOnline}></UserSpanStats>
        <UserImg src={avatar} alt="user ava"/>
        <UserName>{name}</UserName>
        </UserStatsItem>
    )
}

FriendsListElement.propTypes = {
   isOnline: PropTypes.bool.isRequired,
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
}