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