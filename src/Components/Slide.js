import React from "react";
import { Paper, Stack, Box, Card, CardMedia, Link, Divider, Typography, styled } from '@mui/material';

const Responsive = styled("div")(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height: 475
    }
}));

const projectTitle = {
    textAlign: { xs: "center", sm: "left" },
    fontSize: { xs: 18, sm: 20, md: 24 },
};

function Slide({ item }) {
    return (
        <Responsive>
            <Paper sx={{ p: 3 }} square="true" elevation={0}>
            <Typography className="project-title" variant="h5" fontWeight={'fontWeightBold'} sx={ projectTitle }>{item.title}</Typography>
                <Card sx={{ maxWidth: 'xs' }}>
                    <CardMedia
                        component="img"
                        alt={item.title}
                        image={item.image}
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