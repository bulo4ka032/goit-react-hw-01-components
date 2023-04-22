import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem/FriendItem'
import { FriensList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriensList>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id} avatar={avatar} status={isOnline} name={name}/>
        );
      })}
    </FriensList>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}