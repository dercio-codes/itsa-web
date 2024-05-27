import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Breadcrumbs,
  Link,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { ContactForm, Footer, Navbar } from ".";
import { useState, useEffect } from "react";

const News = () => {
  // Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of news items per page

  // Loader state
  const [showLoader, setShowLoader] = useState(true);

  // Calculate pagination
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNewsItems = newsItems.slice(startIndex, endIndex);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          // background: "red",
          height: "250px",
          backgroundImage: "url('/cybersecurity.jpg')",
          // "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL80PyrmYHeDVuWQSBgHmdmX1ewr_KsdOXLazHvaCEEg&s')",
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
      <Box sx={{ p: { xs: "21px 30px", lg: "21px 60px" } }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography color="textPrimary">News</Typography>
        </Breadcrumbs>
      </Box>
      {showLoader && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {!showLoader && (
        <Box sx={{ p: "21px" }}>
          <Grid container>
            {paginatedNewsItems.map((newsItem, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={5.5}
                md={4}
                lg={2.5}
                sx={{ margin: { xs: "12px 21px", lg: "12px 21px" } }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    sx={{ height: "140px" }}
                    image={newsItem.image}
                    alt={newsItem.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      noWrap={false}
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {newsItem.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      noWrap={false}
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {newsItem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={Math.ceil(newsItems.length / itemsPerPage)}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default News;

const newsItems = [
  {
    title: "UFS Tech Faculty Hosts Annual Innovation Expo",
    description:
      "The UFS Tech Faculty is excited to announce its annual Innovation Expo, showcasing the latest advancements and projects from our talented students and faculty members.",
    image: "https://techspo.co/wp-content/uploads/2018/12/who-attends.jpg",
  },
  {
    title: "Professor Smith Awarded Grant for AI Research",
    description:
      "Professor Jane Smith from the UFS Tech Faculty has been awarded a prestigious grant to further her research in artificial intelligence and its applications in healthcare.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uJGipSoPQsjh3eM1vYa4Q-_fCNqW6r0fXiHXkc-LvQ&s",
  },
  {
    title: "UFS Tech Students Win National Coding Competition",
    description:
      "A team of UFS Tech students has won the national coding competition, demonstrating their exceptional skills and problem-solving abilities.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg",
  },
  {
    title: "New Robotics Lab Opens at UFS Tech Faculty",
    description:
      "The UFS Tech Faculty is proud to announce the opening of its state-of-the-art Robotics Lab, providing students with hands-on experience in the field of robotics and automation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmBSu6fP1t0qyIf37Sk0xv_ELmvqcW910zRoebCWZWw&s",
  },
  {
    title: "UFS Tech Faculty Partners with Industry Leaders",
    description:
      "The UFS Tech Faculty has partnered with several industry leaders to provide students with internship opportunities and real-world experience in their respective fields.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsnzK_pr68dGQWGzM1V52HKav8fyUFEjqM-7pcUgJwQ&s",
  },
  {
    title: "Student Hackathon Held at UFS Tech Faculty",
    description:
      "The UFS Tech Faculty hosted a successful student hackathon, where teams competed to develop innovative solutions to real-world problems using technology.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAFhtfbxxiAQbstTo7uoG8eLzjukuxOH9plLU8-sKR3Q&s",
  },
  {
    title: "UFS Tech Faculty Launches New Cybersecurity Program",
    description:
      "The UFS Tech Faculty is excited to announce the launch of its new Cybersecurity program, addressing the growing demand for skilled professionals in this critical field.",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/642445004586b4330e81b689//960x0.jpg?height=406&width=711&fit=bounds",
  },
  {
    title: "Professor Jones Publishes Groundbreaking Research Paper",
    description:
      "Professor Michael Jones from the UFS Tech Faculty has published a groundbreaking research paper in a prestigious journal, contributing to the advancement of knowledge in his field.",
    image:
      "https://image-prod.iol.co.za/16x9/800/UFS-researchers-Lucas-Erasmus-and-Prof-Hendrik-Swart-with-the-equipment-used-for-the-ground-breaking-research-PHOTO-Supplied?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/943e234b-9723-57f1-b903-cd759b3a34a1",
  },
  {
    title: "UFS Tech Students Participate in International Tech Conference",
    description:
      "A group of UFS Tech students had the opportunity to attend and present their projects at an international technology conference, gaining valuable experience and exposure.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpJ8aZ7pSKAfrLYn4G2fzM0qncImVVkWek-xTM3w29A&s",
  },
  {
    title: "New 3D Printing Lab Opens at UFS Tech Faculty",
    description:
      "The UFS Tech Faculty is excited to announce the opening of its new 3D Printing Lab, providing students with access to cutting-edge technology and enabling them to bring their designs to life.",
    image:
      "https://www.ufs.ac.za/images/default-source/news-images/two-of-the-master-s-students-han%C3%A9-pieters-(left)-and-ghita-bruwer-with-the-3d-printer.jpg?sfvrsn=b43d4520_1",
  },
  {
    title: "UFS Tech Faculty Hosts Coding Workshops for Local Schools",
    description:
      "The UFS Tech Faculty is giving back to the community by hosting coding workshops for local school students, inspiring the next generation of tech enthusiasts.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3eIb9mmD1uRhO2Dca-6oAS0-knKd6ZZHegPLa4NUb-5yyFWG3fFnFmD5CC2_JPduSnw&usqp=CAU",
  },
  {
    title: "Professor Williams Receives Teaching Excellence Award",
    description:
      "Professor Sarah Williams from the UFS Tech Faculty has been awarded the prestigious Teaching Excellence Award in recognition of her outstanding contributions to student learning and success.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGOjjBpbeeiDvmhHh_s4yAs5v7D4adNZNL_BJRAe83Q&s",
  },
];
