import Carousel from "react-material-ui-carousel";
import Slide from "./Slide";
import { projects } from "../assets/projects";

// Consider replacing with react-swipeable-views as per the MUI documentation:
// https://mui.com/material-ui/react-stepper/#text-with-carousel-effect

function Projects() {
  return (
    <Carousel sx={{ maxWidth: 1000, height: "fit-content", margin: "auto" }}>
      {projects.map((item) => (
        <Slide key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Projects;
