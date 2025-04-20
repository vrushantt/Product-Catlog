import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Grid2, Paper, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = ({
  cartitem,
  handleremoveitem,
  counter,
  setcounter,
  inventory,
  countobj,
  cartobj,
}) => {
  const [cartshow, setcartshow] = React.useState([]);
  // useEffect(()=>{
  //  let cart = localStorage.getItem("cartitem")
  //  let cartdata = JSON.parse(cart);
  //  setcartshow(cartdata)
  // },[])
  const [refresh, setrefresh] = React.useState(false);

  const handleinc = (id) => {
    let updateinventory = inventory.findIndex((val) => val.id === id);
    let obj = cartitem.find((val) => val.id === id);
    if (inventory[updateinventory].quantity == 2) {
      alert("only few items left");
    }
    //  console.log(inventory[updateinventory].quantity * 0.2)
    if (inventory[updateinventory].quantity > 0) {
      obj.count = obj.count + 1;
      setrefresh(!refresh);
      inventory[updateinventory].quantity =
        inventory[updateinventory].quantity - 1;
      console.log("inventory from cart", inventory);
      console.log(obj.count);
    } else {
      alert("Out of stock");
    }
  };

  const handledec = (id) => {
    let obj = cartitem.find((val) => val.id === id);
    if (obj.count < 2) {
      handleremoveitem(id);
    } else {
      obj.count = obj.count - 1;
      let updateinventory = inventory.findIndex((val) => val.id === id);
      //  console.log(updateinventory)
      inventory[updateinventory].quantity =
        inventory[updateinventory].quantity + 1;
      console.log("inventory from cart", inventory);
    }
  };


  let totalitem = 0;
  let totalcost = 0;
for(let i=0;i<=cartitem.length-1;i++){
  console.log("the cost",cartitem[i].cost)
  totalcost += parseInt(cartitem[i].cost * cartitem[i].count)
  totalitem += parseInt(cartitem[i].count)

}
  return (
    <>
      <Grid2 container >
        <Grid2 item size={12}>
          <TableContainer
            component={Paper}
            sx={{
              maxHeight: "80vh",
              overflowY: "auto",
              // paddingBottom:'5em'
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{
                  backgroundColor: "#F74055",
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                }}
              >
                <TableRow>
                  <TableCell sx={{ color: "white" }}>Id</TableCell>
                  <TableCell sx={{ color: "white" }}>Image</TableCell>

                  <TableCell sx={{ color: "white" }}>Product Name</TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Description
                  </TableCell>

                  <TableCell align="center" sx={{ color: "white" }}>
                    Cost
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="center" sx={{ color: "white" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartitem.map((val, index) => (
                  <TableRow
                    key=""
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}.
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <img src={val.img} width="60"></img>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {val.name}
                    </TableCell>
                    <TableCell align="center">{val.description}</TableCell>
                    <TableCell align="center">{val.cost}</TableCell>

                    <TableCell align="center">
                      <Grid2
                        container
                        sx={{
                          maxWidth: "10em",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid2 item size={12}>
                          <IconButton
                            onClick={() => {
                              // handleremoveitem(val.id)
                              handledec(val.id);
                              console.log(val.id);
                              setrefresh(!refresh);
                            }}
                            aria-label="delete"
                            size="small"
                          >
                            <RemoveIcon
                              sx={{
                                fontSize: "1em",
                                backgroundColor: "#F74055",
                                color: "white",
                                borderRadius: "2px",
                              }}
                            />
                          </IconButton>
                          {val.count}

                          <IconButton
                            onClick={() => {
                              handleinc(val.id);
                            }}
                            aria-label="delete"
                            size="small"
                          >
                            <AddIcon
                              sx={{
                                fontSize: "1em",
                                backgroundColor: "#F74055",
                                color: "white",
                                borderRadius: "2px",
                              }}
                            /> 
                          </IconButton>
                        </Grid2>
                      </Grid2>
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        sx={{ fontSize: "0.9em", backgroundColor: "#F74055" }}
                        variant="contained"
                      >
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
        <br></br>
        <Grid2 container size={12} sx={{ justifyContent: "space-between" }}>
          <Grid2 item>
            <Typography>
              Total No of Items:
              <span
                style={{
                  backgroundColor: "#F74055",
                  color: "white",
                  fontSize: "1.2em",
                  borderRadius: "5px",
                }}
              >
               {totalitem}
              </span>
            </Typography>{" "}
          </Grid2>
          <Grid2 item>
            <Typography>
              Total Cost:
              <span
                style={{
                  backgroundColor: "#F74055",
                  color: "white",
                  fontSize: "1.2em",
                  borderRadius: "5px",
                }}
              >
                ₹{totalcost}
              </span>
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default React.memo(Cart);
