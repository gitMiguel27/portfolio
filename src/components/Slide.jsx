import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const projectTitle = {
  textAlign: { xs: "center", sm: "left" },
  fontSize: { xs: 18, sm: 20, md: 24 },
};

function Slide({ item }) {
  return (
    <Paper sx={{ p: 3 }} square="true" elevation={0}>
      <Typography
        className="project-title"
        variant="h5"
        fontWeight={"fontWeightBold"}
        sx={projectTitle}
      >
        {item.title}
      </Typography>
      <Card sx={{ maxWidth: "xs" }}>
        <CardMedia component="img" alt={item.title} image={item.image} />
      </Card>
      <Stack
        direction="row"
        spacing={2}
        m={3}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {item.stacks.map((stack) => (
          <Box key={stack}>{stack}</Box>
        ))}
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        m={3}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Link
          href={item.link}
          target="_blank"
          rel="noopener"
          underline="hover"
          display={"flex"}
        >
          Source Code
        </Link>
        <Link
          href={item.demo}
          target="_blank"
          rel="noopener"
          underline="hover"
          display={"flex"}
        >
          Demo Video
        </Link>
      </Stack>
    </Paper>
  );
}

Slide.propTypes = {
  item: PropTypes.object,
};

export default Slide;
