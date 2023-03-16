import React from "react";
import Projects from "./Projects";
import { Card, CardMedia, Typography, Grid, Box } from '@mui/material';

function Home() {
  return (
    <div className="Home">
        <Card sx={{ maxWidth: 450, mx: 5, my: 4 }}>
            <CardMedia
                component="img"
                alt="profile"
                height="auto"
                image={process.env.PUBLIC_URL + '/photos/Profile.jpeg'}
                // sx={{ filter: "grayscale(90%)" }}
            />
        </Card>
        <Typography variant="h4" component="div" margin={'auto'} mb={5} sx={{ maxWidth: 1000, textAlign: "left" }} >
          Hi, I'm Miguel Nazario and I am a <Box fontWeight='fontWeightBold' display='inline'>Curious and Creative</Box> Software Engineer.
        </Typography>
        <Typography variant="h4" margin={'auto'} mb={10} sx={{ maxWidth: 1000, textAlign: "left" }} >
          Currently working as a volunteer mentor at Code the Dream. Before that, I completed the Full Stack Web Development Program at the Flatiron School, and graduated from Vassar College with a Bachelor's in Philosophy.
        </Typography>
        <Grid container spacing={2} margin={'auto'} mb={10} sx={{ maxWidth: 1000 }}>
          <Grid item xs={4}>
            <Typography variant="h5" fontWeight={'fontWeightBold'}>About</Typography>
          </Grid>
          <Grid item xs={8} mb={5}>
            <Typography variant="h6">
              I have around 1 year of experience of utilizing my Full Stack skills with programs including React, Ruby on Rails, Material UI, MySQL, JavaScript, HTML and CSS. I also have around 4 years of experience in education and mentorship roles where I encouraged students to not only excel in their studies but also discover new skills and passions.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" fontWeight={'fontWeightBold'}>Projects</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">
              I am highlighting two projects that I believe showcase my strengths as a Full Stack Engineer. I particularly enjoy the Front-End side of programming as my tech mission is to create accessible, fun, and engaging user experiences.
            </Typography>
          </Grid>
        </Grid>
        <Projects />
    </div>
  );
}

export default Home;
