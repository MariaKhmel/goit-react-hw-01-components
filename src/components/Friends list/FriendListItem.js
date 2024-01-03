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