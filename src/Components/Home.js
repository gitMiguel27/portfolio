import React from "react";
import "./Home.css";
import Projects from "./Projects";
import { Card, CardMedia, Typography, Grid, Box } from '@mui/material';
import Slide from '@mui/material/Slide';
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
        <div className="profile-pic">
          <Slide direction="right" in={true} easing={"ease-in"} timeout={1250} mountOnEnter unmountOnExit>
            <Card sx={{ maxWidth: 450, mx: "auto", my: 1 }}>
                <CardMedia
                    component="img"
                    alt="profile"
                    height="auto"
                    image={process.env.PUBLIC_URL + '/photos/Profile.jpeg'}
                />
            </Card>
          </Slide>
        </div>
        <Typography variant="h4" component="div" margin={'auto'} my={5} sx={{ maxWidth: 1000, textAlign: "left" }} >
          Hi, I'm Miguel and I am a <Box fontWeight='fontWeightBold' display='inline'>Curious and Creative</Box> Software Engineer.
        </Typography>
        <Typography variant="h4" margin={'auto'} mb={10} sx={{ maxWidth: 1000, textAlign: "left" }} >
          Currently working as a Sales Advisor at COS, and as a Volunteer Mentor at Code the Dream in my free time. Before that, I completed the Full Stack Web Development Program at the Flatiron School, and graduated from Vassar College with a Bachelor's in Philosophy.
        </Typography >
        <Grid container spacing={2} xs={12} sm={10} md={8} margin={'auto'} mb={10} sx={{ maxWidth: 1000 }}>
          <Grid item xs={3} sm={3} md={3}>
            <Typography variant="h5" fontWeight={'fontWeightBold'}>About</Typography>
          </Grid>
          <Grid item xs={8} sm={9} md={9} mb={5}>
            <Typography variant="h6">
              I have around 1 year of experience of utilizing my Full Stack skills with programs including React, Ruby on Rails, Material UI, PostgreSQL, JavaScript, HTML and CSS. I also have 4+ years of experience in education and mentorship roles where I encouraged students to not only excel in their studies but also discover new skills and passions.
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} md={3}>
            <Typography variant="h5" fontWeight={'fontWeightBold'}>Projects</Typography>
          </Grid>
          <Grid item xs={8} sm={9} md={9}>
            <Typography variant="h6">
              I believe the following projects showcase my strengths as a Full Stack Engineer. I particularly enjoy the Front-End side of programming as my tech mission is to create accessible, fun, and engaging user experiences.
            </Typography>
          </Grid>
        </Grid>
        <Projects />
        <Footer />
    </div>
  );
}

export default Home;
