import PropTypes from 'prop-types';

import { FriendsList } from './FriendsList.styled';
import { FriendListItem } from './FriendListItem'
export const Friends = ({ friends}) => {
    return (
<FriendsList>
            {friends.map(({ avatar, name, isonline, id}) => (
    <FriendListItem
    key={id}
    avatar={avatar}
    name={name}
 isonline={isonline}
    />                
 ))}
</FriendsList>



    )

}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}