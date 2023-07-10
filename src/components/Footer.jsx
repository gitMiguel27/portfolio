import BookIcon from "@mui/icons-material/Book";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <div className="Footer">
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "212121", boxShadow: "0px 0px 0px 0px" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Thanks for visiting!
            </Typography>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/miguel-nazario/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/gitMiguel27"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://medium.com/@mnazario35"
              target="_blank"
            >
              <BookIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Footer;
