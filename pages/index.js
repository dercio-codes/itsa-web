import { Box, Grid, Typography, Stack, Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ background: "" }}>
      <Navbar />

      <Box sx={{ height: "100vh", backgroundImage: "url('/banner.gif')" }}>
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
              // className="header-font"
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
            <Button> JOIN</Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              background:'red'
            }}
          >
            <Typography
              className="header-font"
              sx={{
                textAlign: { xs: "center", lg: "left" },
                margin: "0 auto",
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
                margin: "0 auto",
                // color: "white",
                fontSize: "20px",
              }}
            >
              We are looking for you{" "}
            </Typography>
            <Typography
              // className="header-font"
              sx={{
                textAlign: { xs: "center", lg: "left" },
                fontWeight: "300",
                margin: { xs: "12px auto", lg: "12px 0" },
                // color: "white",
                fontSize: { xs: "20px", lg: "16px" },
                width: { xs: "80%" },
              }}
            >
              ITSA brings you closer to your field where you feel a sense of
              belonging on campus.
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
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
          sx={{ background: "", height: "", padding: "21px" }}
          // xs={12}
          xs={4}
        >
          <Box
            sx={{
              height: { xs: "75px", lg: "100px" },
              width: { xs: "150px", lg: "250px" },
              backgroundImage:
                "url('https://www.ufs.ac.za/images/librariesprovider5/ufs_redesign_2021/ufsheaderlogo.svg?sfvrsn=15b37820_2')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              margin: { xs: "0 auto", lg: "0 0 0 21px" },
            }}
          />
        </Grid>
        <Grid
          item
          sx={{
            background: "",
            padding: "0 21px",
            display: "flex",
            justifyContent: { xs: "flex-end", lg: "flex-end" },
            alignItems: "center",
          }}
          // xs={12}
          xs={8}
        >
          <Stack
            sx={{
              width: { xs: "100%", lg: "70%" },
              padding: "21px",
              display: "flex",
              justifyContent: { xs: "flex-end", lg: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: " space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ display: { xs: "none", lg: "flex" } }}>
                Home
              </Typography>
              <Typography sx={{ display: { xs: "none", lg: "flex" } }}>
                Contact ICT
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: " space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  sx={{ width: { xs: "200px", lg: "300px" }, height: "70px" }}
                />
                <Button>Search</Button>
              </Box>
            </Box>
            <Box
              sx={{
                height: { xs: "auto", lg: "50%" },
                color: "red",
                display: { xs: "none", lg: "block" },
              }}
            >
              <Typography
                sx={{
                  width: { xs: "100%", lg: "60%" },
                  fontSize: "14px",
                  textDecoration: "italic",
                  margin: "8px 0",
                }}
              >
                Inspiring excellence, transforming lives through quality, impact
                and care.
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ height: "5vh", background: "#b7eff6" }}></Grid>
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
          <Box sx={{ width: "180px", height: "75px", background: "yellow" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "75%",
            }}
          >
            <Typography>Home</Typography>
            <Typography>Events</Typography>
            <Typography>FAQ</Typography>
            <Typography>About Us</Typography>
            <Typography>Contact</Typography>
            <Button>Search</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
