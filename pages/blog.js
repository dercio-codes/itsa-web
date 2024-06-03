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
                          {article.introduction}
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
    title: "5 Proven Study Techniques for Tech Students",
    introduction:
      "Pursuing a degree in technology requires dedication, passion, and effective study strategies. As a tech student, you're likely juggling a demanding course load, complex concepts, and the pressure to excel in a competitive field. However, with the right study techniques, you can conquer your tech courses and set yourself up for long-term success. In this blog post, we'll explore five proven study methods that have helped countless tech students achieve their academic goals.",
    paragraph1:
      "1. **The Pomodoro Technique**: This time management method is particularly useful for tech students who need to stay focused during intense study sessions. The Pomodoro Technique involves breaking your work into 25-minute intervals, called Pomodoros, separated by short breaks. Set a timer for 25 minutes and focus solely on your study material during this time. Eliminate all distractions and immerse yourself in the content. When the timer goes off, take a 5-minute break to stretch, grab a snack, or clear your mind. After four Pomodoros, take a longer break of 15-30 minutes to recharge.",
    paragraph2:
      "2. **Spaced Repetition**: This study method is based on the principle that information is better retained when it's reviewed at increasing intervals over time. Spaced repetition involves creating flashcards or notes and reviewing them at specific intervals, gradually increasing the time between each review session. Create flashcards or notes for key concepts, formulas, or definitions in your tech courses. Review the flashcards or notes shortly after creating them (e.g., within a few hours or the same day). Review the material again after a day or two, then a week, and gradually increase the time between each review session. Continuously review the flashcards or notes, focusing more on the ones you struggle with.",
    paragraph3:
      "3. **Explaining Concepts to Peers**: Teaching others is one of the best ways to solidify your own understanding of a subject. By explaining tech concepts to your peers, you'll be forced to organize your thoughts, clarify any gaps in your knowledge, and communicate effectively. Form study groups with classmates and take turns explaining concepts to each other. Volunteer to lead a study session or tutor a fellow student who's struggling with a particular topic. Explain concepts to friends or family members who aren't familiar with the subject matter. This will help you identify areas where your understanding is weak and needs further clarification.",
    benefits:
      "The Pomodoro Technique helps you maintain concentration, avoid burnout, and track your progress. Spaced repetition helps cement information in your long-term memory, making it easier to recall and apply during exams or when working on projects. Explaining concepts to others not only helps you learn but also develops your communication skills, which are essential in the tech industry.",
    conclusion:
      "Mastering study techniques is crucial for tech students to excel in their courses and prepare for successful careers. By incorporating the Pomodoro Technique, spaced repetition, explaining concepts to peers, consistent practice, and leveraging online resources into your study routine, you'll be well on your way to conquering your tech courses and setting yourself up for long-term success. Remember, effective studying is a skill that takes time and practice to develop, so be patient with yourself and keep experimenting to find the techniques that work best for you. With dedication and the right strategies, you can unlock your full potential as a tech student and thrive in the dynamic and ever-evolving world of technology.",
  },
  {
    title: "5 Essential Tools for Tech Students",
    introduction:
      "As a tech student, you're likely familiar with the importance of having the right tools for the job. Whether you're working on a project, studying for an exam, or simply trying to stay organized, the right tools can make all the difference. In this blog post, we'll explore five essential tools that every tech student should have in their toolkit.",
    paragraph1:
      "1. **Visual Studio Code**: This popular code editor is a must-have for any tech student. With its extensive plugin library and customizable interface, Visual Studio Code is the perfect tool for coding, debugging, and testing.",
    paragraph2:
      "2. **Git**: This version control system is essential for managing and tracking changes to your code. With Git, you can collaborate with others, keep track of changes, and roll back to previous versions if needed.",
    paragraph3:
      "3. **Trello**: This project management tool is perfect for organizing and prioritizing your tasks. With Trello, you can create boards, lists, and cards to keep track of your projects and stay on top of your work.",
    benefits:
      "Visual Studio Code provides a powerful and customizable coding environment. Git helps you manage and track changes to your code. Trello keeps you organized and on top of your projects.",
    conclusion:
      "Having the right tools can make all the difference for tech students. By incorporating these five essential tools into your workflow, you'll be better equipped to tackle your projects, stay organized, and achieve your goals. Remember, the right tools can help you stay focused, productive, and successful in your tech education.",
  },
  {
    title: "Form Study Techniques in Industrial Design",
    introduction:
      "Form study is a crucial aspect of industrial design, involving the analysis and comprehension of existing designs to inform and improve future designs. In this blog post, we'll explore the key techniques and strategies for conducting form study in the context of industrial design.",
    paragraph1:
      "1. **Visual Language**: Use visual language to conduct form study in the context of Industrial Design, exploring every listed keyword and the combination of them. This involves analyzing the visual elements of a design, such as shape, color, and texture, to understand how they contribute to the overall aesthetic and functionality of the product.",
    paragraph2:
      "2. **Daily Practice**: Think three-dimensionally, and practice applying basic design principles by seeing and comprehending every detail of current designs on the market. This involves regularly studying and analyzing existing designs to identify trends, patterns, and best practices.",
    paragraph3:
      "3. **Design Principles**: Apply basic design principles, such as balance, proportion, and harmony, to analyze and improve existing designs. This involves identifying areas where the design could be improved and proposing alternative solutions.",
    benefits:
      "Form study techniques help designers analyze and improve existing designs, leading to more effective and efficient design solutions. By applying these techniques, designers can create products that are both aesthetically pleasing and functional.",
    conclusion:
      "Form study is a vital part of the design process, allowing designers to analyze and improve existing designs. By applying the techniques and strategies outlined in this blog post, designers can create more effective and efficient design solutions.",
  },
  {
    title: "Form Study Techniques in Horse Racing",
    introduction:
      "Form study is a critical aspect of horse racing, involving the analysis and comprehension of a horse's past performances to predict its future performance. In this blog post, we'll explore the key techniques and strategies for conducting form study in the context of horse racing.",
    paragraph1:
      "1. **Money**: The most important form indicator is money, as it represents the stakes and market value of a horse. Speed is the second most important indicator, as it indicates the point at which a horse is tested.",
    paragraph2:
      "2. **Stakes and Market Value**: The horse that can win the most money or pull off the best value coup is considered the form horse. This involves analyzing the horse's past performances and identifying trends and patterns that can inform its future performance.",
    paragraph3:
      "3. **Form Indicators**: Other important form indicators include the horse's age, sex, and breeding. These factors can influence the horse's performance and should be taken into account when conducting form study.",
    benefits:
      "Form study techniques help horse racing enthusiasts and professionals analyze and predict a horse's future performance. By applying these techniques, they can make more informed decisions about which horses to bet on or which horses to train.",
    conclusion:
      "Form study is a vital part of horse racing, allowing enthusiasts and professionals to analyze and predict a horse's future performance. By applying the techniques and strategies outlined in this blog post, they can make more informed decisions and improve their chances of success.",
  },
  {
    title: "General Form Study Techniques",
    introduction:
      "Form study is a versatile technique that can be applied to various fields, including industrial design, horse racing, and more. In this blog post, we'll explore the general techniques and strategies for conducting form study.",
    paragraph1:
      "1. **SQ3R Method**: This method involves Surveying the material, Questioning what you need to learn, Reading the material while answering questions, Reciting the answers, and Reviewing the material. This method can be applied to any field, including industrial design and horse racing.",
    paragraph2:
      "2. **Visual Analysis**: Use visual analysis to conduct form study, exploring every listed keyword and the combination of them. This involves analyzing the visual elements of a design or performance to understand how they contribute to the overall aesthetic and functionality.",
    paragraph3:
      "3. **Pattern Recognition**: Recognize patterns and trends in the data or designs you are studying. This involves identifying areas where the design or performance could be improved and proposing alternative solutions.",
    benefits:
      "Form study techniques help individuals analyze and improve existing designs or performances. By applying these techniques, they can create more effective and efficient solutions.",
    conclusion:
      "Form study is a versatile technique that can be applied to various fields. By applying the techniques and strategies outlined in this blog post, individuals can analyze and improve existing designs or performances, leading to more effective and efficient solutions.",
  },
];
