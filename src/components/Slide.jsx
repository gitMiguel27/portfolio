import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

function Slide(props) {
  const { item } = props;
  return (
    <Paper sx={{ p: 3 }} square={true} elevation={0}>
      <h2>{item.title}</h2>
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
        <Link href={item.link} target="_blank" rel="noopener" underline="hover" display={"flex"}>
          Source Code
        </Link>
        <Link href={item.demo} target="_blank" rel="noopener" underline="hover" display={"flex"}>
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
