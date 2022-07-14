import { Menu } from "@mui/icons-material";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Button from "../Buttons/Button";
import SideBar from "./SideBar";

function Header() {
  const [open, setOpen] = useState(false);
  const tablet = useMediaQuery("(max-width:800px)");

  return (
    <div
      style={{
        width: "100%",
        height: "55px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid
            item
            md={5}
            sm={7}
            xs={8}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={require("../../images/logo.png")} alt="logo" />
            <div
              style={{
                marginLeft: "7%",
                padding: "0 10px",
                borderBottom: "3px solid #71A84F",
                height: "50px",
                display: tablet ? "none" : "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color={"#898989"}>Organization Types</Typography>
            </div>
          </Grid>
          <Grid
            item
            md={7}
            sm={5}
            xs={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                listStyle: "none",
                width: tablet ? "auto" : "100%",
              }}
            >
              <li style={{ display: tablet ? "none" : "block" }}>
                <Typography color={"#898989"}>Benefits</Typography>
              </li>
              <li style={{ display: tablet ? "none" : "block" }}>
                <Typography color={"#898989"}>How it Works</Typography>
              </li>

              <li style={{ display: tablet ? "none" : "block" }}>
                <Typography color={"#898989"}>Plans</Typography>
              </li>
              <li style={{ display: tablet ? "none" : "block" }}>
                <Button
                  style={{
                    padding: "7px 15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    border: "1px solid #898989",
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="body2" color={"#898989"}>
                    Partner Login
                  </Typography>
                </Button>
              </li>
              <li style={{ display: tablet ? "none" : "block" }}>
                <Button
                  style={{
                    padding: "7px 15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#9D4AD3",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="body2" color="#fff">
                    Get Started
                  </Typography>
                </Button>
              </li>
              <IconButton
                style={{
                  display: tablet ? "block" : "none",
                }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Menu color="black" />
              </IconButton>
            </ul>
            <SideBar open={open} setOpen={setOpen} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
