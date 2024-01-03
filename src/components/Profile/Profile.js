// import user from '../../../src/user.json'

// console.log(user);

import { StatsLable, StatsValue, StatsItems, Stats, ProfileContainer, Avatar, Description, Container, Name, Tag, Location } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }}) => {
    return (
        <Container> 
       <ProfileContainer> 
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    class="avatar"
                    />
                <Description>
                    <Name>{username}</Name>
                    <Tag> @{ tag }</Tag>
                    <Location>{location}</Location>
            </Description>
    
                <Stats>
                    <StatsItems>
                        <StatsLable>Followers</StatsLable>
                        <StatsValue>{followers}</StatsValue>
                    </StatsItems>
                    <StatsItems>
                        <StatsLable>Views</StatsLable>
                        <StatsValue>{views}</StatsValue>
                    </StatsItems>
                    <StatsItems>
                        <StatsLable>Likes</StatsLable>
                        <StatsValue>{likes}</StatsValue>
                    </StatsItems>
                </Stats>
            </ProfileContainer>
        </Container>
    )
}