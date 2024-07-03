import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../TableComp/Table.css"


function createData(name, Alis, Satis, Degisim, Saat) {
    return { name, Alis, Satis, Degisim, Saat };
}


const rows = [
    createData('Amerika', 32,32,9,	0,12, 6.0, 24, 4.0),
    createData('Euro', 237, 9.0, 37, 4.3),
    createData('İngiliz Sterlini', 262, 16.0, 24, 6.0),
    createData('İsviçre Frangı', 305, 3.7, 67, 4.3),
    createData('Kanada Doları', 356, 16.0, 49, 3.9),
];


export default function BasicTable() {
    return (
        <TableContainer component={Paper} sx={{marginTop : "60px" , width : "98%"  , marginLeft : "10px" , background : "#384260 "}}  >
            <Table sx={{ minWidth: 650  }} >
                <TableHead >
                    <TableRow className={"table"} >
                        <TableCell sx={{color : "#EFB90A"}} >Döviz</TableCell>
                        <TableCell align="right" sx={{color : "white" ,}} >Satış</TableCell>
                        <TableCell align="right" sx={{color : "white"}}>Alış&nbsp;</TableCell>
                        <TableCell align="right" sx={{color : "white"}}>Değişim&nbsp;</TableCell>
                        <TableCell align="right" sx={{color : "white"}}>Saat&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{padding : "10px"}}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.Satis}</TableCell>
                            <TableCell align="right">{row.Alis}</TableCell>
                            <TableCell align="right" >{row.Degisim}</TableCell>
                            <TableCell align="right">{row.Saat}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
