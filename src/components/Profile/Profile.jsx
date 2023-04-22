import PropTypes  from "prop-types";
import { ProfileCard, ProfilePic, ProfileDescr, ProfileName, ProfileTag, ProfileLocation, ProfileStatsList, ProfileStatsItem} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, followers, views, likes}) => {
  return (
    <ProfileCard>
      <ProfileDescr className="description">
        <ProfilePic
          src={avatar}
          alt="User avatar"
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescr>

      <ProfileStatsList className="stats">
        <ProfileStatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </ProfileStatsItem>
      </ProfileStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired
}

