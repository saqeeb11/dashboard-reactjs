import React, { useState, useEffect } from "react";
import Appdrawer from "./Appdrawer";
import {
  Box,
  Toolbar,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Dashboard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:88/orders/details", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.data.err) {
        console.log(response.data.err);
      } else {
        setdata(response.data.result);
      }
    });
    console.log(data);
  }, []);

  return (
    <>
      <Appdrawer title="Dashboard" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            sx={{
              width: "275px",
              boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Total Customer
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.length}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "275px",
              boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Total Orders
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.length}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "275px",
              boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Total Quantity
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data
                  .map((item) => item.quantity)
                  .reduce((prev, curr) => prev + curr, 0)}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.1)",
            margin: "15px 0px",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Total Product
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data.length}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            boxShadow: "0px 5px 6px rgba(0, 0, 0, 0.1)",
            margin: "15px 0px",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Total Amount
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {data
                .map((item) => item.total_price)
                .reduce((prev, curr) => prev + curr, 0)}
            </Typography>
          </CardContent>
        </Card>
        <Link to="/dashbord/details" style={{ textDecoration: "none" }}>
          <Button variant="contained">Details</Button>
        </Link>
      </Box>
    </>
  );
}
