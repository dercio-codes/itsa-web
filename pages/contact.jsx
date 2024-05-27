import { Box, Typography, Grid, Button, TextField } from "@mui/material";
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
          // background: "red",
          height: "250px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?w=740&t=st=1716792519~exp=1716793119~hmac=00400c04fa97158efe185d7211675907752670395e0c845521d058f607e57869')",
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
      <ContactForm />
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
