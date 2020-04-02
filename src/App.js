import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import styles from "./test.module.css";
import Home from "./pages/Home";

function App() {
  console.log(styles)
  return <Home className={styles.test} />;
}

export default App;
