import React from 'react';
import PropTypes from 'prop-types';


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

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}