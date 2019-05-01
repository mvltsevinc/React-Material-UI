import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

function Footer({ muscles, category, onSelect }) {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    return onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(m => (
          <Tab label={m} />
        ))}
      </Tabs>
    </Paper>
  );
}

export default Footer;
