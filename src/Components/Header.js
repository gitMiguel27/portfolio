import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

function Header() {
    return(
        <div className="Header">
            <Box sx={{ flexGrow: 1, margin: 2 }}>
                <AppBar position="static" sx={{ backgroundColor: "transparent", color: "#212121", boxShadow: "0px 0px 0px 0px" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Miguel
                        </Typography>
                        <Button color="inherit">
                            <LinkedInIcon />
                        </Button>
                        <Button color="inherit">
                            <GitHubIcon />
                        </Button>
                        <Button color="inherit">
                            <BookIcon />
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;