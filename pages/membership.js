import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { ContactForm, Footer, Navbar } from ".";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Mailchimp from "react-mailchimp-form";

export default function Contact() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [query, setquery] = useState({
    name: "",
    tel: "",
    email: "",
    query: "",
  });

  const handleFieldChange = (e) => {
    setquery({
      ...query,
      [e.target.name]: e.target.value,
    });

    console.log(query);
  };

  // const handleSubmit = ()  =>  console.log(query)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsProcessing(true);

  //   const queryValues = Object.values(query);

  //   if (queryValues.includes("")) {
  //     toast.warning("Please fill in all fields.", {
  //       theme: "dark",
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //     });
  //     setIsProcessing(false);
  //   } else {
  //     axios
  //       .post("/api/contact", query)
  //       .then((res) => {
  //         if (res.data.message == "MAIL_SENT") {
  //           toast.success("Email Succesfully sent to Misguided.", {
  //             // theme: "dark",
  //             position: "top-right",
  //             icon: "🚀",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //           });

  //           setquery({
  //             name: "",
  //             tel: "",
  //             email: "",
  //             query: "",
  //           });

  //           setIsProcessing(false);
  //         } else {
  //           toast.error("Error query to Atomus.", {
  //             theme: "dark",
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //           });

  //           setIsProcessing(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setIsProcessing(false);
  //       });
  //   }
  // };

  return (
    <Box>
      <Typography></Typography>
      <Navbar />
      <Box
        sx={{
          //   background: "",
          height: "250px",
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBtMaFdswKheh-K8syaREnGz6e0_JR1PD8XP43H7Y2A&s')",
          // "url('https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?w=740&t=st=1716792519~exp=1716793119~hmac=00400c04fa97158efe185d7211675907752670395e0c845521d058f607e57869')",
          // backgroundImage:
          // "url(https://img.freepik.com/free-vector/realistic-technology-particle-background_23-2148413634.jpg?t=st=1715326464~exp=1715330064~hmac=abe6be62318ab5a27a2c187297eb73fa93d9b7966a1ec07d6f50edacea85af8d&w=740)",
          // "url('https://images.pexels.com/photos/19895718/pexels-photo-19895718/free-photo-of-woman-working-on-computer-hardware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "contain",
          // backgroundAttachment: "fixed",
          // backgroundRepeat: "no-repeat",
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
      </Box>
      <Grid container>
        <Grid item xs={12} sx={{ minHeight: "100vh", padding: "32px" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                // background: "#221E30",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  //   margin: "21px",
                  height: "750px",
                  width: "90%",
                  backgroundImage: "url('/circuit-primary.svg')",
                  // "url('https://ouch-cdn2.icons8.com/2ovcKXYBoyvHlUuBgcgcwfroV2E2pqoZL6AlsNzA7Lw/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODYv/NTUxN2E0NzEtNTBj/My00ZTc4LTk2ZjQt/ODIyNTJmZjgzMmFm/LnN2Zw.gif')",
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  margin: "21px auto",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
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
                Membership{" "}
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
                Contact Us For More Information and We will reach out to you
                with assistance.{" "}
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
                <Divider
                  sx={{ background: "#221E30", width: "70%", opacity: "0.5" }}
                />
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
              <Grid item xs={12} sm={12} sx={{ padding: "0" }}>
                <Typography
                  // className="header-font"
                  sx={{
                    color: "#221E30",
                    // color: "white",
                    fontSize: "16px",
                  }}
                >
                  Qualification :
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
                  Year of Graduation:
                </Typography>
                <TextField
                  type="date"
                  placeholder={`2025`}
                  fullWidth={true}
                  sx={{ margin: "12px 0" }}
                />
              </Grid>
              <Typography
                // className="header-font"
                sx={{
                  color: "#221E30",
                  // color: "white",
                  fontSize: "16px",
                }}
              >
                A brief statement of interest or reason for joining:
              </Typography>
              <TextField
                fullWidth={true}
                multiline
                rows={5}
                placeholder={`Availability for meetings and events 
Skills or experience relevant to the association's activities`}
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
      </Grid>
      <Footer />
    </Box>
  );
}

const inputStyles = {
  "& .MuiInputBase-root": {
    borderBottom: "2px solid #142531ff",
    color: "#142531ff",
    // margin: "0px 0 5px",
  },
  "& .MuiInputBase-root.Mui-focused": {
    "& > fieldset": {
      borderBottom: "3px solid #142531ff",
      color: "#40e0d0",
    },
  },
};
