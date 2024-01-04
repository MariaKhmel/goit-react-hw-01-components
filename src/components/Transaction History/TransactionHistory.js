import { CellData, TransactionTable, TableHead, TableBody, CellHeader, TableRow } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
   
    return (
        <TransactionTable>
            <TableHead>
                <TableRow>
                    <CellHeader>Type</CellHeader>
                    <CellHeader>Amount</CellHeader>
                    <CellHeader>Currency</CellHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map(({ id, type, amount, currency }) => (
             <TableRow  key={id}>
                        <CellData >{type}</CellData>   
                        <CellData >{amount}</CellData>   
                        <CellData >{currency}</CellData>   
        </TableRow>
        ))}   
            
            </TableBody>
        </TransactionTable>
    )
 
}