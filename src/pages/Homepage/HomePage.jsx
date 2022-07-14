import { Container, Typography, useMediaQuery, Grid } from "@mui/material";
import React from "react";
import ProgramCard from "../../components/card/ProgramCard";

function HomePage() {
  const tablet = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "91.2vh",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${require("../../images/hero-bg.png")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ width: tablet ? "90%" : "45%" }}>
            <Typography
              variant="h3"
              textAlign={"center"}
              color={"#fff"}
              marginBottom={3}
            >
              Provide{" "}
              <Typography variant="h3" component="span" color={"#EAA12D"}>
                Lavender Lotis
              </Typography>{" "}
              to your organization
            </Typography>
            <Typography variant="h6" textAlign={"center"} color={"#fff"}>
              Meet the most comprehensive health care program for your
              organization.
            </Typography>
          </div>
        </Container>
      </div>
      <div
        style={{ width: "100%", padding: "15px 0", backgroundColor: "#f5f5f5" }}
      >
        <Container>
          <Typography variant="body1" marginBottom={1}>
            Covering over 10 million lives and trusted by organizations
            nationwide.
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img
              src={require("../../images/left.png")}
              alt="slide-1"
              style={{ marginRight: 30 }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexFlow: "row nowrap",
                flex: 1,
                justifyContent: "space-between",
                overflow: "auto",
              }}
              className={"scrollbar"}
            >
              <div style={{ marginRight: 30 }}>
                <img
                  src={require("../../images/partner-one.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 30 }}>
                <img
                  src={require("../../images/partner-two.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 20 }}>
                <img
                  src={require("../../images/partner-three.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 30 }}>
                <img
                  src={require("../../images/partner-four.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 30 }}>
                <img
                  src={require("../../images/partner-five.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 30 }}>
                <img
                  src={require("../../images/partner-six.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 30 }}>
                <img
                  src={require("../../images/partner-seven.png")}
                  alt="slide-1"
                />
              </div>
              <div style={{ marginRight: 30 }}>
                <img src={require("../../images/waldorf.png")} alt="slide-1" />
              </div>
            </div>
            <img
              src={require("../../images/right.png")}
              alt="slide-1"
              style={{ marginLeft: 30 }}
            />
          </div>
        </Container>
      </div>
      <div style={{ widht: "100%", padding: "30px 0" }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item sm={6} xs={12}>
              <img
                src={require("../../images/video-content.png")}
                alt=""
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Typography
                variant="subtitle"
                fontWeight={500}
                fontSize={18}
                marginBottom={1}
              >
                “Our partnership with Lavender Lotis has been wonderful, and
                there were there to support us at the begining of the pandamic
                when we wanted to provide a helpful resource to our team. In no
                time at all, we were up and running and our employees had acces
                to virtual intergrative healthcare at their fingertips. Our
                employees love the platform and find it easy to use, there is
                flexible scheduling availability (especially nights and
                weekends), and they can seek out exactly what they are looking
                for in a provider.”
              </Typography>
              <div
                style={{
                  widht: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <img src={require("../../images/waldorf.png")} alt="" />
              </div>
              <div
                style={{
                  widht: "100%",
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: "#95BE7B",
                      marginRight: 8,
                    }}
                  />
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: "#C8C8C8",
                      marginRight: 8,
                    }}
                  />
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: "#C8C8C8",
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        style={{ width: "100%", backgroundColor: "#F5F5F5", padding: "30px 0" }}
      >
        <Container>
          <Typography
            variant="h4"
            color="#444444"
            textAlign={"center"}
            marginBottom={5}
          >
            The right program for your organization
          </Typography>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} sm={6} xs={12}>
              <ProgramCard
                image={require("../../images/image-one.png")}
                title="Lavender Lotis for Employers"
                description={
                  "Our Mental Health as a benefit program will provide your employees with the tools to better cope with their persona challenges and maintain a healthy work/life balance while helping you batter the hidden productivity killer in you workplace."
                }
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <ProgramCard
                image={require("../../images/image-two.png")}
                title="Lavender Lotis for Universities"
                description={
                  "your Campus-based resources on the more acute cases while giving them an ‘easy-to-use’, ‘in-the-palm-of-your-hand’ direct and connection to a liscenced healthcare practitioner. Anytime. Anywhere."
                }
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <ProgramCard
                image={require("../../images/image-four.png")}
                title="Lavender Lotis for non-profits"
                description={
                  "Sometimes, the problem with being strong is that no one stops to ask you how you are doing. Provide Lavender Lotis to your mission-drivenand dedicated memebrs, and show them how that their wellbeing isjust as important."
                }
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <ProgramCard
                image={require("../../images/image-three.png")}
                title="Lavender Lotis for Cities and Communities"
                description={
                  "Whether it’s wildfires up North or a tornado that runs through Main Street USA; from providing thousands of hot meals across town to a cruise line stranded off the shores of Tokyo - you take care of your own first and we’re right there with you."
                }
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
