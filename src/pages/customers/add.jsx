import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addCustomer } from "../../redux/customers/api";
import { useNavigate } from "react-router-dom";

function Add() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitCustomer = (data) => {
    console.log(data)
    addCustomer(data)(dispatch);
    navigate(-1)
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <form onSubmit={handleSubmit(submitCustomer)}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  label="Company Name"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  name="companyName"
                  {...register("companyName")}
                />
                <TextField
                  id="standard-basic"
                  label="Contact Name"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  name="contactName"
                  {...register("contactName")}
                />
                <TextField
                  id="standard-basic"
                  label="Contact Title"
                  variant="standard"
                  sx={{ width: "100%", marginBottom: "10px" }}
                  name="contactTitle"
                  {...register("contactTitle")}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default Add;
