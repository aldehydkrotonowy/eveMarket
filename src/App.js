import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import styles from "./test.module.css";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Profits from "./pages/profits/Profits";
import MarketSate from "./pages/marketState/MarketState";
import CssPlayground from "./pages/cssPlayground/cssPlayground";
import TabPanel from "./components/shared/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="HOME" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="BUY/SELL" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="PROFITS" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="MARKET STATE" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="CSS" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home className={styles.test} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Transactions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Profits />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MarketSate />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CssPlayground />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}

export default App;
