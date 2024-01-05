import PropTypes from 'prop-types';
import { List, FriendStatus, FriendImg, FriendName } from './FriendsList.styled'

export const FriendListItem = ({ avatar, name, isonline }) => { 
    
    return (
     <List>
            <FriendStatus isOnline={isonline}/>     
    <FriendImg src={avatar} alt={name} width="48" />  
   <FriendName>{name}</FriendName>       
        </List>
)



}

FriendListItem.prototypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // isonline:PropTypes.bool.isRequired,
}

