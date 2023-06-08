import React from "react";
import { Paper, Stack, Box, Card, CardMedia, Link, Divider } from '@mui/material'

function Slide({ item }) {
    return (
        <Paper sx={{ p: 3 }} square="true" elevation={0}>
            <h2>{item.title}</h2>
            <Card sx={{ maxWidth: "justifyContent" }} >
                <CardMedia
                    component="img"
                    alt={item.title}
                    image={item.image}
                    sx={{ minHeight: 250 }}
                />
            </Card>
            <Stack direction="row" spacing={2} m={3} justifyContent="center" alignItems="center" divider={<Divider orientation="vertical" flexItem />} >
            {
                item.stacks.map( (stack) => <Box key={stack} >{stack}</Box> )
            }
            </Stack>
            <Stack direction="row" spacing={2} m={3} justifyContent="center" alignItems="center" divider={<Divider orientation="vertical" flexItem />} >
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

export default Slide;