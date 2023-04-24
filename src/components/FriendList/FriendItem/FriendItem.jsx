import { FriendCard, Status, Name} from "./FriendItem.styled";
import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, status }) => {
  return (<FriendCard>
    <Status prop={status}></Status>
    <img src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </FriendCard>);
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
}
