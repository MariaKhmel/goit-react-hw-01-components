import styled from 'styled-components';

const FriendsList = styled.ul`
display: flex;
gap:7px;
flex-direction:column;
margin-top:20px;
`
const List = styled.li`
display: flex;
align-items: center;

padding :5px;

background-color: #fff;
border: 1px solid grey;
border-radius: 5%;
box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.5);

`
const FriendStatus = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
margin-right :5px;
background-color: ${({ isonline }) => isonline ? '#00b300': '#ff0000'};
`
const FriendImg = styled.img`
border:1px solid gray;
border-radius :5px;
margin-right:5px;

`
const FriendName = styled.p`

`


export { List, FriendsList, FriendStatus, FriendImg, FriendName }