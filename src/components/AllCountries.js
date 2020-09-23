import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tittle:{
    color: '#3f51b5',
    transform: 'uppercase',
  },
}));

export default function AllCountries() {


  const [globalData, setGlobalData] = useState([{}]);

  useEffect(() => {
    ;
    async function getData() {
      const responce = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      let data = await responce.json();
      setGlobalData(Object.values(data.countryitems[0]));
      delete data.countryitems[0].ourid;
      console.log(data.countryitems[0]["1"]);
    }
    getData();
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Coutry Data</h3>
      <Grid container spacing={3}>
        <table>
        {Object.keys(globalData[0]).map((val, index) => {
          return (
            <tr>
              <td></td>
              <td>
                <h3 className={classes.tittle}>
                  {val.toUpperCase().replace(/_/g,' ' )}</h3>
              </td>
              <td>
                
              </td>
            </tr>
          )
          })
        }
        </table>
        
        {/* {Object.keys(globalData[0]).map((val, index) => {
          return (
            <Grid item xs={12} sm={3} key={index}>
              <Paper className={classes.paper} elevation={3}>
                <h3 className={classes.tittle}>
                  {val.toUpperCase().replace(/_/g,' ' )}
                  {/* {val.replace(/_/g,' ' )} */}
                {/* </h3>
                <h3>{globalData[0][val]}</h3>
              </Paper>
            </Grid>
          )
        })} */} 
      </Grid>
    </div>
  );
}
