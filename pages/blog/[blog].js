import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Breadcrumbs,
  Box,
} from "@mui/material";
import { blogPosts } from "../blog";
import { Navbar } from "..";

// const BlogPost = () => {
//   const router = useRouter();
//   const { title } = router.query;

//   const article = blogPosts.find((a) => a.title === title);

//   if (!article) {
//     return (
//       <Container maxWidth="md" sx={{ py: 6 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Loading...
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md" sx={{ py: 6 }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h4" gutterBottom>
//             {article.title}
//           </Typography>
//           <Typography variant="body1">{article.content}</Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

const ArticleList = () => {
  const router = useRouter();
  const { blog } = router.query;
  // (a) => a.title.split(" ").join("-").toLowerCase()
  const article = blogPosts.find(
    (a) => a.title.split(" ").join("-").toLowerCase() === blog,
  );
  // const article = blogPosts.map(
  //   (a) => a.title.split(" ").join("-").toLowerCase() === blog,
  // );

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Loading...
        </Typography>
      </Container>
    );
  }
  return (
    <Box>
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
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box sx={{ p: { xs: "21px 30px", lg: "21px 60px" } }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
             <Link color="inherit" href="/">
              Blog
            </Link>
            <Link color="inherit" href={blog}>
              <Typography color="textPrimary">{blog}</Typography>
            </Link>
          </Breadcrumbs>
        </Box>
        <Container maxWidth="mlg" sx={{ py: 6 }}>
          <Card elevation={0}>
            <CardContent elevation={0}>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body1">{article.introduction}</Typography>
              <br />
              <br />
              <Box sx={{ display: "flex", marginBottom: "21px" }}>
                <Typography
                  sx={{ width: { lg: "50%", xs: "100%" } }}
                  variant="p"
                >
                  {article.paragraph1.replaceAll("*", "")}
                </Typography>
                <br />
                <br />

                <Typography
                  sx={{ width: { lg: "50%", xs: "100%" } }}
                  variant="p"
                >
                  {article.paragraph2.replaceAll("*", "")}
                </Typography>

                <br />
                <br />
              </Box>
              <Typography variant="p">
                {article.paragraph3.replaceAll("*", "")}
              </Typography>
              <br />
              <br />
              <Typography variant="p">{article.benefits}</Typography>
              <br />
              <br />
              <Typography variant="p">{article.conclusion}</Typography>
            </CardContent>
          </Card>
        </Container>
        <Typography
          sx={{ width: { xs: "100%", margin: "0 auto", textAlign: "center" } }}
          variant="h4"
        >
          More Blog Posts
        </Typography>
        <Grid container spacing={2}>
          {blogPosts.map((article, index) => (
            // <Grid container spacing={2} >
            //   <Grid item xs={0} sm={0} md={6} />
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Link
                href={`/blog/${article.title.split(" ").join("-").toLocaleLowerCase()}`}
                passHref
              >
                <Card component="a" sx={{ height: "100%" }}>
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardContent>
                      <Typography variant="h6">{article.title}</Typography>
                      <Typography variant="p">
                        {article.introduction}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            // </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default ArticleList;
