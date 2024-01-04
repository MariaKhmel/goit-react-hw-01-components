import styled from "styled-components";

const TransactionTable = styled.table`


`
const TableHead = styled.thead`
background-color: #00ffff;
/* border-radius: 5%; */
box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.5);
:not(:last-child){
border-right: 1px solid white;

}
`

const TableBody = styled.tbody`
:first-child{
    text-transform: capitalize;
}
background-color: white;
box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.5);
border: 1px solid gray;
`


const CellHeader = styled.th`
width:170px;
padding: 15px;

text-transform: uppercase;
color: white;
`

const TableRow = styled.tr`
&:nth-child(even){
 background-color: lightgray;   
}

`
const CellData = styled.td`
color: grey;
text-align: center;
border: 1px solid lightgray;


`



export { CellData, TransactionTable, TableHead, TableBody, CellHeader, TableRow  }