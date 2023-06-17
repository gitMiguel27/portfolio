import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

import ProfileImage from "../assets/miguel.jpg";
import Projects from "./Projects";

const profilePic = {
  maxWidth: 450,
  marginX: { xs: 4, sm: 2, md: 1 },
  marginY: { sm: 5, md: 1 },
};

const introText = {
  textAlign: "center",
  fontSize: { xs: 18, sm: 24, md: 32 },
  marginX: { xs: 1 },
  marginY: { xs: 5 },
};

function Home() {
  return (
    <div className="Home">
      <Grid container mb={15} mx={"auto"} sx={{ maxWidth: 1250 }}>
        <Grid item sm={5} md={5}>
          <div className="profile-pic">
            <Slide direction="right" in={true} easing={"ease-in"} timeout={1250} mountOnEnter unmountOnExit>
              <Card sx={profilePic}>
                <CardMedia component="img" alt="profile" height="auto" image={ProfileImage} />
              </Card>
            </Slide>
          </div>
        </Grid>
        <Grid item sm={7} md={7}>
          <Typography variant="h4" sx={introText}>
            Hi, I&rsquo;m Miguel and I&rsquo;m a{" "}
            <Box fontWeight="fontWeightBold" display="inline">
              Curious and Creative
            </Box>{" "}
            Software Engineer.
          </Typography>
          <Typography variant="h4" sx={introText}>
            Currently working as a Sales Advisor at COS. Before that, I volunteered as a Mentor at Code The Dream
            assisting students develop React skills. I completed the{" "}
            <Box fontWeight="fontWeightBold" display="inline">
              Full Stack Web Development
            </Box>{" "}
            program at the Flatiron School in NYC, and am a graduate of Vassar College with a Bachelor&rsquo;s in
            Philosophy.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={0} xs={12} sm={10} md={8} mx={"auto"} mb={15} sx={{ maxWidth: 1000 }}>
        <Grid item xs={3} sm={3} md={3}>
          <Typography variant="h5" fontWeight={"fontWeightBold"}>
            Experience
          </Typography>
        </Grid>
        <Grid item xs={8} sm={9} md={9} mb={5}>
          <Typography variant="h6">
            I have 1 year of experience of utilizing my Full Stack skills with programs including{" "}
            <Box fontWeight="fontWeightBold" display="inline">
              React
            </Box>
            ,{" "}
            <Box fontWeight="fontWeightBold" display="inline">
              Ruby on Rails
            </Box>
            ,{" "}
            <Box fontWeight="fontWeightBold" display="inline">
              Material UI
            </Box>
            ,{" "}
            <Box fontWeight="fontWeightBold" display="inline">
              JavaScript
            </Box>
            , and more. I also have 4+ years of experience in education and mentorship roles where I encouraged students
            to not only excel in their studies but also discover new skills and passions.
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <Typography variant="h5" fontWeight={"fontWeightBold"}>
            Projects
          </Typography>
        </Grid>
        <Grid item xs={8} sm={9} md={9}>
          <Typography variant="h6">
            I believe the following projects showcase my strengths as a Full Stack Engineer. I particularly enjoy the
            Front-End side of programming as my tech mission is to create accessible, fun, and engaging user
            experiences.
          </Typography>
        </Grid>
      </Grid>
      <Projects />
    </div>
  );
}

export default Home;
