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
import { Navbar } from ".";

// const BlogPost = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const articles = [
//     {
//       slug: "article-1",
//       title: "Article 1",
//       content: "This is the content of Article 1.",
//     },
//     {
//       slug: "article-2",
//       title: "Article 2",
//       content: "This is the content of Article 2.",
//     },
//     {
//       slug: "article-3",
//       title: "Article 3",
//       content: "This is the content of Article 3.",
//     },
//   ];

//   const article = articles.find((a) => a.slug === slug);

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

export const blogPosts = [
  {
    title: "5 Tips for Tech Students to Succeed in Their Studies",
    description:
      "Discover practical strategies to excel academically and develop essential skills for a career in technology.",
    image: "https://example.com/tips-for-tech-students.jpg",
  },
  {
    title: "Internship Opportunities for Tech Students: A Guide",
    description:
      "Learn how to find, apply, and make the most of internships to gain real-world experience and boost your career prospects.",
    image: "https://example.com/internship-opportunities.jpg",
  },
  {
    title: "Networking for Tech Students: Building Connections in the Industry",
    description:
      "Explore the importance of networking and practical ways for tech students to build relationships with professionals and peers.",
    image: "https://example.com/networking-for-tech-students.jpg",
  },
  {
    title: "Tech Conferences and Events Every Student Should Attend",
    description:
      "Discover the top tech conferences and events that offer learning, networking, and career opportunities for students.",
    image: "https://example.com/tech-conferences.jpg",
  },
  {
    title: "Scholarships and Funding Opportunities for Tech Students",
    description:
      "Find out about various scholarships, grants, and financial aid options available to support tech students in their education.",
    image: "https://example.com/scholarships-for-tech-students.jpg",
  },
  {
    title:
      "Balancing Academics and Extracurricular Activities as a Tech Student",
    description:
      "Learn how to effectively manage your time and participate in extracurricular activities to enhance your overall experience as a tech student.",
    image: "https://example.com/balancing-academics-extracurriculars.jpg",
  },
  {
    title:
      "Tech Startups Hiring Students: Opportunities for Hands-On Experience",
    description:
      "Explore the benefits of working at tech startups and how students can find and secure positions to gain practical experience.",
    image: "https://example.com/tech-startups-hiring-students.jpg",
  },
  {
    title: "Developing a Portfolio as a Tech Student: Showcasing Your Skills",
    description:
      "Discover the importance of creating a portfolio and learn tips on how to effectively showcase your projects and skills to potential employers.",
    image: "https://example.com/developing-portfolio-as-tech-student.jpg",
  },
  {
    title: "Tech Meetups and Study Groups for Students",
    description:
      "Learn about the benefits of participating in tech meetups and study groups, and how to find and join these communities as a student.",
    image: "https://example.com/tech-meetups-study-groups.jpg",
  },
  {
    title: "Mentorship Programs for Tech Students: Finding the Right Mentor",
    description:
      "Explore the advantages of having a mentor and learn how to find and build a mentorship relationship as a tech student.",
    image: "https://example.com/mentorship-programs-for-tech-students.jpg",
  },
  {
    title: "Coding Challenges and Hackathons for Tech Students",
    description:
      "Discover the benefits of participating in coding challenges and hackathons, and how to find and prepare for these events as a tech student.",
    image: "https://example.com/coding-challenges-hackathons.jpg",
  },
  {
    title:
      "Tech Certifications and Courses for Students to Enhance Their Skills",
    description:
      "Learn about the most valuable tech certifications and courses that can help students improve their skills and stand out in the job market.",
    image: "https://example.com/tech-certifications-courses.jpg",
  },
  {
    title: "Work-Study Programs for Tech Students: Earning While Learning",
    description:
      "Explore the opportunities available through work-study programs and how tech students can find and participate in these programs.",
    image: "https://example.com/work-study-programs-for-tech-students.jpg",
  },
  {
    title: "Tech Entrepreneurship for Students: Starting Your Own Business",
    description:
      "Learn about the benefits and challenges of tech entrepreneurship, and how students can explore starting their own businesses.",
    image: "https://example.com/tech-entrepreneurship-for-students.jpg",
  },
  {
    title:
      "Diversity and Inclusion in Tech: Supporting Underrepresented Students",
    description:
      "Discover the importance of diversity and inclusion in the tech industry and how students from underrepresented groups can find support and resources.",
    image: "https://example.com/diversity-inclusion-in-tech.jpg",
  },
  //   {
  //     title: "9 Unique Ways to Use Technology in the Classroom",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom",
  //   },
  //   {
  //     title: "7 Reasons Why Students Need Technology in the Classroom",
  //     url: "https://explorance.com/blog/7-reasons-students-need-technology-classroom/",
  //   },
  //   {
  //     title: "How Using Technology in Teaching Affects Classrooms",
  //     url: "https://www.gcu.edu/blog/teaching-school-administration/how-using-technology-teaching-affects-classrooms",
  //   },
  //   {
  //     title: "Gamified Learning",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#1",
  //   },
  //   {
  //     title: "Digital Field Trips",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#2",
  //   },
  //   {
  //     title: "Integrate Social Media",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#3",
  //   },
  //   {
  //     title: "Creating Digital Content",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#5",
  //   },
  //   {
  //     title: "Using a Classroom Calendar",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#6",
  //   },
  //   {
  //     title: "Review and Critique Webpages",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#7",
  //   },
  //   {
  //     title: "Video/Multimedia Lessons and Presentations",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#8",
  //   },
  //   {
  //     title: "Online Activities for Students Who Finish Work Early",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom#9",
  //   },
  //   {
  //     title: "Why Students Benefit from Using Technology in the Classroom",
  //     url: "https://www.goguardian.com/blog/9-unique-ways-to-use-technology-in-the-classroom",
  //   },
  //   {
  //     title: "Distill Actionable Insights from Student Comments with AI",
  //     url: "https://explorance.com/blog/7-reasons-students-need-technology-classroom#1",
  //   },
  //   {
  //     title: "Access to Information and Resources",
  //     url: "https://explorance.com/blog/7-reasons-students-need-technology-classroom#2",
  //   },
  //   {
  //     title: "Supports Different Types of Learning Styles",
  //     url: "https://explorance.com/blog/7-reasons-students-need-technology-classroom#5",
  //   },
  //   {
  //     title: "Teaches Students How to be Responsible Online",
  //     url: "https://explorance.com/blog/7-reasons-students-need-technology-classroom#6",
  //   },
];
