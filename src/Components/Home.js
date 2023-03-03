import React from "react";
import { Card, CardMedia, Typography } from '@mui/material';

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
        <Typography variant="h5" margin={'auto'} mb={3} sx={{ maxWidth: 1000, textAlign: "left" }} >
          My name is Miguel Nazario and I am a Curious and Creative Software Engineer.
        </Typography>
        <Typography variant="h5" margin={'auto'} mb={3} sx={{ maxWidth: 1000, textAlign: "left" }} >
          Currently volunteering with Code the Dream as a mentor to help students build foundational JavaScript skills. I developed my technical skills at the Flatiron School in NYC by completing their Full Stack Web Development program in person. I am a recent graduate from Vassar College, where I developed strong Problem-Solving, Creative, and Collaborative skills. I am interested in Education and Photography, and a significant value of mine is Diversity and Inclusion.
        </Typography>
    </div>
  );
}

export default Home;
