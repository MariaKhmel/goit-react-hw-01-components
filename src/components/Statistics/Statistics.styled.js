import styled from 'styled-components';

export const StatsSection = styled.section`
background-color: #fff;
display: flex;
margin: 0;

`

export const StatsTitle = styled.h2`
background-color: #fff;
color: darkgrey;
text-align: center;
padding :15px;

text-transform: uppercase;

`


export const Container = styled.div`
display: inline-flex;
flex-direction: column;
`


export const StatisticsItem = styled.li`
/* border: 1px solid black; */
display: flex;
flex-direction: column;
text-align: center;
padding: 10px;
background-color: ${() => `rgb(${Math.floor(Math.random() * 256)}, ${50 + Math.floor(Math.random() * 256)}, ${50 + Math.floor(Math.random() * 256)})`}
`
export const StatisticsLabel = styled.span`
`
export const StatisticsPercentage = styled.span`

`