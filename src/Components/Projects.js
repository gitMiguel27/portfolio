import React from "react";
import Carousel from 'react-material-ui-carousel';
import Slide from "./Slide";
import {projects} from "../Helper/projects";

const carousel = {
    maxWidth: 1000,
    height: { xs: 505, sm: "fit-content" },
    margin: 'auto'
};

function Projects() {
    return (
        <Carousel sx={ carousel }>
            {
                projects.map( (item) => <Slide key={item.id} item={item} /> )
            }
        </Carousel>
    );
}

export default Projects;