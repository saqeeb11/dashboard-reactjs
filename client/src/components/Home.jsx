import React, { useState } from "react";
import Appdrawer from "./Appdrawer";
import { Box, Toolbar, TextField, Button } from "@mui/material";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton, Collapse } from "@mui/material";
import Axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Home() {
  const [customer, setcustomer] = useState("");
  const [product, setproduct] = useState("");
  const [quantity, setquantity] = useState("");
  const [price, setprice] = useState("");
  const [open, setOpen] = useState(false);
  const [alertStatus, setalertStatus] = useState("success");
  const [alertmsg, setalertmsg] = useState("");
  const [rows, setrows] = useState([]);

  const handleClick = () => {
    setrows([
      ...rows,
      { customer, product, quantity, price, totalPrice: quantity * price },
    ]);
    setcustomer("");
    setproduct("");
    setquantity("");
    setprice("");
  };

  const handleSubmit = () => {
    if (rows.length === 0) {
      setalertStatus("error");
      setalertmsg("please fill the details");
      setOpen(true);
    } else {
      Axios.post(
        "http://localhost:88/orders/entry",
        { rows },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      ).then((Response) => {
        if (!Response.data.err) {
          setalertStatus("success");
        } else {
          setalertStatus("error");
        }
        setalertmsg(Response.data.message);
        setOpen(true);
      });
      setrows([]);
    }
  };

  return (
    <>
      <Appdrawer title="Home" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Collapse in={open}>
          <Alert
            severity={alertStatus}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {alertmsg}
          </Alert>
        </Collapse>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: "50px 0px",
          }}
        >
          <TextField
            label="Customer name"
            id="outlined-size-small"
            size="small"
            value={customer}
            onChange={(e) => {
              setcustomer(e.target.value);
            }}
          />
          <TextField
            label="Product name"
            id="outlined-size-small"
            size="small"
            value={product}
            onChange={(e) => {
              setproduct(e.target.value);
            }}
          />
          <TextField
            label="Quantity"
            id="outlined-size-small"
            size="small"
            type="number"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          />
          <TextField
            label="Price"
            id="outlined-size-small"
            size="small"
            type="number"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
          <Button variant="contained" onClick={handleClick}>
            Add
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Customer name</StyledTableCell>
                <StyledTableCell align="right">Product name</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Total price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.customer}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.product}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.price * row.quantity}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ margin: "30px 0px", float: "right" }}
        >
          submit
        </Button>
      </Box>
    </>
  );
}
