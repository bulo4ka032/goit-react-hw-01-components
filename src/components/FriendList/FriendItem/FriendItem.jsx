import { FriendCard, Status, Name} from "./FriendItem.styled";

export const FriendItem = ({ avatar, name, status }) => {
  return (<FriendCard>
    <Status prop={status}></Status>
    <img src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </FriendCard>);
};

console.log(FriendItem);