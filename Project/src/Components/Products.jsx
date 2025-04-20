import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container, Grid2, Paper, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { useRef } from "react";
import { useEffect } from "react";
import Cart from "./Cart";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const inventory = [
  { id: 1, quantity: 15 },
  { id: 2, quantity: 6 },
  { id: 3, quantity: 11 },
  { id: 4, quantity: 8 },
  { id: 5, quantity: 10 },
  { id: 6, quantity: 7 },
  { id: 7, quantity: 9 },
  { id: 8, quantity: 18 },
];

const Products = ({ cart, handlecart }) => {
  const [allproduct, setallproducts] = React.useState([]);

  const [open1, setOpen1] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  const [findid, setfindid] = React.useState(0);
  const [counter, setcounter] = React.useState(0);

  const [cartitem, setcartitem] = React.useState([]);
  const [cartobj, setcartobj] = React.useState([]);
  const products = [
    {
      id: 1,
      name: "realme 13 Pro 5G (Monet Gold,8GB+128GB)",
      description: "Its a realme Mobile",
      color: "Monet Gold,Monet Purple,Emerald Green",
      cost: "20490",
      img: "https://m.media-amazon.com/images/I/41OJfxIUcjL._SR480,440_.jpg",
      count: 0,
    },
    {
      id: 2,
      name: "Motorola Edge 50 Fusion 5G (Forest #F74055, 12GB RAM, 256GB Storage)",
      description: "Its a Motorola Mobile",
      color: "Black,Red,#F74055",
      img: "https://m.media-amazon.com/images/I/71ZJ6bsARtL._SX522_.jpg",
      cost: "25000",
      count: 0,
    },
    {
      id: 3,
      name: "Nothing Phone (3a) 5G (Black, 8GB RAM, 256GB Storage)",
      description: "Its a Nothing Mobile",
      color: "Black,White",
      img: "https://m.media-amazon.com/images/I/51izGKpbXOL._SY741_.jpg",
      cost: "25545",
      count: 0,
    },
    {
      id: 4,
      name: "Vivo T3x 5G (Celestial Green, 128 GB) (6 GB RAM)",
      description: "Its a Vivo Mobile",
      color: "green,#F74055,black",
      img: "https://m.media-amazon.com/images/I/81eJJYFsztL._SX522_.jpg",
      cost: "18999",
      count: 0,
    },
    {
      id: 5,
      name: "Oppo K12x 5G with 45W SUPERVOOC Charger in-The-Box (Breeze #F74055, 128 GB) (6 GB RAM)",
      description: "Its a Oppo Mobile",
      color: "Silver,White",
      cost: "12499",
      img: "https://m.media-amazon.com/images/I/51oDDYRMifL._SY679_.jpg",
      count: 0,
    },
    {
      id: 6,
      name: "Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Silver#F74055, 12GB RAM, 1TB Storage), 200MP",
      description: "Its a Samsung Mobile",
      color: "#F74055,black,grey,silver",
      img: "https://m.media-amazon.com/images/I/71P85R392uL._SX679_.jpg",
      cost: "165999",
      count: 0,
    },
    {
      id: 7,
      name: "OnePlus Nord CE4 Lite 5G (Super Silver, 8GB RAM, 128GB Storage) perating System	OxygenOSRAM Memory Installed",
      description: "Its a Oneplus Mobile",
      color: "#F74055,black,grey,silver",
      img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._SX679_.jpg",
      cost: "17998",
      count: 0,
    },
    {
      id: 8,
      name: "iQOO Z9s Pro 5G (Luxe Marble, 8Gb Ram, 128Gb Storage) | Snapdragon 7 Gen 3 Processor |",
      description: "Its a iQOO Mobile",
      color: "#F74055,black,grey,silver",
      img: "https://m.media-amazon.com/images/I/61SnaL4+EFL._SX679_.jpg",
      cost: "22999",
      count: 0,
    },
  ];

  const [table, settable] = React.useState(false);
  const handletable = () => {
    settable(!table);
  };
  // console.log(products);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opene = Boolean(anchorEl);
  const handleClicke = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosee = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [openn, setOpenn] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenn(newOpen);
  };

  let btn = useRef();
  const [color, setcolor] = React.useState("grey");
  const handlecolor = () => {
    if (color === "grey") {
      setcolor("red");
    } else {
      setcolor("grey");
    }
  };

  //code to find the count of selected item
  // useEffect(() => {
  //   const countobj = inventory.find((val) => val.id === findid);
  //   if (countobj) {
  //     setcartobj((prevCartobj) => [...prevCartobj, countobj]);
  //   }
  // }, [findid]);
  // console.log(cartobj);

  const handleaddtocart = (id) => {
    console.log(id);
    if (cartitem.find((val) => val.id === id)) {
      // let same = cartitem.
      // // same.count = same.count + 1;
      // const updatecount = cartitem.findIndex((val) => val.id === id);
      // const updateinventory = inventory.findIndex((val) => val.id === id);
      // console.log("index",updateinventory)
      // if (updatecount !== -1) {
      //   cartitem[updatecount].count = cartitem[updatecount].count + 1;
      //   console.log("before")
      //   console.log(inventory[updateinventory])
      //   console.log("after")

      // } else {
      //   console.log("not found");
      // }
      alert("Already in cart ,kindly add from cart");
    } else {
      let item = products.find((val, index) => val.id === id);
      const updateinventory = inventory.findIndex((val) => val.id === id);
      item.count = item.count + 1;
      inventory[updateinventory].quantity =
        inventory[updateinventory].quantity - 1;

      setcartitem([...cartitem, item]);
      console.log("all products", allproduct);
    }
    console.log("this is inventory", inventory);
  };

  // let cartdata = cartitem.map((item) => item);
  // console.log("cartdata",cartdata)
  // if (cartdata.id === id) {
  //   item.count = item.count + 1;
  // } else {
  //   item.count = item.count + 1;

  //   setcartitem([...cartitem, item]);
  // }

  console.log("cartitem", cartitem);
  console.log(findid);

  const senddata = () => {
    localStorage.setItem("cartitem", JSON.stringify(cartitem));
  };

  const handleremoveitem = (id) => {
    let ans = cartitem.filter((val, index) => val.id !== id);
    setcartitem(ans);
  };
  // console.log(cartitem)

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          // backgroundColor: "red",
          width: "100vw",
          height: "100vh",
          display: "flex",
          overflow: "hidden",
          position: "fixed",
          flexDirection: "column",
          gap: "2px",
          // justifyContent:'center',
          // alignItems:'center',
        }}
      >
        <br></br>
        {cart ? (
          <Cart
            cartitem={cartitem}
            setcartitem={setcartitem}
            handleremoveitem={handleremoveitem}
            counter={counter}
            setcounter={setcounter}
            inventory={inventory}
            cartobj={cartobj}
          />
        ) : (
          <>
            <Grid2
              container
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid2 item size={12}>
                <Button
                  sx={{ fontSize: "0.9em", backgroundColor: "#F74055" }}
                  variant="contained"
                  onClick={handletable}
                >
                  {table ? "Card Format" : "Table Format"}
                </Button>
              </Grid2>
            </Grid2>
            <br></br>

            {table ? (
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "auto",
                  overflowY: "auto",
                  paddingBottom: "5em",
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

                      <TableCell sx={{ color: "white" }}>
                        Product Name
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Description
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Color
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Cost
                      </TableCell>

                      <TableCell align="center" sx={{ color: "white" }}>
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((val, index) => (
                      <TableRow
                        key={val}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {val.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {val.name}
                        </TableCell>
                        <TableCell align="center">{val.description}</TableCell>
                        <TableCell align="center">{val.color}</TableCell>
                        <TableCell align="center">{val.cost}</TableCell>

                        <TableCell align="center">
                          <Button
                            onClick={() => {
                              setfindid(val.id);
                              handleaddtocart(val.id);
                            }}
                            sx={{
                              fontSize: "0.9em",
                              backgroundColor: "#F74055",
                            }}
                            variant="contained"
                          >
                            Add to Cart
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Grid2
                container
                spacing={1.5}
                columnSpacing={0}
                sx={{
                  overflow: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1em 0 5em 0",
                }}
              >
                {products.map((val) => (
                  <Grid2
                    item
                    size={{ lg: 3 }}
                    container
                    sx={{ justifyContent: "center" }}
                  >
                    <Card
                      sx={{
                        width: 300,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            M
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            {/* <MoreVertIcon /> */}
                          </IconButton>
                        }
                        title="Mobile Phone"
                        // subheader="September 14, 2016"
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={val.img}
                        alt="Paella dish"
                        sx={{ objectFit: "contain", width: "100%" }}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          sx={{ color: "steel#F74055" }}
                        >
                          {val.name}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Grid2
                          container
                          size={12}
                          sx={{ alignItems: "center" }}
                        >
                          <Grid2 item size={4.2}>
                            {" "}
                            <IconButton
                              aria-label="add to favorites"
                              ref={btn}
                              onClick={() => {
                                handlecolor();
                              }}
                              sx={{ color: { color } }}
                            >
                              <FavoriteIcon />
                            </IconButton>
                          </Grid2>

                          <Grid2 item size={6}>
                            <Button
                              onClick={() => {
                                handleClick1();
                                handleaddtocart(val.id);
                                // senddata();
                                setfindid(val.id);
                              }}
                              sx={{
                                // marginLeft: "1em",
                                backgroundColor: "#F74055",
                                color: "white",
                              }}
                            >
                              Add to cart
                            </Button>
                          </Grid2>
                        </Grid2>

                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography sx={{ marginBottom: 2 }}>
                            Description:
                          </Typography>
                          <Typography sx={{ marginBottom: 2 }}>
                            {val.description}
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            )}
          </>
        )}

        <Snackbar open={open1} autoHideDuration={1000} onClose={handleClose1}>
          <Alert
            onClose={handleClose1}
            // severity="success"
            variant="filled"
            sx={{ width: "100%", backgroundColor: "#F74055" }}
          >
            Product Added Succefully
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default React.memo(Products);
