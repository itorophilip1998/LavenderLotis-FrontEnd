import { Container, Typography, useMediaQuery, Grid } from "@mui/material";
import React from "react";
import ProgramCard from "../../components/card/ProgramCard";
import DoneIcon from "@mui/icons-material/Done";

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
      <div style={{ width: "100%", padding: "30px 0" }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            color="#444444"
            marginBottom={5}
            fontSize={30}
          >
            Millions of members and hundreds of oranizations already enjoy
            Lavender Lotis.
            <br />
            Here are some of the reasons why:
          </Typography>

          <Grid container spacing={5}>
            <Grid item md={4} sm={12} xs={12}>
              <div
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #DDDDDD",
                  marginBottom: 15,
                }}
              >
                <Typography color="#444444" variant="h6" textAlign="center">
                  Why members love us
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Most comprehensive mental health support for organizations{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Smart matching with a licensed therapist per their preferences
                  and needs
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Get the support they need, when they need it - wherever they
                  are
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Easy access to the benefit leading to higher engagement levels
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Unlimited messaging with their therapist
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Digital tools like a journal, goal tracking, and interactive
                  worksheets
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Feeling supported in their place of work and that they matter
                  too
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Maintain a work-life balance and create enjoyable moments at
                  home
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <img
                src={require("../../images/video-app.png")}
                alt=""
                width="100%"
                height={tablet ? "400px" : "600px"}
                style={{ objectFit: "contain" }}
              />
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <div
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #DDDDDD",
                  marginBottom: 15,
                }}
              >
                <Typography color="#444444" variant="h6" textAlign="center">
                  Why providers love us
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Most comprehensive holistic health support for your members
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  No integration required and/or setup fees
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Roll out within a week's time
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Simple dashboard to manage membership
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Co-branded landing page to onboard your members
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Designated success manager and support team
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Monthly utilization reporting free of any PII
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Choose the right coverage for your organization (annual vs.
                  shorter term)
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  2 simple pricing plans (flat rate to cover all or
                  pay-per-usage)
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <DoneIcon style={{ color: "#71A84F" }} />
                <Typography color="#4A4A4A" marginLeft={2}>
                  Happier, healthier, and more productive employees
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ width: "100%", padding: "30px 0" }}>
        <Container>
          <Typography variant="h4" marginBottom={5} textAlign="center">
            How it Works
          </Typography>
          <Grid container spacing={5}>
            <Grid item md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={require("../../images/communicate.png")} alt="" />
              </div>
              <Typography
                variant="h6"
                color="#444"
                textAlign="center"
                marginY={2}
              >
                4 modalities to communicate
              </Typography>
              <Typography variant="body1" textAlign="center" paddingX={2}>
                Choose the right way for you, every time! BetterHelp's
                all-in-one platform offers unlimited messaging with your
                therapist and a choice between chat, phone and video for your
                weekly live sessions.
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={require("../../images/manage.png")} alt="" />
              </div>
              <Typography
                variant="h6"
                color="#444"
                textAlign="center"
                marginY={2}
              >
                Dynamic member management
              </Typography>
              <Typography variant="body1" textAlign="center" paddingX={2}>
                As an organization, you need a program that would keep up with
                your way of doing things. With BetterHelp this is easy, you can
                add/remove members as needed, have full control over plan
                selections as well a completely visibility into utilization
                rates - just to name a few benefits!
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={require("../../images/quick.png")} alt="" />
              </div>
              <Typography
                variant="h6"
                color="#444"
                textAlign="center"
                marginY={2}
              >
                Quick Implementation
              </Typography>
              <Typography variant="body1" textAlign="center" paddingX={2}>
                We like to keep things business-friendly and simple; therefore,
                implementing our services requires zero integration! We can have
                your organization up and running within a week.
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={require("../../images/group.png")} alt="" />
              </div>
              <Typography
                variant="h6"
                color="#444"
                textAlign="center"
                marginY={2}
              >
                Groupinars
              </Typography>
              <Typography variant="body1" textAlign="center" paddingX={2}>
                Join one or more of our 30+ weekly, topic-based, interactive
                group session webinars. Facilitated by a health providers who is
                an expert in that topic/field, our groupinars are completely
                anonymous, accessible to all of our members, and kept up-to-date
                with current events.
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={require("../../images/report.png")} alt="" />
              </div>
              <Typography
                variant="h6"
                color="#444"
                textAlign="center"
                marginY={2}
              >
                Rebost Reporting
              </Typography>
              <Typography variant="body1" textAlign="center" paddingX={2}>
                Respecting the confidentiality of your members doesn't mean that
                you need to be kept in the dark over what they are doing on
                BetterHelp. Monitor utilization rates, assess mutual stressors,
                review satisfaction surveys/scores, and track outcomes and
                effectiveness all with 24/7/365 access to aggregated level
                (non-PII) reports.
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={require("../../images/network.png")} alt="" />
              </div>
              <Typography
                variant="h6"
                color="#444"
                textAlign="center"
                marginY={2}
              >
                Largest and most diverse provider network
              </Typography>
              <Typography variant="body1" textAlign="center" paddingX={2}>
                With 19,000+ NCQA based credentialed licensed therapists, our
                diverse and clinically versatile provider network allows us to
                match your members based on their preferences and needs, making
                sure they get the support they need and deserve.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
