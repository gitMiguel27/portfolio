import React from "react";
import { Paper, Stack, Box, Card, CardMedia, Link, Divider, styled } from '@mui/material';

const Responsive = styled("div")(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        // width: "fit-content",
        maxHeight: 475
    },
    // [theme.breakpoints.up('sm')]: {
    //     width: "fit-content"
    // },
    // [theme.breakpoints.down('sm')]: {
    //     height: "auto"
    // },
    // [theme.breakpoints.up('sm')]: {
    //     height: "auto"
    // }
}));

function Slide({ item }) {
    return (
        <Responsive>
        <Paper sx={{ p: 3 }} square="true" elevation={0}>
            <h2>{item.title}</h2>
            <Card sx={{ maxWidth: 'xs', width: "fit-content" }}>
                <CardMedia
                    component="img"
                    alt={item.title}
                    image={item.image}
                    // sx={{ maxWidth: 'xs' }}
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
        </Responsive>
    );
}

export default Slide;