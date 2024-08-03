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
  IconButton,
  Drawer,
} from "@mui/material";
import { Facebook, Instagram, Twitter , Email } from "@mui/icons-material";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { reps } from "./../app-data/config" 

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/circuit-board.svg)",
        backgroundAttachment: "fixed",
        "-webkit-background-size": "cover",
        backgroundSize: "contain",
        backdropFilter: "blur(1px)",
      }}
    >
      <Box
        sx={{
          background: "rgb(255,255,255,0.90)",
          // background:
          // "linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      >
        <Navbar />

        <Box
          sx={{
            height: { xs: "70vh", lg: "100vh" },
            backgroundImage: "url('/banner.gif')",
            // backgroundAttahcment: "fixed",
            // backgroundSize: "cover",
          }}
        >
          {" "}
          <Box
            sx={{
              height: { xs: "70vh", lg: "100vh" },

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
                height: { xs: "70vh", lg: "100vh" },

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
                come together,forstering a culture of technological innovation
                at UFS,especially among students from the Computer Science and
                Informatics Department{" "}
              </Typography>
                <Link href="/contact">
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
                  </Link>
                  
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
                margin: "21px 0",
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
                  <Box className="btn-container">
                    {/* <button className='btn btn--shockwave is-active'>
    Shockwave
  </button> */}

                    <Button
                      className="btn btn--shockwave is-active"
                      variant="outlined"
                      // className="heartbeat"
                      sx={{
                        borderRadius: "21px",
                        color: "#221E30",
                        border: "1px dashed #221E30",
                        padding: "12px !important",
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
                  minHeight: "150px",
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
                  md={6}
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
                <Grid item xs={12} md={6}>
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

            <EventsComponent />
            <OurReps text="white" bg="#221E30" />
            <ContactForm />
            <Footer />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

// export const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Box sx={{ background: "", height: "" }}>
//       <Grid container>
//         <Grid item sx={{ background: "", height: "", padding: "0 12px" }}>
//           <Box
//             sx={{
//               height: { xs: "75px", lg: "75px" },
//               width: { xs: "75px", md: "180px" },
//               backgroundImage:
//                 "url('https://www.ufs.ac.za/images/librariesprovider5/ufs_redesign_2021/ufsheaderlogo.svg?sfvrsn=15b37820_2')",
//               backgroundSize: "contain",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "left",
//               margin: { xs: "0", lg: "0 0 0 21px" },
//             }}
//           />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             background: "",
//             padding: { xs: "0 8px", md: "0", lg: "0 21px" },
//             display: "flex",
//             justifyContent: { xs: "flex-end", lg: "flex-end" },
//             alignItems: "center",
//             background: "",
//           }}
//         >
//           <Stack
//             sx={{
//               width: { xs: "100%", lg: "75%" },
//               padding: "0",
//               display: "flex",
//               justifyContent: { xs: "flex-end", lg: "flex-end" },
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: { xs: "flex-end", lg: " space-between" },
//                 alignItems: "center",
//               }}
//             >
//               <Typography
//                 sx={{ margin: "0 21px", display: { xs: "none", md: "flex" } }}
//               >
//                 Home
//               </Typography>
//               <Typography
//                 sx={{ margin: "0 21px", display: { xs: "none", md: "flex" } }}
//               >
//                 Contact ICT
//               </Typography>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "flex-end",
//                   alignItems: "center",
//                 }}
//               >
//                 <TextField
//                   sx={{
//                     width: { xs: "75%", md: "200px", lg: "300px" },
//                     display: { xs: "none", sm: "none", md: "flex" },
//                   }}
//                 />
//                 <IconButton onClick={toggleDrawer}>
//                   <Box
//                     sx={{
//                       width: "35px",
//                       height: { xs: "25px", lg: "35px" },
//                       backgroundImage:
//                         'url("https://img.icons8.com/?size=50&id=120374&format=png")',
//                       backgroundSize: "contain",
//                       backgroundRepeat: "no-repeat",
//                       backgroundPosition: "center",
//                       "&:hover": {
//                         backgroundColor: "#7995ae",
//                       },
//                     }}
//                   />
//                 </IconButton>
//               </Box>
//             </Box>
//           </Stack>
//         </Grid>
//         <Grid item xs={12} sx={{ height: "", background: "" }}>
//           <Box sx={{ width: { xs: "85%", lg: "50%" }, margin: "0 auto" }}>
//             <Marquee gradient={true}>
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   textDecoration: "italic",
//                   margin: "8px 0",
//                   color: "red",
//                 }}
//               >
//                 Inspiring excellence, transforming lives through quality, impact
//                 and care.
//               </Typography>
//             </Marquee>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sx={{
//             height: "5vh",
//             background: "#221E30",
//             textAlign: "center",
//             color: "#eee",
//             fontWeight: "600",
//           }}
//         />
//         <Grid
//           item
//           xs={12}
//           sx={{
//             background: "",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "0 21px",
//           }}
//         >
//           <Link href="/">
//             <a>
//               <Box
//                 sx={{
//                   width: "75px",
//                   height: "75px",
//                   backgroundImage: 'url("/reps/2.png")',
//                   backgroundSize: "contain",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: { xs: "left" },
//                 }}
//               />
//             </a>
//           </Link>
//           <Box
//             sx={{
//               display: { xs: "flex", lg: "none" },
//               justifyContent: "flex-end",
//               alignItems: "center",
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <Box
//                 sx={{
//                   width: "35px",
//                   height: { xs: "35px", lg: "35px" },
//                   backgroundImage:
//                     'url("https://img.icons8.com/?size=50&id=120374&format=png")',
//                   backgroundSize: "contain",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "center",
//                 }}
//               />
//             </IconButton>
//           </Box>
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               justifyContent: "space-evenly",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
//             <Link href="/">
//               <a>
//                 <Typography
//                   sx={{
//                     fontSize: "14px",
//                     cursor: "pointer",
//                     "&:hover": {
//                       textDecoration: "underline",
//                     },
//                   }}
//                 >
//                   About Us
//                 </Typography>
//               </a>
//             </Link>
//             {/* ... (other links) ... */}
//             <Box className="btn-container">
//               <Button
//                 className="btn btn--shockwave is-active"
//                 sx={{
//                   color: "#eee",
//                   background: "#221E30",
//                 }}
//               >
//                 JOIN
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
//         <Box
//           sx={{
//             width: "250px",
//             height: "100%",
//             background: "#221E30",
//             color: "#eee",
//             padding: "20px",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               height: "50px",
//               backgroundImage:
//                 'url("https://img.icons8.com/?size=50&id=120374&format=png")',
//               backgroundSize: "contain",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               marginBottom: "20px",
//             }}
//           />
//           <Box>
//             <Link href="/">
//               <a>
//                 <Typography
//                   sx={{
//                     fontSize: "16px",
//                     cursor: "pointer",
//                     marginBottom: "10px",
//                     "&:hover": {
//                       textDecoration: "underline",
//                     },
//                   }}
//                 >
//                   About Us
//                 </Typography>
//               </a>
//             </Link>
//             {/* ... (other links) ... */}
//           </Box>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ background: "white", height: "" }}>
      <Grid container>
        <Grid
          item
          sx={{ background: "", height: "", padding: "0 12px" }}
          // xs={12}
          xs={4}
        >
          <Box
            sx={{
              height: { xs: "75px", lg: "75px" },
              width: { xs: "75px", md: "180px" },
              backgroundImage:
                "url('/qwaqwa-logo.jpg')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              // scale: "0.8",
              margin: { xs: "0", lg: "0 0 0 21px" },
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
              // alignItems: "center",
              // background: "red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-end", lg: " space-between" },
                alignItems: "center",
                // background: "yellow",
              }}
            >
                  <Link href="https://www.ufs.ac.za/ict">
              
              <Typography
                sx={{
                  margin: "0 21px",
                  fontSize: "0.7rem",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Home
              </Typography>
                  </Link>

                  <Link href="https://www.ufs.ac.za/ict">
              <Typography
                sx={{
                  margin: "0 21px",
                  fontSize: "0.7rem",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Contact ICT
              </Typography>
                  </Link>
                  
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",

                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{
                    width: { xs: "75%", md: "200px", lg: "300px" },
                    display: { xs: "none", sm: "flex", md: "flex" },
                    // scale: "0.9",
                  }}
                />
                <IconButton>
                  <Box
                    sx={{
                      width: "35px",
                      height: { xs: "25px", lg: "35px" },
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
                  ></Box>
                </IconButton>
              </Box>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ height: "", background: "" }}>
          <Box sx={{ width: { xs: "85%", lg: "50%" }, margin: "0 auto" }}>
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
        <Grid
          item
          xs={12}
          sx={{
            height: "5vh",
            background: "#221E30",
            textAlign: "center",
            color: "#eee",
            fontWeight: "600",
          }}
        >
          <Link href="mailto:itsa@gmail.com">
            <a style={{ width: "100%", fontSize: "0.7rem", color: "white" }}>
              {"itsa@gmail.com"}
            </a>
          </Link>
        </Grid>
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
          <Link href="/">
            <a>
              <Box
                sx={{
                  width: "120px",
                  height: "75px",
              backgroundImage: 'url("/logo.png")',
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: { xs: "left" , md:"center" },
                }}
              />
            </a>
          </Link>

          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <Box
              sx={{
                width: "35px",
                height: { xs: "35px", lg: "35px" },
                // backgroundImage: 'url("/sea.gif")',
                backgroundImage:
                  'url("https://img.icons8.com/?size=50&id=120374&format=png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <Link href="/">
              <a>
                <Typography
                  sx={{
                    fontSize: { md:"12px", lg:"14px"},
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  About Us
                </Typography>
              </a>
            </Link> */}

            <Link href="/membership">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Membership
                </Typography>
              </a>
            </Link>

            <Link href="/events">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Events
                </Typography>
              </a>
            </Link>

            <Link href="/resources">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Resources
                </Typography>
              </a>
            </Link>

            <Link href="/projects">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Projects
                </Typography>
              </a>
            </Link>

            <Link href="/committee">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Committee
                </Typography>
              </a>
            </Link>

            <Link href="/news">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Blog/News
                </Typography>
              </a>
            </Link>

            <Link href="/contact">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Contact
                </Typography>
              </a>
            </Link>

            <Link href="/faq">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  FAQ
                </Typography>
              </a>
            </Link>

            <Link href="/gallery">
              <a>
                <Typography
                  sx={{
                    fontSize: { md: "12px", lg: "14px" },
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Gallery
                </Typography>
              </a>
            </Link>

            <Box className="btn-container">
                                    <Link href="/contact">
              <Button
                className="btn btn--shockwave is-active"
                sx={{ color: "#eee", background: "#221E30" }}
              >
                JOIN
              </Button>
                  </Link>
                  
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          id="drawer"
          sx={{
            width: "250px",
            height: "100%",
            background: "white",
            // color: "#eee",
            // padding: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundImage: 'url("/logo.png")',
              height: "120px",
              // backgroundImage:
              // 'url("https://img.icons8.com/?size=50&id=120374&format=png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // marginBottom: "20px",
            }}
          />
          <Box>
            <Box
              sx={{
                display: { xs: "flex" },
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* <Link style={{ width: "100%" }} href="/">
                <a style={{ width: "100%" , display:'flex' , alignItems:'center' }}>
                <Box sx={{ width:'35px' , height:'35' , background:'red' }} />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    About Us
                  </Typography>
                </a>
              </Link> */}

              <Link href="/membership">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage:
                        'url("/nav-icons/icons8-membership.gif")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Membership
                  </Typography>
                </a>
              </Link>

              <Link href="/events">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-event.gif")',

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Events
                  </Typography>
                </a>
              </Link>

              <Link href="/resources">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-code.gif")',

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Resources
                  </Typography>
                </a>
              </Link>

              <Link href="/projects">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-project.gif")',

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Projects
                  </Typography>
                </a>
              </Link>

              <Link href="/committee">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-team.gif")',

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Committee
                  </Typography>
                </a>
              </Link>

              <Link href="/news">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-news.gif")',

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Blog/News
                  </Typography>
                </a>
              </Link>

              <Link href="/contact">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-phone.gif")',

                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Contact
                  </Typography>
                </a>
              </Link>

              <Link href="/faq">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-faq.gif")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    FAQ
                  </Typography>
                </a>
              </Link>

              <Link href="/gallery">
                <a
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "35px",
                      height: "35px",
                      backgroundImage: 'url("/nav-icons/icons8-gallery.gif")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                      cursor: "pointer",
                      // color: "white",
                      padding: "12px 21px",
                      width: "100%",
                      "&:hover": {
                        textDecoration: "underline",
                        background: "#eee",
                        color: "#221E30",
                      },
                    }}
                  >
                    Gallery
                  </Typography>
                </a>
              </Link>

              <Box className="btn-container">
                <Link href="/contact">
                      
                <Button
                  className="btn btn--shockwave is-active"
                  sx={{
                    color: "#eee",
                    background: "#221E30",
                    marginTop: "21px",
                  }}
                >
                  JOIN
                </Button>
                    </Link>
                    
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export const OurReps = ({ text, bg }) => {
  return (
    <Grid id="#committee" item xs={12}>
      <Grid
        item
        xs={12}
        sx={{
          padding: "50px 0",
          background: bg,
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
            color: text,
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
            color: text,
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
              background: text,
              opacity: "0.5",
            }}
          />
          <Divider sx={{ background: text, width: "70%", opacity: "0.5" }} />
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: text,
              opacity: "0.5",
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "35px 0",
          background: bg,
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
              return (
                <Representative rep={rep} key={index} bg={bg} text={text} />
              );
            })}
          </Marquee>
        </Box>
      </Grid>
    </Grid>
  );
};

export const EventsComponent = () => {
  return (
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
      {[1, 2, 3, 4].map((item, index) => (
        <Event key={item} color={colors[index]} reversed={index % 2 === 0} />
      ))}
    </Grid>
  );
};

const Representative = ({ rep, text }) => {
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
          color: text,
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
          color: text,
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
          color: text,
          fontSize: "16px",
        }}
      >
        {rep.role}
      </Typography>
    </Box>
  );
};

const Event = ({ reversed, color }) => {
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
                border: `10px solid ${color}`,
              }}
            >
              <Typography
                className="header-font"
                sx={{
                  textAlign: { xs: "center" },
                  margin: { xs: "8px auto", lg: "0" },
                  color: color,
                  fontWeight: "600",
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
                background: color,
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
            background: color,
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

export const Footer = () => {
  return (
    <Grid item xs={12}>
      <Box className="footer">
        <Box className="container">
          <Grid container sx={{ p: "60px" }} className="row">
            <Grid item xs={12} md={4} className="col-lg-4 col-sm-4 col-xs-12">
              <Box className="single_footer">
                <h4>ITSA</h4>
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a>Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources">
                      <a>Resources</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className="col-md-4 col-sm-4 col-xs-12">
              <Box className="single_footer single_footer_address">
                <h4>Helper</h4>
                <ul>
                  <li>
                    <Link href="/committee">
                      <a>Committee</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a>Blog & News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Frequently Asked Questions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/membership">
                      <a>Join Us</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className="col-md-4 col-sm-4 col-xs-12">
              <div className="single_footer single_footer_address">
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className="subscribe">
                    <input
                      type="text"
                      className="subscribe__input"
                      placeholder="Enter Email Address"
                    />
                    <button type="button" className="subscribe__btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="social_profile">
                <ul style={{ background: "pink" }}>
                  <li>
                    <Link href="mailto:itsa@gmail.com">
                      <IconButton
                        sx={{
                          border: "1px solid white",
                          color: "white",
                          margin: "0 0 0 21px",
                          "&:hover": {
                            background: "white",
                            color: "#3060b4",
                          },
                        }}
                      >
                        <Email
                          sx={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            color: "inherit",
                          }}
                        />
                      </IconButton>
                    </Link>
                  </li>
            
                  <li>
                    <Link href="https://www.instagram.com/ufsweb/?hl=en">
                      <IconButton
                        sx={{
                          border: "1px solid white",
                          color: "white",
                          margin: "0 12px 0 21px",
                          "&:hover": {
                            background: "white",
                            color: "#3060b4",
                          },
                        }}
                      >
                        <Instagram
                          sx={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            color: "inherit",
                          }}
                        />
                      </IconButton>
                    </Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Box className="row">
                <Box className="col-lg-12 col-sm-12 col-xs-12">
                  <p className="copyright" style={{ fontSize: "0.7rem" }}>
                    {/* Copyright © 2024 <a href="#">Atomus Dev</a>. */}
                    Copyright © 2021 - 2024 <a href="#">Atomus Dev</a>{" "}
                    Operating Company. All Rights Reserved.
                    <br /> The Atomus Dev word mark is a registered trademark of
                    Atomus Dev Operating Company, Proprietary Limited in the RSA
                    and other countries.
                    <br /> The Atomus logo is a registered trademark of{" "}
                    <a href="#">Atomus Dev</a>, Proprietary Limited in the RSA.
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export const ContactForm = () => {
  return (
    <Grid item xs={12} sx={{ minHeight: "100vh", padding: "32px" }}>
      <Typography
        className="header-font"
        sx={{
          textAlign: { xs: "center" },
          margin: { xs: "12px auto", lg: "0" },
          color: "#221E30",
          // color: "white",
          fontSize: { xs: "30px", lg: "40px" },
        }}
      >
        Contact Us{" "}
      </Typography>
      <Typography
        // className="header-font"
        sx={{
          textAlign: { xs: "center" },
          margin: { xs: "2px auto", lg: "0" },
          color: "#221E30",
          // color: "white",
          fontSize: "16px",
        }}
      >
        Contact Us For More Information and We will reach out to you with
        assistance.{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "75%", lg: "50%" },
          margin: "21px auto",
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
        <Divider sx={{ background: "#221E30", width: "70%", opacity: "0.5" }} />
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
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "350px",
              width: "350px",
              backgroundImage: "url('/transistor-support-person.gif')",
              // "url('https://ouch-cdn2.icons8.com/2ovcKXYBoyvHlUuBgcgcwfroV2E2pqoZL6AlsNzA7Lw/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODYv/NTUxN2E0NzEtNTBj/My00ZTc4LTk2ZjQt/ODIyNTJmZjgzMmFm/LnN2Zw.gif')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              margin: "0 auto",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} sm={6} sx={{ padding: "0 12px 0 0" }}>
              <Typography
                // className="header-font"
                sx={{
                  color: "#221E30",
                  // color: "white",
                  fontSize: "16px",
                }}
              >
                Name
              </Typography>
              <TextField fullWidth={true} sx={{ margin: "12px 0" }} />

              <Typography
                // className="header-font"
                sx={{
                  color: "#221E30",
                  // color: "white",
                  fontSize: "16px",
                }}
              >
                Surname:
              </Typography>
              <TextField fullWidth={true} sx={{ margin: "12px 0" }} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ padding: "0 0 0 12px" }}>
              <Typography
                // className="header-font"
                sx={{
                  color: "#221E30",
                  // color: "white",
                  fontSize: "16px",
                }}
              >
                Email:
              </Typography>
              <TextField fullWidth={true} sx={{ margin: "12px 0" }} />

              <Typography
                // className="header-font"
                sx={{
                  color: "#221E30",
                  // color: "white",
                  fontSize: "16px",
                }}
              >
                Tel:
              </Typography>
              <TextField fullWidth={true} sx={{ margin: "12px 0" }} />
            </Grid>
          </Grid>
          <Typography
            // className="header-font"
            sx={{
              color: "#221E30",
              // color: "white",
              fontSize: "16px",
            }}
          >
            Query:
          </Typography>
          <TextField
            fullWidth={true}
            multiline
            rows={5}
            sx={{ margin: "12px 0" }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                background: "#221E30",
                color: "white",
                padding: "16px 18px",
                "&:hover": {
                  color: "#221E30",
                  background: "white",
                  border: "1px solid #221E30",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};



const addtionalColors = {
  yellow: "#ffbe25",
  green: "#9bc90e",
  purple: "#b500ac",
  red: "#e64b23",
};
const colors = ["#ffbe25", "#9bc90e", "#b500ac", "#e64b23"];
