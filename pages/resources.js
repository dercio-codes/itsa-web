import React, { useState } from "react";
import { Modal, Paper, IconButton, Pagination, Avatar } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Navbar, Footer } from ".";
import Link from "next/link";

const Resources = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

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

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResources = resources.slice(startIndex, endIndex);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          height: "250px",
          backgroundImage:
            "url('https://img.freepik.com/free-photo/young-student-learning-library_23-2149215394.jpg')",
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
          Resources
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "center" },
            margin: { xs: "2px auto", lg: "0" },
            color: "#221E30",
            fontSize: "16px",
          }}
        >
          Here is a few resources to help you become a better developer.
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
      <Box sx={{ padding: "21px", display: "flex", justifyContent: "center" }}>
        <Grid container>
          {paginatedResources.map((resource, index) => (
            <Grid
              item
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2.1}
              sx={{
                margin: "12px auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                src={resource.icon}
                sx={{ height: "50px", width: "50px", margin: "12px auto" }}
              />
              <Link href={resource.url}>{resource.name}</Link>
              <Typography sx={{ fontSize: "10px", textAlign: "center" }}>
                {resource.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Pagination
        count={Math.ceil(resources.length / itemsPerPage)}
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

export default Resources;

const resources = [
  {
    name: "Codecademy",
    url: "https://www.codecademy.com/",
    icon: "https://www.codecademy.com/favicon.ico",
    description: "Interactive coding tutorials for beginners",
  },
  {
    name: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/",
    icon: "https://www.freecodecamp.org/favicon.ico",
    description: "Open-source community that helps you learn to code",
  },
  {
    name: "Coursera",
    url: "https://www.coursera.org/",
    icon: "https://www.coursera.org/favicon.ico",
    description: "Online courses from top universities and companies",
  },
  {
    name: "edX",
    url: "https://www.edx.org/",
    icon: "https://www.edx.org/favicon.ico",
    description: "Free online courses from the world's best universities",
  },
  {
    name: "Udemy",
    url: "https://www.udemy.com/",
    icon: "https://www.udemy.com/favicon.ico",
    description: "Online courses on a wide range of topics",
  },
  {
    name: "Pluralsight",
    url: "https://www.pluralsight.com/",
    icon: "https://www.pluralsight.com/favicon.ico",
    description: "Online training for tech and creative professionals",
  },
  {
    name: "Udacity",
    url: "https://www.udacity.com/",
    icon: "https://www.udacity.com/favicon.ico",
    description: "Online courses and nanodegrees",
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org/",
    icon: "https://www.khanacademy.org/favicon.ico",
    description: "Free online courses, lessons, and practice",
  },
  {
    name: "MIT OpenCourseWare",
    url: "https://ocw.mit.edu/",
    icon: "https://ocw.mit.edu/favicon.ico",
    description: "Free online course materials from MIT",
  },
  {
    name: "Harvard Online Courses",
    url: "https://online-learning.harvard.edu/",
    icon: "https://online-learning.harvard.edu/favicon.ico",
    description: "Free online courses from Harvard University",
  },
  {
    name: "Stanford Online",
    url: "https://online.stanford.edu/",
    icon: "https://online.stanford.edu/favicon.ico",
    description: "Free online courses from Stanford University",
  },
  {
    name: "Codecombat",
    url: "https://codecombat.com/",
    icon: "https://codecombat.com/favicon.ico",
    description: "Game-based coding lessons for students",
  },
  {
    name: "Codewars",
    url: "https://www.codewars.com/",
    icon: "https://www.codewars.com/favicon.ico",
    description: "Improve your coding skills by training with others",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/",
    icon: "https://www.hackerrank.com/favicon.ico",
    description: "Practice coding, prepare for interviews, and get hired",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/",
    icon: "https://leetcode.com/favicon.ico",
    description: "Practice coding interview questions",
  },
  {
    name: "Exercism",
    url: "https://exercism.io/",
    icon: "https://exercism.io/favicon.ico",
    description: "Solve programming exercises and get feedback",
  },
  {
    name: "Codesignal",
    url: "https://codesignal.com/",
    icon: "https://codesignal.com/favicon.ico",
    description: "Practice coding and get hired",
  },
  {
    name: "Coderbyte",
    url: "https://coderbyte.com/",
    icon: "https://coderbyte.com/favicon.ico",
    description: "Practice coding and get hired",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/",
    icon: "https://codepen.io/favicon.ico",
    description: "Online code editor for front-end web development",
  },
  {
    name: "JSFiddle",
    url: "https://jsfiddle.net/",
    icon: "https://jsfiddle.net/favicon.ico",
    description: "Online code editor for testing HTML, CSS, and JavaScript",
  },
  {
    name: "Repl.it",
    url: "https://repl.it/",
    icon: "https://repl.it/favicon.ico",
    description: "Online code editor and compiler",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "https://github.com/favicon.ico",
    description: "Hosting service for version control and collaboration",
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/",
    icon: "https://gitlab.com/favicon.ico",
    description: "Open-source software for version control and collaboration",
  },
  {
    name: "Bitbucket",
    url: "https://bitbucket.org/",
    icon: "https://bitbucket.org/favicon.ico",
    description: "Version control and collaboration platform",
  },
  {
    name: "StackOverflow",
    url: "https://stackoverflow.com/",
    icon: "https://stackoverflow.com/favicon.ico",
    description:
      "Question and answer site for professional and enthusiast programmers",
  },
  {
    name: "Quora",
    url: "https://www.quora.com/",
    icon: "https://www.quora.com/favicon.ico",
    description: "Question and answer site for sharing and gaining knowledge",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/",
    icon: "https://www.reddit.com/favicon.ico",
    description:
      "Online discussion platform with subreddits for various topics",
  },
  {
    name: "Hacker News",
    url: "https://news.ycombinator.com/",
    icon: "https://news.ycombinator.com/favicon.ico",
    description:
      "Online community focused on computer science and entrepreneurship",
  },
  {
    name: "Medium",
    url: "https://medium.com/",
    icon: "https://medium.com/favicon.ico",
    description: "Online publishing platform with articles on various topics",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/",
    icon: "https://dev.to/favicon.ico",
    description:
      "Community for software developers to share ideas and help each other grow",
  },
  {
    name: "Hashnode",
    url: "https://hashnode.com/",
    icon: "https://hashnode.com/favicon.ico",
    description:
      "Community for developers to share their stories and connect with each other",
  },
  {
    name: "Slashdot",
    url: "https://slashdot.org/",
    icon: "https://slashdot.org/favicon.ico",
    description: "News and information website for technology enthusiasts",
  },
  {
    name: "Ars Technica",
    url: "https://arstechnica.com/",
    icon: "https://arstechnica.com/favicon.ico",
    description: "News and information website for technology enthusiasts",
  },
  {
    name: "Wired",
    url: "https://www.wired.com/",
    icon: "https://www.wired.com/favicon.ico",
    description:
      "Magazine and website covering technology, business, and culture",
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com/",
    icon: "https://www.theverge.com/favicon.ico",
    description: "News and information website for technology enthusiasts",
  },
  {
    name: "TechCrunch",
    url: "https://techcrunch.com/",
    icon: "https://techcrunch.com/favicon.ico",
    description:
      "News and information website for technology startups and entrepreneurs",
  },
  {
    name: "Engadget",
    url: "https://www.engadget.com/",
    icon: "https://www.engadget.com/favicon.ico",
    description: "News and information website for consumer electronics",
  },
  {
    name: "CNET",
    url: "https://www.cnet.com/",
    icon: "https://www.cnet.com/favicon.ico",
    description: "News and information website for consumer electronics",
  },
  {
    name: "Gizmodo",
    url: "https://gizmodo.com/",
    icon: "https://gizmodo.com/favicon.ico",
    description:
      "News and information website for consumer electronics and technology",
  },
  {
    name: "Lifehacker",
    url: "https://lifehacker.com/",
    icon: "https://lifehacker.com/favicon.ico",
    description: "Website with tips and tricks for productivity and life hacks",
  },
  {
    name: "Mashable",
    url: "https://mashable.com/",
    icon: "https://mashable.com/favicon.ico",
    description:
      "News and information website for technology, entertainment, and culture",
  },
  {
    name: "The Next Web",
    url: "https://thenextweb.com/",
    icon: "https://thenextweb.com/favicon.ico",
    description:
      "News and information website for technology startups and entrepreneurs",
  },
  {
    name: "Techradar",
    url: "https://www.techradar.com/",
    icon: "https://www.techradar.com/favicon.ico",
    description:
      "News and information website for consumer electronics and technology",
  },
  {
    name: "Pocket",
    url: "https://getpocket.com/",
    icon: "https://getpocket.com/favicon.ico",
    description:
      "App for saving articles, videos, and websites for later reading",
  },
  {
    name: "Feedly",
    url: "https://feedly.com/",
    icon: "https://feedly.com/favicon.ico",
    description: "RSS feed reader for following news and blogs",
  },
  {
    name: "Flipboard",
    url: "https://flipboard.com/",
    icon: "https://flipboard.com/favicon.ico",
    description: "News aggregator and social network",
  },
  {
    name: "Inoreader",
    url: "https://www.inoreader.com/",
    icon: "https://www.inoreader.com/favicon.ico",
    description: "RSS feed reader for following news and blogs",
  },
  {
    name: "Digg",
    url: "https://digg.com/",
    icon: "https://digg.com/favicon.ico",
    description: "News aggregator and social network",
  },
  {
    name: "Product Hunt",
    url: "https://www.producthunt.com/",
    icon: "https://www.producthunt.com/favicon.ico",
    description: "Website for discovering new products and startups",
  },
  {
    name: "Betalist",
    url: "https://betalist.com/",
    icon: "https://betalist.com/favicon.ico",
    description: "Website for discovering new startups and products",
  },
  {
    name: "Kickstarter",
    url: "https://www.kickstarter.com/",
    icon: "https://www.kickstarter.com/favicon.ico",
    description: "Crowdfunding platform for creative projects",
  },
  {
    name: "Indiegogo",
    url: "https://www.indiegogo.com/",
    icon: "https://www.indiegogo.com/favicon.ico",
    description: "Crowdfunding platform for innovative ideas and products",
  },
  {
    name: "Patreon",
    url: "https://www.patreon.com/",
    icon: "https://www.patreon.com/favicon.ico",
    description: "Membership platform for creators to get paid by their fans",
  },
  {
    name: "Gumroad",
    url: "https://gumroad.com/",
    icon: "https://gumroad.com/favicon.ico",
    description: "Platform for creators to sell digital products and services",
  },
  {
    name: "Etsy",
    url: "https://www.etsy.com/",
    icon: "https://www.etsy.com/favicon.ico",
    description: "Marketplace for handmade and vintage items",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/",
    icon: "https://www.behance.net/favicon.ico",
    description: "Online platform for showcasing creative work",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/",
    icon: "https://dribbble.com/favicon.ico",
    description: "Community for designers to share their work and get feedback",
  },
  {
    name: "Awwwards",
    url: "https://www.awwwards.com/",
    icon: "https://www.awwwards.com/favicon.ico",
    description: "Website awards for design, creativity, and innovation",
  },
  {
    name: "CSS Design Awards",
    url: "https://www.cssdesignawards.com/",
    icon: "https://www.cssdesignawards.com/favicon.ico",
    description: "Awards for web design and development",
  },
  {
    name: "FWA",
    url: "https://thefwa.com/",
    icon: "https://thefwa.com/favicon.ico",
    description: "Awards for innovative websites and digital projects",
  },
  {
    name: "Siteinspire",
    url: "https://www.siteinspire.com/",
    icon: "https://www.siteinspire.com/favicon.ico",
    description: "Gallery of inspiring websites",
  },
  {
    name: "Webdesigner Depot",
    url: "https://www.webdesignerdepot.com/",
    icon: "https://www.webdesignerdepot.com/favicon.ico",
    description: "News and resources for web designers",
  },
  {
    name: "Smashing Magazine",
    url: "https://www.smashingmagazine.com/",
    icon: "https://www.smashingmagazine.com/favicon.ico",
    description: "Online magazine for web designers and developers",
  },
  {
    name: "A List Apart",
    url: "https://alistapart.com/",
    icon: "https://alistapart.com/favicon.ico",
    description:
      "A List Apart explores the design, development, and meaning of web content, with a special focus on web standards and best practices.",
  },
  {
    name: "CSS-Tricks",
    url: "https://css-tricks.com/",
    icon: "https://css-tricks.com/favicon.ico",
    description:
      "CSS-Tricks is a website about front-end web development, focusing on CSS, HTML, JavaScript, and related technologies.",
  },
  {
    name: "Codrops",
    url: "https://tympanus.net/codrops/",
    icon: "https://tympanus.net/codrops/favicon.ico",
    description:
      "Codrops is a web design and development blog that publishes articles and tutorials about the latest web trends, techniques, and technologies.",
  },
  {
    name: "Sitepoint",
    url: "https://www.sitepoint.com/",
    icon: "https://www.sitepoint.com/favicon.ico",
    description:
      "SitePoint is a hub for web developers to share their passion for building incredible Internet things.",
  },
  {
    name: "Treehouse",
    url: "https://teamtreehouse.com/",
    icon: "https://teamtreehouse.com/favicon.ico",
    description:
      "Treehouse offers online courses in web design, web development, mobile development, and game development taught by a team of expert teachers.",
  },
  {
    name: "Lynda",
    url: "https://www.lynda.com/",
    icon: "https://www.lynda.com/favicon.ico",
    description:
      "Lynda.com is an online learning platform that offers thousands of video courses in software, creative, and business skills.",
  },
];
