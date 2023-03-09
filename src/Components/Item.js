import React from "react";
import { Paper, Button, Card, CardMedia, Link } from '@mui/material'

function Item({ item }) {
    return (
        <Paper>
            <h2>{item.title}</h2>
            <Card>
                <CardMedia
                    component="img"
                    alt={item.title}
                    image={item.image}
                    sx={{ height: "fit-content" }}
                />
            </Card>
            {
                item.stacks.map( (stack) => <p key={stack} >{stack}</p> )
            }

            <Link href={item.link}>
                GitHub
            </Link>
            <Button sx={{ mb: 5 }}>
                Check it out!
            </Button>
        </Paper>
    );
}

export default Item;