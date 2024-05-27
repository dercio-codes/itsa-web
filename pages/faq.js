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

const FAQs = [
  {
    question: "What is the purpose of the Student Association?",
    answer:
      "The Student Association is a student-led organization that aims to represent and serve the interests of all students at our university, providing a platform for social, cultural, and academic engagement.",
  },
  {
    question: "How do I join the Student Association?",
    answer:
      "You can join the Student Association by attending our general meetings, participating in our events, or by contacting our executive board members. Membership is open to all currently enrolled students.",
  },
  {
    question: "What kind of events does the Student Association organize?",
    answer:
      "We organize a wide range of events, including cultural festivals, academic seminars, social gatherings, and community service projects. Our events are designed to cater to diverse interests and promote student engagement.",
  },
  {
    question:
      "How can I get involved in the Student Association's decision-making process?",
    answer:
      "You can attend our general meetings, join one of our committees, or run for an executive board position. We encourage all students to participate and contribute to our decision-making process.",
  },
  {
    question: "What are the benefits of joining the Student Association?",
    answer:
      "By joining the Student Association, you can develop leadership skills, make new friends, and enhance your university experience. You'll also have access to exclusive events, discounts, and resources.",
  },
  {
    question: "How does the Student Association support student welfare?",
    answer:
      "We work closely with the university administration to address student concerns, provide support services, and advocate for student rights. We also organize wellness initiatives and mental health resources.",
  },
  {
    question:
      "Can I start my own club or organization through the Student Association?",
    answer:
      "Yes, you can start your own club or organization through the Student Association. We provide resources, guidance, and support to help you get started.",
  },
  {
    question: "How does the Student Association allocate its budget?",
    answer:
      "Our budget is allocated through a transparent and democratic process, with input from our members and executive board. We prioritize funding for events, services, and initiatives that benefit the student body.",
  },
  {
    question: "How can I contact the Student Association?",
    answer:
      "You can contact us through our website, social media, or by visiting our office on campus. We're always happy to hear from you and address any questions or concerns you may have.",
  },
  {
    question: "What are the Student Association's office hours?",
    answer:
      "Our office hours are Monday to Friday, 10am-4pm. You can drop by our office to ask questions, seek advice, or just hang out with our team.",
  },
];

const FAQPage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          // background: "red",
          height: "250px",
          backgroundImage:
            "url('https://png.pngtree.com/png-vector/20221206/ourmid/pngtree-flat-faq-icon-on-white-background-business-communication-concept-vector-png-image_43151102.jpg')",
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
              "linear-gradient(0deg, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0.7) 100%)",
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
                "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{ margin: "60px 0", padding: "0 21px" }}>
        <Box sx={{ margin: "24px auto", width: "100%" }}>
          <Typography
            className="header-font"
            sx={{
              textAlign: { xs: "center" },
              margin: { xs: "12px auto", lg: "0" },
              color: "#221E30",
              // color: "white",
              fontSize: "40px",
            }}
          >
            FAQ{" "}
          </Typography>
          <Typography
            // className="header-font"
            sx={{
              textAlign: { xs: "center" },
              margin: { xs: "12px auto", lg: "0" },
              color: "#221E30",
              // color: "white",
              fontSize: "16px",
            }}
          >
            Here Is A List Of Frequently Asked Questions{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              margin: "12px auto",
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
            <Divider sx={{ color: "#221E30", width: "70%" }} />
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
        <Grid container columnSpacing={6}>
          {FAQs.map((faq, index) => (
            <Grid key={index} item xs={10} md={6} sx={{ margin: "8px auto" }}>
              <Accordion
                sx={{
                  borderLeft: "10px solid #221E30",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" sx={{ fontSize: "14px" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: "#221E30", color: "#eee" }}>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default FAQPage;
