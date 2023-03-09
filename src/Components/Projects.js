import React from "react";
import Carousel from 'react-material-ui-carousel';
import Item from "./Item";
import {projects} from "../Helper/projects";

function Projects() {
    return (
        <Carousel sx={{ width: 1000, height: "fit-content", margin: 'auto' }}>
            {
                projects.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    );
}

export default Projects;