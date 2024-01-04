import PropTypes from 'prop-types';

import { FriendsList } from './FriendsList.styled';
import { FriendListItem } from './FriendListItem'
export const Friends = ({ friends}) => {
    return (
<FriendsList>
            {friends.map(({avatar, name, isOnline, id}) => (
    <FriendListItem
    key={id}
    avatar={avatar}
    name={name}
    isOnline={isOnline}
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