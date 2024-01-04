import PropTypes from 'prop-types';
import { List, FriendStatus, FriendImg, FriendName } from './FriendsList.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => { 
    return (
     <List>
     <FriendStatus isOnline={isOnline}/>     
    <FriendImg src={avatar} alt={name} width="48" />  
   <FriendName>{name}</FriendName>       
        </List>
)



}

FriendListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}

