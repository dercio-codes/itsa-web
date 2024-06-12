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
          height: "250px",
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBtMaFdswKheh-K8syaREnGz6e0_JR1PD8XP43H7Y2A&s')",
          backgroundSize: "contain",
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
        <Grid
          item
          xs={12}
          sx={{ minHeight: "100vh", padding: { xs: "0 32px", lg: "32px" } }}
        >
          <Grid
            container
            // sx={{
            //   display: "flex",
            //   flexDirection: { xs: "column-reverse", md: "row " },
            // }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  height: "750px",
                  width: "90%",
                  backgroundImage: "url('/circuit-primary.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  margin: "0 auto",
                  // display: { xs: "none", lg: "flex" },
                  transform: { xs: "rotate(-90deg)", md: "", lg: "" },
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
                  fontSize: { xs: "30px", lg: "40px" },
                }}
              >
                Membership{" "}
              </Typography>
              <Typography
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
                <Grid item xs={12} md={6} sx={{ padding: "0 12px 0 0" }}>
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
                  <TextField
                    placeholder={`Informatic`}
                    fullWidth={true}
                    sx={{ margin: "12px 0", background: "white" }}
                  />
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
                  <TextField
                    placeholder={`Technology`}
                    fullWidth={true}
                    sx={{ margin: "12px 0", background: "white" }}
                  />
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
                  <TextField
                    placeholder={`ITSA@gmail.com`}
                    fullWidth={true}
                    sx={{ margin: "12px 0", background: "white" }}
                  />
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
                  <TextField
                    placeholder={`011 - 123 - 4567`}
                    fullWidth={true}
                    sx={{ margin: "12px 0", background: "white" }}
                  />
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
                <TextField
                  placeholder={`Majoring in Computer Science`}
                  fullWidth={true}
                  sx={{ margin: "12px 0", background: "white" }}
                />
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
                  sx={{ margin: "12px 0", background: "white" }}
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
                sx={{ margin: "12px 0", background: "white" }}
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
