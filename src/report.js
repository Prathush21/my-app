import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Stack, TextField } from "@mui/material";




import Axios from "axios";


import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import CashierHeader from "../components/cashierheader";


export default function Report(props) {
  let navigate = useNavigate();
  const [reportdata, setreportdata] = useState([]);

  
 
  

  useEffect(() => {
    Axios.get("http://localhost:3001/api/report").then(
      (response) => {
        console.log(response.data);

        setreportdata(...reportdata, response.data);
        
      }
    );
  }, []);



  return (
    <div>
    
      <Stack direction="row" alignItems="center" spacing={5} paddingBottom={5}>
             <Grid container justify="space-around" paddingBottom={5} paddingTop={5}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            paddingLeft={15}
            paddingBottom={5}
          >
            

            <h1>Report</h1>
           
          
          </Stack>

          <TableContainer component={Paper}>
            <Table
              responsive="true"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Stu_no</b>
                  </TableCell>
                  <TableCell>
                    <b>Student_name</b>
                  </TableCell>
                  <TableCell>
                    <b>Course code</b>
                  </TableCell>
                  <TableCell>
                    <b>Title</b>
                  </TableCell>
                  
                  <TableCell>
                    <b>Marks</b>
                  </TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {reportdata.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Stu_No}
                    </TableCell>
                    <TableCell>{row.Stu_name}</TableCell>
                    <TableCell>{row.Course_code}</TableCell>
                    <TableCell>{row.Title}</TableCell>
                    <TableCell>{row.Markls}</TableCell>
                   
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Stack>

    </div>
  );
}
