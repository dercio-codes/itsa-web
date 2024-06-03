import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";
import { blogPosts } from "../blog";
import { Navbar } from "..";

const BlogPost = () => {
  const router = useRouter();
  const { title } = router.query;

  const article = blogPosts.find((a) => a.title === title);

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
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body1">{article.content}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

const ArticleList = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          ITSA Blog
        </Typography>
        <Grid container spacing={2}>
          {blogPosts.map((article, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={0} sm={0} md={6} />
              <Grid item xs={12} sm={6} md={6}>
                <Link
                  href={`/blog/${article.title.split(" ").join("-").toLocaleLowerCase()}`}
                  passHref
                >
                  <Card component="a" sx={{ height: "100%" }}>
                    <CardActionArea sx={{ height: "100%" }}>
                      <CardContent>
                        <Typography variant="h6">{article.title}</Typography>
                        <Typography variant="p">
                          {article.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default ArticleList;
