import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";

function Header({ muscles, onExerciseCreate }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="inherit" variant="headline" style={{ flex: 1 }}>
          Exercise Database
        </Typography>
        <CreateDialog onCreate={onExerciseCreate} muscles={muscles} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
