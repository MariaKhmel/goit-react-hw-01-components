import styled from 'styled-components';

export const Container = styled.div`
margin-bottom:20px;
/* height: 100vh; */
/* display: flex;
align-items: center;
justify-content: center; */

`

export const ProfileContainer = styled.div`
background-color: white;
border-radius : 10px;
overflow: hidden;
border: 1px solid darkgray;
display: flex;
flex-direction:column;

`

export const Avatar = styled.img`
display: block;

  height: 80px;
  border-radius:50%;
  margin: 20px auto;

`
export const Description = styled.div`
  text-align: center;
  color: grey;
`


export const Name = styled.p`
color: black;
font-size: 20px;
margin-bottom : 10px;
`
export const Tag = styled.p`
margin-bottom : 10px;
`

export const Location = styled.p`
margin-bottom : 20px;
`

export const Stats = styled.ul`
display: inline-flex;
background-color: lightgrey;

`
export const StatsItems = styled.li`
border: 1px solid darkgray;
padding: 15px;
text-align: center;
width: 100%;

`

export const StatsLable = styled.span`
display: block;
color: grey;

`

export const StatsValue = styled.span`
display: block;
color: black;

`