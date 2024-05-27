import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, Grid, Button, TextField, Divider } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import { ContactForm, Footer, Navbar, OurReps } from ".";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/gallery-images/1.jpeg",
    thumbnail: "/gallery-images/1.jpeg",
  },
  {
    original: "/gallery-images/2.jpeg",
    thumbnail: "/gallery-images/2.jpeg",
  },
  {
    original: "/gallery-images/3.jpeg",
    thumbnail: "/gallery-images/3.jpeg",
  },
  {
    original: "/gallery-images/4.jpeg",
    thumbnail: "/gallery-images/4.jpeg",
  },
  {
    original: "/gallery-images/5.jpeg",
    thumbnail: "/gallery-images/5.jpeg",
  },
  {
    original: "/gallery-images/6.jpeg",
    thumbnail: "/gallery-images/6.jpeg",
  },
  {
    original: "/gallery-images/7.jpeg",
    thumbnail: "/gallery-images/7.jpeg",
  },
];

const FAQPage = () => {
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          // background: "red",
          height: "250px",
          backgroundImage:
            "url('https://www.ufs.ac.za/images/default-source/default-album/student-life.jpg?sfvrsn=7c684c20_0')",
          // backgroundImage:
          // "url(https://img.freepik.com/free-vector/realistic-technology-particle-background_23-2148413634.jpg?t=st=1715326464~exp=1715330064~hmac=abe6be62318ab5a27a2c187297eb73fa93d9b7966a1ec07d6f50edacea85af8d&w=740)",
          // "url('https://images.pexels.com/photos/19895718/pexels-photo-19895718/free-photo-of-woman-working-on-computer-hardware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          // backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          sx={{
            height: "250px",
            background: "rgb(1,1,1,.7)",
            // background:
            //   "linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0.7) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "250px",
              background: "rgb(1,1,1,.3)",
              //   background:
              //     "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
      </Box>
      <OurReps bg="transparent" text="#221E30" />
      <Footer />
    </Box>
  );
};

export default FAQPage;
