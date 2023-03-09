import React from "react";
import { Paper, Button, Card, CardMedia } from '@mui/material'

function Item({ item }) {
    return (
        <Paper>
            <h2>{item.title}</h2>
            <p>{item.link}</p>
            <Card >
                <CardMedia
                    component="image"
                    alt={item.title}
                    height="300"
                    src={item.image}
                />
            </Card>
            {
                item.stacks.map( (stack) => <p key={stack} >{stack}</p> )
            }

            <Button className="project-button">
                Check it out!
            </Button>
        </Paper>
    );
}

export default Item;