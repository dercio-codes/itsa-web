import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
  TextField,
  Paper,
  Divider,
  Avatar,
} from "@mui/material";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <Box sx={{ background: "" }}>
      <Navbar />

      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url('/banner.gif')",
          // backgroundAttahcment: "fixed",
          // backgroundSize: "cover",
        }}
      >
        {" "}
        <Box
          sx={{
            height: "100vh",
            background: "rgb(255,255,255)",
            background:
              "linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100vh",
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              className="header-font"
              sx={{
                textAlign: "center",
                margin: "0 auto",
                color: "white",
                fontSize: "50px",
              }}
            >
              Our Vision{" "}
            </Typography>
            <Typography
              // className="header-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"
              sx={{
                textAlign: "center",
                fontWeight: "300",
                margin: "12px auto",
                color: "white",
                fontSize: { xs: "20px", lg: "24px" },
                width: { xs: "80%", lg: "50%" },
              }}
            >
              Our vision as ITSA is to provide a platform for IT students to
              come together,forstering a culture of technological innovation at
              UFS,especially among students from the Computer Science and
              Informatics Department{" "}
            </Typography>
            <Button
              className="heartbeat"
              sx={{
                color: "white",
                border: "1px solid white",
                padding: "12px 32px",
                "&:hover": {
                  background: "white",
                  color: "#222",
                },
              }}
            >
              {" "}
              JOIN
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#221E30",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "",
              minHeight: { xs: "50vh", lg: "80vh" },
            }}
          >
            <Box
              sx={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "flex-start" },
                justifyContent: "center",
              }}
            >
              <Typography
                className="header-font"
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  margin: { xs: "12px auto", lg: "0" },
                  color: "#221E30",

                  // color: "white",
                  fontSize: "30px",
                }}
              >
                Are you an IT student ?{" "}
              </Typography>
              <Typography
                className="header-font"
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  margin: { xs: "12px auto", lg: "0" },
                  color: "#221E30",
                  // color: "white",
                  fontSize: "20px",
                }}
              >
                We are looking for you{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  margin: "12px 0",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#221E30",
                    opacity: "0.5",
                  }}
                />
                <Divider sx={{ color: "#221E30", width: "70%" }} />
              </Box>
              <Typography
                // className="header-font"
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  fontWeight: "300",
                  margin: { xs: "12px auto", lg: "12px 0" },
                  color: "#221E30",
                  // color: "white",
                  fontSize: { xs: "20px", lg: "16px" },
                }}
              >
                ITSA brings you closer to your field where you feel a sense of
                belonging on campus.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", lg: "flex-end" },
                  width: "100%",
                }}
              >
                <Button
                  variant="outlined"
                  // className="heartbeat"
                  sx={{
                    borderRadius: "21px",
                    color: "#221E30",
                    border: "1px dashed #221E30",
                    // "&:hover": {
                    //   color: "#221E30",
                    //   background: "white",
                    // },
                  }}
                >
                  Get Involved Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "",
              minHeight: { xs: "50vh", lg: "80vh" },
            }}
          >
            <Box
              sx={{
                height: "350px",
                width: "350px",
                backgroundImage: "url('/cog.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={2}
              sx={{
                height: "150px",
                width: { xs: "65%", lg: "500px" },
                display: "flex",
                alignItems: "center",
                padding: "32px",
              }}
            >
              <Box>
                <Typography
                  className="header-font"
                  sx={{
                    textAlign: { xs: "center", lg: "left" },
                    margin: { xs: "12px auto", lg: "0" },
                    color: "#221E30",

                    // color: "white",
                    fontSize: "20px",
                  }}
                >
                  21 June 2024{" "}
                </Typography>
                <Typography
                  // className="header-font"
                  sx={{
                    textAlign: { xs: "center", lg: "left" },
                    margin: { xs: "12px auto", lg: "0" },
                    color: "#221E30",
                    // color: "white",
                    fontSize: "16px",
                  }}
                >
                  We are looking for you to discuss AI and how it is affecting
                  our current lives and how you should not fear as a Computer
                  Science student{" "}
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              padding: "32px 0",
              background: "rgba(0,0,150,0.1)",
              margin: "32px 0 0 0",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ width: "75%" }}>
                  <Typography
                    className="header-font"
                    sx={{
                      textAlign: { xs: "center", lg: "left" },
                      margin: { xs: "8px auto", lg: "0" },
                      color: "#221E30",

                      // color: "white",
                      fontSize: "20px",
                    }}
                  >
                    21 June 2024{" "}
                  </Typography>
                  <Typography
                    // className="header-font"
                    sx={{
                      textAlign: { xs: "center", lg: "left" },
                      margin: { xs: "8px auto", lg: "0" },
                      color: "#221E30",

                      // color: "white",
                      fontSize: "16px",
                    }}
                  >
                    Stay Up To Date With Our Newletter and Updates Regarding
                    ITSA{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", lg: "flex-start" },
                    alignItems: "center",
                  }}
                >
                  <TextField sx={{ width: { xs: "200px", lg: "300px" } }} />
                  <Button
                    sx={{
                      background: "#221E30",
                      color: "white",
                      padding: "16px",
                    }}
                  >
                    Join List
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              // background: "red",
              height: "250px",
              backgroundImage: "url('/banner.gif')",
              // backgroundImage:
              // "url(https://img.freepik.com/free-vector/realistic-technology-particle-background_23-2148413634.jpg?t=st=1715326464~exp=1715330064~hmac=abe6be62318ab5a27a2c187297eb73fa93d9b7966a1ec07d6f50edacea85af8d&w=740)",
              // "url('https://images.pexels.com/photos/19895718/pexels-photo-19895718/free-photo-of-woman-working-on-computer-hardware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                height: "250px",
                background: "rgb(255,255,255)",
                background:
                  "linear-gradient(0deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "250px",
                  background: "rgb(255,255,255)",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px 0",
            }}
          >
            <Box sx={{ margin: "75px", width: "100%" }}>
              <Typography
                className="header-font"
                sx={{
                  textAlign: { xs: "center" },
                  margin: { xs: "12px auto", lg: "0" },
                  color: "#221E30",
                  // color: "white",
                  fontSize: "40px",
                }}
              >
                Previous Events{" "}
              </Typography>
              <Typography
                // className="header-font"
                sx={{
                  textAlign: { xs: "center" },
                  margin: { xs: "12px auto", lg: "0" },
                  color: "#221E30",
                  // color: "white",
                  fontSize: "16px",
                }}
              >
                Here Is A List Of Our Previous Events{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  margin: "12px auto",
                  // background: "red",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#221E30",
                    opacity: "0.5",
                  }}
                />
                <Divider sx={{ color: "#221E30", width: "70%" }} />
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#221E30",
                    opacity: "0.5",
                  }}
                />
              </Box>
            </Box>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Event key={item} reversed={index % 2 === 0} />
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              padding: "50px 0",
              background: "#221E30",
              minHeight: "50vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              className="header-font"
              sx={{
                textAlign: { xs: "center" },
                margin: { xs: "12px auto", lg: "0" },
                // color: "#221E30",
                color: "white",
                fontSize: { xs: "30px", lg: "40px" },
              }}
            >
              Our Representatives{" "}
            </Typography>
            <Typography
              // className="header-font"
              sx={{
                textAlign: { xs: "center" },
                margin: { xs: "2px auto", lg: "0" },
                // color: "#221E30",
                color: "white",
                fontSize: "16px",
              }}
            >
              Here Is A List Of Our Representatives{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "75%", lg: "50%" },
                margin: "12px 0",
                // background: "red",
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#eee",
                  opacity: "0.5",
                }}
              />
              <Divider
                sx={{ background: "#eee", width: "70%", opacity: "0.5" }}
              />
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#eee",
                  opacity: "0.5",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              padding: "50px 0",
              background: "#221E30",
              // minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <Box sx={{ width: "90%", margin: "0 auto" }}>
              <Marquee>
                {reps.map((rep, index) => {
                  return <Representative rep={rep} key={index} />;
                })}
              </Marquee>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const Navbar = () => {
  return (
    <Box sx={{ background: "", height: "" }}>
      <Grid container>
        <Grid
          item
          sx={{ background: "", height: "", padding: "" }}
          // xs={12}
          xs={4}
        >
          <Box
            sx={{
              height: { xs: "75px", lg: "75px" },
              width: { xs: "150px", lg: "200px" },
              backgroundImage:
                "url('https://www.ufs.ac.za/images/librariesprovider5/ufs_redesign_2021/ufsheaderlogo.svg?sfvrsn=15b37820_2')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              // scale: "0.8",
              margin: { xs: "0 auto", lg: "0 0 0 21px" },
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            background: "",
            padding: { xs: "0 8px", md: "0", lg: "0 21px" },
            display: "flex",
            justifyContent: { xs: "flex-end", lg: "flex-end" },
            alignItems: "center",
            background: "",
          }}
          // xs={12}
          xs={8}
        >
          <Stack
            sx={{
              width: { xs: "100%", lg: "75%" },
              padding: "0",
              display: "flex",
              justifyContent: { xs: "flex-end", lg: "flex-end" },
              alignItems: "center",
              background: "",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: " space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ margin: "0 21px", display: { xs: "none", md: "flex" } }}
              >
                Home
              </Typography>
              <Typography
                sx={{ margin: "0 21px", display: { xs: "none", md: "flex" } }}
              >
                Contact ICT
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{
                    width: { xs: "100px", md: "200px", lg: "300px" },
                    display: { xs: "none", md: "flex" },
                    // scale: "0.9",
                  }}
                />
                <Button
                  sx={{
                    width: "35px",
                    height: "35px",
                    // backgroundImage: 'url("/sea.gif")',
                    backgroundImage:
                      'url("https://img.icons8.com/?size=50&id=e4NkZ7kWAD7f&format=png")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    "&:hover": {
                      backgroundColor: "#7995ae",
                    },
                    // border: "1px solid blue",
                  }}
                ></Button>
              </Box>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ height: "", background: "" }}>
          <Box sx={{ width: { xs: "75%", lg: "50%" }, margin: "0 auto" }}>
            <Marquee gradient={true}>
              <Typography
                sx={{
                  fontSize: "14px",
                  textDecoration: "italic",
                  margin: "8px 0",
                  color: "red",
                }}
              >
                Inspiring excellence, transforming lives through quality, impact
                and care.
              </Typography>
            </Marquee>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ height: "5vh", background: "#221E30" }}></Grid>
        <Grid
          item
          xs={12}
          sx={{
            background: "",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 21px",
          }}
        >
          <Box
            sx={{
              width: "180px",
              height: "75px",
              backgroundImage: 'url("/reps/2.png")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>About Us</Typography>
            <Typography sx={{ fontSize: "14px" }}>Membership</Typography>
            <Typography sx={{ fontSize: "14px" }}>Events</Typography>
            <Typography sx={{ fontSize: "14px" }}>Resources</Typography>
            <Typography sx={{ fontSize: "14px" }}>Projects</Typography>
            <Typography sx={{ fontSize: "14px" }}>Committee</Typography>
            <Typography sx={{ fontSize: "14px" }}>Blog/News</Typography>
            <Typography sx={{ fontSize: "14px" }}>Contact</Typography>
            <Typography sx={{ fontSize: "14px" }}>FAQ</Typography>
            <Typography sx={{ fontSize: "14px" }}>Gallery</Typography>
            <Button sx={{ color: "#eee", background: "#221E30" }}>JOIN</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const Representative = ({ rep }) => {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        background: "",
        margin: "0 32px",
        width: "250px",
        scale: "0.90",
        "&:hover": {
          scale: "0.95",
          transition: "800ms",
          cursor: "pointer",
        },
      }}
    >
      <Avatar
        src={`${rep.image}`}
        sx={{ width: "145px", height: "145px", margin: "0 auto" }}
      />
      <Typography
        className="header-font"
        sx={{
          textAlign: { xs: "center" },
          margin: { xs: "12px auto", lg: "12px 0" },
          // color: "#221E30",
          color: "white",
          fontSize: "24px",
        }}
      >
        {rep.repName}{" "}
      </Typography>
      <Typography
        className="header-font"
        sx={{
          textAlign: { xs: "center" },
          margin: { xs: "0 auto", lg: "0 0" },
          // color: "#221E30",
          color: "white",
          fontSize: "24px",
        }}
      >
        {rep.repSurname}
      </Typography>

      <Typography
        // className="header-font"
        sx={{
          textAlign: { xs: "center" },
          margin: { xs: "12px auto", lg: "0" },
          // color: "#221E30",
          color: "white",
          fontSize: "16px",
        }}
      >
        {rep.role}
      </Typography>
    </Box>
  );
};

