import PropTypes from 'prop-types';
import css from './Profile.module.css';

import {
  UserCardContainer,
  UserDescription,
  UserImg,
  UserStats,
  UserStatsItem,
  UserSpanStats,
  UserName,
} from './Profile.styled';

export const User = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  {css};
  return (
    <>
      <UserCardContainer>
        <UserDescription>
          <UserImg src={avatar} alt="user photo" />
          <UserName>{username}</UserName>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </UserDescription>
        <UserStats>
          <UserStatsItem>
            <span className="label">Followers</span>
            <UserSpanStats>{followers}</UserSpanStats>
          </UserStatsItem>
          <UserStatsItem>
            <span className="label">Views</span>
            <UserSpanStats>{views}</UserSpanStats>
          </UserStatsItem>
          <UserStatsItem>
            <span className="label">Likes</span>
            <UserSpanStats>{likes}</UserSpanStats>
          </UserStatsItem>
        </UserStats>
      </UserCardContainer>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
