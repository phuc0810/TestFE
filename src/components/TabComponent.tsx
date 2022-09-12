import React, { useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { SectionContext } from "../pages/Section1";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabComponent() {
  const [value, setValue] = React.useState(0);

  const sectionOne = useContext(SectionContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(sectionOne);
  };

  console.log(sectionOne);
  
  
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={sectionOne}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={sectionOne} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={sectionOne} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={sectionOne} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export default TabComponent;
