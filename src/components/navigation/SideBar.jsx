import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";

function SideBar({ open, setOpen }) {
  // const navigate = useNavigate();
  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div style={{ width: "auto", height: "60%" }}>
          <div>
            <div
              style={{
                padding: "10px 10px 10px 10px",
                height: "90px",
                width: "250px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Typography
                variant="h5"
                style={{
                  position: "absolute",
                  left: "30px",
                  cursor: "pointer",
                }}
                fontWeight={600}
                // onClick={() => navigate("/")}
              >
                Build with Harvoxx
              </Typography>
            </div>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
              }}
              style={{ color: "#898989" }}
            >
              <ListItemText
                style={{ textAlign: "center" }}
                primary={"Benefits"}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
              }}
              style={{ color: "#898989" }}
            >
              <ListItemText
                style={{ textAlign: "center" }}
                primary={"How it Works"}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
              }}
              style={{ color: "#898989" }}
            >
              <ListItemText style={{ textAlign: "center" }} primary={"Plans"} />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
              }}
              style={{ color: "#898989" }}
            >
              <ListItemText
                style={{ textAlign: "center" }}
                primary={"Partners"}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setOpen(false);
              }}
              style={{ color: "#9D4AD3" }}
            >
              <ListItemText
                style={{ textAlign: "center" }}
                primary={"Get Started"}
              />
            </ListItem>
            <ListItem
              button
              // onClick={() => {
              //   setOpen(false);
              // }}
              style={{ borderBottom: "1px solid #71A84F" }}
            >
              <ListItemText
                style={{ textAlign: "center", color: "#898989" }}
                primary={"Organization Type"}
              />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SideBar;
