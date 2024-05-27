import React, { useState } from "react";
import { Modal, Paper, IconButton, Pagination } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Navbar, Footer } from ".";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const images = [
    { original: "/events/1.jpeg" },
    { original: "/events/2.jpeg" },
    { original: "/events/3.jpeg" },
    { original: "/gallery-images/4.jpeg" },
    { original: "/gallery-images/5.jpeg" },
    { original: "/gallery-images/6.jpeg" },
    { original: "/gallery-images/1.jpeg" },
    // { original: "/gallery-images/8.jpeg" },
    // { original: "/gallery-images/9.jpeg" },
    // { original: "/gallery-images/10.jpeg" },
    // { original: "/gallery-images/11.jpeg" },
    // { original: "/gallery-images/12.jpeg" },
    // { original: "/gallery-images/13.jpeg" },
    // { original: "/gallery-images/14.jpeg" },
    // { original: "/gallery-images/15.jpeg" },
  ];

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedImages = images.slice(startIndex, endIndex);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          height: "250px",
          backgroundImage:
            "url('https://www.ufs.ac.za/images/default-source/default-album/student-life_graduation.jpg?sfvrsn=56684c20_0')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
        }}
      >
        <Box
          sx={{
            height: "250px",
            background: "rgb(1,1,1,.7)",
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{ margin: "50px auto" }}>
        <Typography
          className="header-font"
          sx={{
            textAlign: { xs: "center" },
            margin: { xs: "12px auto", lg: "0" },
            color: "#221E30",
            fontSize: { xs: "30px", lg: "40px" },
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "center" },
            margin: { xs: "2px auto", lg: "0" },
            color: "#221E30",
            fontSize: "16px",
          }}
        >
          Here is a few images from our events and conferences.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "75%", lg: "50%" },
            margin: "21px auto",
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
      <Grid container spacing={2}>
        {paginatedImages.map((image, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{ margin: "12px" }}
          >
            <img
              src={image.original}
              alt={`Image ${startIndex + index + 1}`}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => handleOpen(image)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={Math.ceil(images.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={{ margin: "50px auto", display: "flex", justifyContent: "center" }}
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Paper>
            <img
              src={selectedImage ? selectedImage.original : ""}
              alt="Zoomed Image"
              style={{ maxWidth: "100%", maxHeight: "90vh" }}
            />
            <IconButton onClick={handleClose}>Close</IconButton>
          </Paper>
        </Box>
      </Modal>
      <Footer />
    </Box>
  );
};

export default Events;
