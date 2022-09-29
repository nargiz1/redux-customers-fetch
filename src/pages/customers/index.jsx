import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCustomers,
  getCustomersPending,
} from "../../redux/customers/customer.reducer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { deleteCustomers} from '../../redux/customers/api';

function Index() {
  const dispatch = useDispatch()
  const customers = useSelector(getCustomers);
  const isCustomersLoading = useSelector(getCustomersPending);

  const deleteCustomer = (customer) => {
    deleteCustomers(customer)(dispatch)
  }

  return (
    <>
      {/* {isCustomersLoading && <h2>Loading...</h2>} */}
      {customers && (
        <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    ID
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Company Name
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Country
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers?.map((customer) => (
                  <TableRow
                    key={customer.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {customer.id}
                    </TableCell>
                    <TableCell>{customer.companyName}</TableCell>
                    <TableCell>{customer.address?.country}</TableCell>
                    <TableCell><Button color="error" onClick={()=> deleteCustomer(customer)}>Delete</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default Index;
