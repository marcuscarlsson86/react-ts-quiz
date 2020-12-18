import React from "react";
import { Typography } from "antd";
import "../../src/App.css";
const { Title } = Typography;

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title>SPORTS QUIZ</Title>
      </header>
    </div>
  );
};

export default Header;
