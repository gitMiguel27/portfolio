import React from "react";
import Carousel from 'react-material-ui-carousel';
import Item from "./Item";
import projects from "../Helper/projects.json";

function Projects() {
    return (
        <Carousel sx={{ width: 1000, height: 500, margin: 'auto' }}>
            {
                projects.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    );
}

export default Projects;