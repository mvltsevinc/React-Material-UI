import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="headline">
          Display 4
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
