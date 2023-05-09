import { Box } from "@mui/system";
import { Button, Grid, Stack, TextField } from "@mui/material";
import * as React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function NewForm() {
  const [formdata, setformdata] = useState({
    studentno:null,
    name: null,
    address: null,
    dob: null,
    phonenumber: null

  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log(formdata);

    Axios.post("http://localhost:3001/api/addform", {
      data: formdata,
    }).then((response) => {});
  };
  return (
    <div> 
      <Stack direction="row" alignItems="center" spacing={5} paddingBottom={5}>
        <div className="full-form">
          <h1 className="Heading" style={{ marginLeft:40 }}> Add student details</h1>
          <div className="addform">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              Validate
              autoComplete="off"
            >
              <Stack direction="row" paddingBottom={5}>
                <TextField
                  className="text2"
                  margin="normal"
                  required
                  name="studentno"
                  label="Student No"
                  type="text"
                  id="product"
                  autoComplete="product"
                  onChange={(e) => handleInputChange(e)}
                />

                <TextField
                  className="text2"
                  margin="normal"
                  required
                  name="name"
                  label="Name "
                  id="quantity"
                  autoComplete
                  onChange={(e) => handleInputChange(e)}
                />
              </Stack>

              <Stack direction="row" paddingBottom={5}>
                <TextField
                  className="text2"
                  margin="normal"
                  required
                  name="address"
                  label="Address"
                  type="text"
                  id="product"
                  autoComplete="product"
                  onChange={(e) => handleInputChange(e)}
                />
                <TextField
                  className="text2"
                  margin="normal"
                  required
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  id="quantity"
                  autoComplete
                  onChange={(e) => handleInputChange(e)}
                />
              </Stack>

              <Stack direction="row" paddingBottom={5}>
                <TextField
                  className="text2"
                  margin="normal"
                  required
                  name="phonenumber"
                  label="Contact Number "
                  type="text"
                  id="product"
                  autoComplete="product"
                  onChange={(e) => handleInputChange(e)}
                />
              </Stack>
            </Box>

            <Stack direction="row" alignItems="center" spacing={10}>
              <Button
                className="buttons4"
                type="submit"
                size="lg"
                variant="contained"
                sx={{ mt: 3, mb: 2, marginLeft:20 }}
                onClick={onSubmit}
              >
                Add{" "}
              </Button>
            </Stack>
          </div>
        </div>
      </Stack>
    </div>
  );
}
