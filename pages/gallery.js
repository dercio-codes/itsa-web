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
import { ContactForm, Footer, Navbar } from ".";
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
      <Box sx={{ margin: "50px auto" }}>
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
          Gallery{" "}
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
          Here is a few images from our events and conferences.{" "}
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
      </Box>
      <ImageGallery items={images} />
      <Footer />
    </Box>
  );
};

export default FAQPage;
