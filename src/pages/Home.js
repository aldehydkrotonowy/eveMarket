import React from "react";

class Home extends React.Component {
  handleTabChange = (event, newValue) => {
    this.setState({ selectedTab: newValue });
  };

  render() {
    return null;
  }
}

export default Home;