const Event = ({ reversed }) => {
  return (
    <Box
      sx={{
        width: { xs: "90%", lg: "80%" },
        minHeight: "150px",
        // border: "10px solid #221E30",
        margin: "12px auto",
        opacity: "0.95",
        "&:hover": {
          opacity: "1",
          transition: "800ms",
          cursor: "pointer",
        },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: reversed ? "row-reverse" : "row",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            border: "1px solid #eee",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: reversed ? "row-reverse" : "row",
            }}
          >
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "10px solid #221E30",
              }}
            >
              <Typography
                className="header-font"
                sx={{
                  textAlign: { xs: "center" },
                  margin: { xs: "8px auto", lg: "0" },
                  color: "#221E30",

                  // color: "white",
                  fontSize: "20px",
                }}
              >
                June{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "150px",
                padding: "21px",
                background: "#221E30",
                justifyContent: "center",
              }}
            >
              <Typography
                className="header-font"
                sx={{
                  textAlign: { xs: "center" },
                  margin: { xs: "8px auto", lg: "0" },
                  // color: "#221E30",

                  color: "white",
                  fontSize: "20px",
                }}
              >
                18{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#221E30",
            minHeight: "150px",
            padding: "21px",
            // border: "1px solid #eee",
          }}
        >
          <Typography
            className="header-font"
            sx={{
              textAlign: { xs: "center", lg: "left" },
              margin: { xs: "8px auto", lg: "0" },
              color: "#eee",

              // color: "white",
              fontSize: "20px",
            }}
          >
            21 June 2024{" "}
          </Typography>
          <Typography
            textWrap={false} // clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"
            sx={{
              textAlign: { xs: "center", lg: "left" },
              margin: { xs: "8px auto", lg: "0" },
              color: "#eee",

              // color: "white",
              fontSize: "16px",
            }}
          >
            Stay Up To Date With Our Newletter and Updates Regarding ITSA{" "}
          </Typography>
          <Typography
            textWrap={false} // clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"
            sx={{
              textAlign: { xs: "center", lg: "left" },
              margin: { xs: "8px auto", lg: "0" },
              color: "#eee",

              // color: "white",
              fontSize: "16px",
            }}
          >
            Stay Up To Date With Our Newletter and Updates Regarding ITSA{" "}
          </Typography>
          <Typography
            textWrap={false} // clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"// clssName"hedr-font"
            sx={{
              textAlign: { xs: "center", lg: "left" },
              margin: { xs: "8px auto", lg: "0" },
              color: "#eee",

              // color: "white",
              fontSize: "16px",
            }}
          >
            Stay Up To Date With Our Newletter and Updates Regarding ITSA{" "}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const reps = [
  {
    repName: "Hope",
    repSurname: " Motchesane",
    image: "/reps/Hope-Motchesane.jpg",
    role: "President",
  },
  {
    repName: "Kamohelo",
    repSurname: " Motaung",
    role: "Tresurer",
    image: "/reps/Kamohelo-Motaung.jpg",
  },
  {
    repName: "Letseka",
    repSurname: " Radebe",
    image: "/reps/Letseka-Radebe.jpg",
    role: "First-Year Representative",
  },
  {
    repName: "Lindele",
    repSurname: " Nyambe",
    image: "/reps/Lindele-Nyambe.jpg",
    role: "Communications/Liason",
  },
  {
    repName: "Ntokozo",
    repSurname: " Langa",
    role: "Vice-President",
    image: "/reps/Ntokozo-Langa.jpg",
  },
  {
    repName: "Ntokozo",
    repSurname: " Mashinini",
    image: "/reps/Ntokozo-Mashinini.jpg",
    role: "Database administrator",
  },
  {
    repName: "Phenyo",
    repSurname: " Manyathela",
    image: "/reps/Phenyo-Manyathela.jpg",
    role: "Additional Committee Member",
  },
  {
    repName: "Simphiwe",
    repSurname: " Mthembu",
    image: "/reps/Simphiwe-Mthembu.jpg",
    role: "Additional Committee Member",
  },
  {
    repName: "Yandile",
    repSurname: " Myeni",
    image: "/reps/Yandile-Myeni.jpg",
    role: "Secretary",
  },
];