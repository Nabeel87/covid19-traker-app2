import React, {useState, useEffect} from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);



const useStyles = makeStyles({
  table: {
      width: "1200px",
      margin: "0 auto",
      scrollBehavior: "auto",
      height: "auto"
  },
});




export default function Graph() {

    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
      ;
      async function getData() {
        const responce = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
        let data = await responce.json();
        setGlobalData(Object.values(data.countryitems[0]));
        // console.log(data.countryitems[0]["1"].title);
      }
      getData();
    }, [])
  

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        {/* <Table>
            <tr>
                <td>Country Name</td>
                <td>Tottal Casses</td>
                <td>Tottal Recovered</td>                    
                <td>Tottal Death</td>
                <td>Tottal Active Casses</td>
            </tr>
        </Table> */}
      {/* <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country Name</StyledTableCell>
            <StyledTableCell align="right">Tottal Casses</StyledTableCell>
            <StyledTableCell align="right">Tottal Recovered</StyledTableCell>
            <StyledTableCell align="right">Tottal Death</StyledTableCell>
            <StyledTableCell align="right">Tottal Active Casses</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {Object.keys(globalData[0]).map((val, index) => {
               return(
                   <StyledTableRow key={val.name}>
                       <StyledTableCell component="th" Scope="val">
                           {globalData[index].title}
                           {console.log(globalData[index].title)}
                       </StyledTableCell>
                       <StyledTableCell align="right">{globalData[index].total_cases}</StyledTableCell>
                       <StyledTableCell align="right">{globalData[index].total_recovered}</StyledTableCell>
                       <StyledTableCell align="right">{globalData[index].total_deaths}</StyledTableCell>
                       <StyledTableCell align="right">{globalData[index].total_active_cases}</StyledTableCell>
                   </StyledTableRow>
               ) 
            })}
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        {/* </TableBody> */}
      
    </TableContainer>
    
  );
}
