import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Mailchimp from "react-mailchimp-form";

export const Contact = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const queryValues = Object.values(query);

    if (queryValues.includes("")) {
      toast.warning("Please fill in all fields.", {
        theme: "dark",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
      setIsProcessing(false);
    } else {
      axios
        .post("/api/contact", query)
        .then((res) => {
          if (res.data.message == "MAIL_SENT") {
            toast.success("Email Succesfully sent to Misguided.", {
              // theme: "dark",
              position: "top-right",
              icon: "🚀",
              autoClose: 5000,
              hideProgressBar: false,
            });

            setquery({
              name: "",
              tel: "",
              email: "",
              query: "",
            });

            setIsProcessing(false);
          } else {
            toast.error("Error query to Atomus.", {
              theme: "dark",
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
            });

            setIsProcessing(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsProcessing(false);
        });
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        height: "100vh",
        padding: "12rem 0 0 0",
        margin: { lg: "100px 0 0 0" },
        zIndex: "-5",
        // background: "white",
      }}
    >
      <Grid container>
        <Grid
          id="about"
          item
          xs={12}
          md={6}
          sx={{
            height: "auto",
            background: "white",
            border: "1px solid rgba(1,1,1,.1) ",
            padding: { xs: "40px 60px", lg: "150px" },
            margin: "0 0 0",
          }}
        >
          <h1 className="carter-one">About Us</h1>

          <p className="text">
            Atomus Developers is a digital business solutions company that aims
            to bridge the gap between access, quality, and affordability for
            South Africa and other African countries. Our mission is to bring
            innovative and cutting-edge digital solutions that address the
            challenges posed by the 4th industrial revolution. With a deep
            understanding of the local market, we are poised to provide
            businesses with the necessary tools and expertise to compete in a
            rapidly evolving digital landscape. Our goal is to help our clients
            overcome the barriers to success and enable them to reach their full
            potential. At Atomus Developers, we believe that every business
            deserves a chance to thrive, and we are committed to making that a
            reality for our customers. Atomus Developers exists to provide
            impactful digital product design services that help our clients
            achieve their goals in a constantly evolving digital landscape. We
            solve the problem of businesses needing to stand out in an
            increasingly competitive online space by delivering exceptional
            digital experiences that not only attract but also engage their
            target audience. Our services help clients to enhance their online
            presence, optimize their websites for search engines, and develop
            web and mobile applications that meet the needs of their users.
            Ultimately, we empower our clients to succeed in the digital world.
          </p>
          <div className="skills">
            <span>Programming</span>
            <span>Figma & Photoshop </span>
            <span>Hosting</span>
          </div>
          <div className="skills">
            <span>Web Design</span>
            <span>Marketing</span>
            <span>SEO</span>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "auto",
            background: "rgba(255,255,255,.5)",
            padding: "32px",
            margin: "21px 0 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url('/about-us-option-1.gif')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "500px",
              width: "500px",
              margin: "auto auto",
            }}
          ></Box>
        </Grid>
      {/* <Grid item xs={12}>
          <video
            style={{ width: "100%", height: "100%", margin: "21px 0" }}
            autoPlay
            loop
            controls
          >
            <source
              src={"https://www.atomusdev.co.za/Atomus%20Dev.mp4"}
              type="video/mp4"
            />
          </video>
        </Grid> */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(255,255,255,0.3)",
            margin: "100px 0 50px 0",
          }}
        >
          <Typography
            component="h1"
            className="carter-one"
            sx={{
              fontSize: "42px",
              fontWeight: "600",
              textAlign: "center",
              color: "#142531ff",
              margin: "0 0 0px 0 ",
            }}
          >
            {" "}
            Get in Touch.{" "}
          </Typography>
          <Typography
            component="h1"
            className="recursive"
            sx={{
              fontSize: "18px",
              fontWeight: "300",
              textAlign: "center",
              width: "80%",
              color: "#142531ff",
              margin: "0px auto ",
            }}
          >
            {" "}
            Send in a query and we will return with a response.{" "}
          </Typography>
          <Box
            sx={{
              height: "350px",
              width: "350px",
              backgroundImage: 'url("/contact-outline.gif")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              cursor: "pointer",
              backgroundRepeat: "no-repeat",
              transition: "800ms",
              margin: "0 auto",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255,255,255,0.3)",
            margin: "0 0 70px 0",
          }}
        >
          <Typography
            component="h1"
            className="carter-one"
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              textAlign: "center",
              color: "#142531ff",
              margin: "0 0 0px 0 ",
            }}
          >
            {" "}
            Fill in the form below.{" "}
          </Typography>
          <TextField
            variant="standard"
            name="name"
            onChange={handleFieldChange}
            label="Name"
            sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
          />
          <TextField
            variant="standard"
            label="Tel"
            type="tel"
            name="tel"
            onChange={handleFieldChange}
            sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
          />
          <TextField
            variant="standard"
            label="Email"
            name="email"
            onChange={handleFieldChange}
            type="email"
            sx={{ width: "75%", margin: "21px 0", ...inputStyles }}
          />
          <TextField
            variant="standard"
            label="Query"
            multiline={true}
            name="query"
            onChange={handleFieldChange}
            type={"textarea"}
            placeholder={"Enter your query here..."}
            rows={2}
            sx={{
              width: "75%",
              margin: "21px 0",
              background: "transparent",
              ...inputStyles,
            }}
          />
          <Button
            onClick={handleSubmit}
            className="button-89"
            sx={{ background: "transparent", width: "75%" }}
            type="button"
          >
            {isProcessing ? "Sending" : "Submit"}
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            marginTop: "42px",
            // position: "sticky",
            // bottom: "0",
            // overflow: "auto",
            // height: "50vh",
          }}
        >
          <Box
            sx={{
              height: { xs: "70vh" },
              width: { xs: "100%", lg: "100%" },
              margin: "0 auto",
              // // // // bottom: "12px",
              // // // // position: "absolute",
              // // // // transform: { xs: "translateY(0vh)", lg: "translateY(6vh)" },
              zIndex: "999",
              // borderRadius: "28px",
              background: "#142531ff",
              padding: "2.5rem",
              color: "#eee",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // background: "rgba(1,1,1,.9)",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", lg: "50%" },
                margin: "0 auto",
              }}
            >
              <Typography
                component="h3"
                className="carter-one"
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  // textAlign: "center",
                }}
              >
                {" "}
                Join Our Mailing List?{" "}
              </Typography>
              <Typography
                component="h3"
                className="recursive"
                sx={{
                  fontSize: "21px",
                  fontWeight: "400",
                  // textAlign: "center",
                }}
              >
                {" "}
                Never miss out on upcoming updates and specials{" "}
              </Typography>
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  margin: "32px auto",
                  backgroundImage: 'url("/join.gif")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <Box id="contact-mail">
                <Mailchimp
                  action="https://gmail.us21.list-manage.com/subscribe/post?u=1da28cc5db60fdae621ba0174&amp;id=3b386a0117&amp;f_id=00ddb7e1f0"
                  fields={[
                    {
                      name: "EMAIL",
                      placeholder: "Email",
                      type: "email",
                      required: true,
                    },
                  ]}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

          {/* <iframe
        id="newletter"
        style={{ width: "100%", border: "none" }}
        src="https://mailchi.mp/b6eee456fbb4/boost-your-online-presence-with-our-exclusive-web-design-and-development-deal"
      ></iframe> */}
      <Box
        sx={{
          background: "#8daae5ff",
          minHeight: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: { xs: "80%", md: "75%" },
            margin: "32px 0 ",
          }}
        >
          <Link href="mailto:atomusdev@gmail.com">
            <a>
              <EmailIcon
                sx={{ width: "21px", height: "21px", background: "" }}
              />
            </a>
          </Link>
          <Link href="tel:0677551017">
            <a>
              <CallIcon
                sx={{ width: "21px", height: "21px", background: "" }}
              />
            </a>
          </Link>
          <Link href="">
            <a>
              <LinkedInIcon
                sx={{ width: "21px", height: "21px", background: "" }}
              />
            </a>
          </Link>
          <Link href="https://www.twitter.com/atomusdev">
            <a>
              <TwitterIcon
                sx={{ width: "21px", height: "21px", background: "" }}
              />
            </a>
          </Link>
        </Box>
        <Typography
          component="h3"
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            margin: "21px 0",
            // textAlign: "center",
          }}
        >
          <Link href="https://www.atomusdev.co.za">
            <a>Copyright 2023, Atomus Developers (C)</a>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

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
