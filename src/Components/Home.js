import React from "react";
import { Card, CardMedia, Typography, Grid } from '@mui/material';

function Home() {
  return (
    <div className="Home">
      {/* <img src={process.env.PUBLIC_URL + '/photos/Profile.jpeg'} alt="profile" /> */}
        <Card sx={{ maxWidth: 450, margin: 5 }}>
            <CardMedia
                component="img"
                alt="profile"
                height="auto"
                image={process.env.PUBLIC_URL + '/photos/Profile.jpeg'}
                sx={{ filter: "grayscale(90%)" }}
            />
        </Card>
        <Typography variant="h3" fontWeight={'fontWeightBold'} margin={'auto'} mb={5} sx={{ maxWidth: 1000, textAlign: "left" }} >
          My name is Miguel Nazario and I am a Curious and Creative Software Engineer.
        </Typography>
        <Typography variant="h3" fontWeight={'fontWeightBold'} margin={'auto'} mb={10} sx={{ maxWidth: 1000, textAlign: "left" }} >
          Currently working as a volunteer mentor at Code the Dream. Before that, completed the Full Stack Web Development Program at the Flatiron School, and graduated from Vassar College with a Bachelor's in Philosophy.
        </Typography>
        <Grid container spacing={2} margin={'auto'} mb={10} sx={{ maxWidth: 1000 }}>
          <Grid item xs={4}>
            <Typography variant="h5">About</Typography>
          </Grid>
          <Grid item xs={8} mb={5}>
            <Typography variant="h6">
              I have around 1 year of experience of utilizing my Full Stack skills with programs including React, Ruby on Rails, Material UI, MySQL, JavaScript, HTML and CSS. I also have around 4 years of experience in education and mentorship roles that encouraged students to not only excel in their studies but also discover new skills and passions.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">Projects</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6">
              I am highlighting two projects that I believe showcase my strengths as a Full Stack Engineer. I particularly enjoy the Frontend side of programming as I can see the immediate impact of my work on the user's experience.
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
}

export default Home;
