import React from "react";
import { Card, CardMedia } from '@mui/material';

function Home() {
  return (
    <div className="Home">
      {/* <img src={process.env.PUBLIC_URL + '/photos/Profile.jpeg'} alt="profile" /> */}
        <Card sx={{ maxWidth: 400, margin: 5 }}>
            <CardMedia
                component="img"
                alt="profile"
                height="auto"
                image={process.env.PUBLIC_URL + '/photos/Profile.jpeg'}
            />
        </Card>
    </div>
  );
}

export default Home;
