import React from "react";
import { Typography } from "@mui/material";
import Button from "../Buttons/Button";

function ProgramCard({ image, title, description }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt=""
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
      <div
        style={{ width: "95%", padding: "15px 2.5%", backgroundColor: "#fff" }}
      >
        <Typography
          variant="h6"
          color="#444444"
          marginBottom={1}
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography variant="body1" color="#444444" textAlign="center">
          {description}
        </Typography>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Button
            style={{
              padding: "7px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "1px solid #898989",
              borderRadius: "5px",
            }}
          >
            <Typography variant="body2" color={"#898989"}>
              View Plans
            </Typography>
          </Button>
          <Button
            style={{
              padding: "7px 30px",
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
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
