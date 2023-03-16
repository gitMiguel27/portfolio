import React from "react";
import Carousel from 'react-material-ui-carousel';
import Slide from "./Slide";
import {projects} from "../Helper/projects";

function Projects() {
    return (
        <Carousel sx={{ width: 1000, height: "fit-content", margin: 'auto' }}>
            {
                projects.map( (item) => <Slide key={item.id} item={item} /> )
            }
        </Carousel>
    );
}

export default Projects;