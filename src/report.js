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



import Axios from "axios";


import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import CashierHeader from "../components/cashierheader";


export default function Report(props) {
  let navigate = useNavigate();
  const [reportdata, setreportdata] = useState([]);

  
 
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/report").then(
      (response) => {
        console.log(response.data);

        setreportdata(...freelancerdata, response.data);
        
      }
    );
  }, []);

  console.log(freelancerdata);
  console.log(JSON.parse(localStorage.getItem('type')))

  function onClick3() {
    navigate("/events/new", { replace: true });
  }

  function onClick4() {
    navigate("/availablefreelancers", { replace: true });
  }

  function onClick1() {
    navigate("/freelancers/new", { replace: true });
  }
  function onClick2(row) {
    localStorage.setItem('data', JSON.stringify(row));

    navigate("/freelancers/update", { replace: true });
  }

  function onClick3() {
    navigate("/freelancerpayment", { replace: true });
  }

  function onClick4(data) {
    localStorage.setItem('data',JSON.stringify(data))
    navigate("/freelancerpayment/new", { replace: true });
  }

  function deletefreelancer(freelancerid) {
    Axios.post("http://localhost:3001/api/deletefreelancer", {
 
      freelancerid:freelancerid
    }).then((response) => {
      console.log("Nishaa Gopi");
      // alert(response.data.message);
      window.location.reload(false);
    });
  }

  return (
    <div>
      <Typeselect type={type}/>
      <br></br>
      <Stack direction="row" alignItems="center" spacing={5} paddingBottom={5}>
      <Typeselect2 type={type}/>        <Grid container justify="space-around" paddingBottom={5} paddingTop={5}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            paddingLeft={15}
            paddingBottom={5}
          >
            <Button
              className="buttons2"
              type="submit"
              size="lg"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClick1}
            >
              Add new freelancer
            </Button>

            <h1>Freelancers</h1>
           
            <Button
              className="buttons2"
              type="submit"
              size="lg"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onClick3}
            >
              View All Freelancer Pay
            </Button>
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
                    <b>Freelancer ID</b>
                  </TableCell>
                  <TableCell>
                    <b>Freelancer Name</b>
                  </TableCell>
                  <TableCell>
                    <b>Phone no.</b>
                  </TableCell>
                  <TableCell>
                    <b>NIC</b>
                  </TableCell>
                  <TableCell>
                    <b>Position</b>
                  </TableCell>
                  <TableCell>
                    <b>Address</b>
                  </TableCell>
                  <TableCell>
                    <b>Daily Payment</b>
                  </TableCell>
                  <TableCell>
                    <b>Gender</b>
                  </TableCell>
                  <TableCell>
                    <b></b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {freelancerdata.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.freelancerid}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.nic}</TableCell>
                    <TableCell>{row.position}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.dailypay}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>
                      {" "}
                      <Stack direction="row" spacing={1}>
                        <IconButton aria-label="edit" onClick={()=>onClick2(row)}>
                          <EditIcon />
                          
                        </IconButton>
                        <IconButton aria-label="delete" color="error" onClick={()=>deletefreelancer(row.freelancerid)}>
                          <DeleteIcon />
                        </IconButton>
                        <Button
                          type="submit"
                          size="sm"
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          onClick={()=>onClick4(row)}
                        >
                          Add freelancer pay
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Stack>

      <Footer />
    </div>
  );
}
