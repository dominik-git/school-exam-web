import React from "react";
import Subheader from "../../components/SubHeader";
import bmwImage from "../../assets/bmw7.jpg";

const WelcomePage = () => (
  <div>
    <Subheader image={bmwImage} text={"DOMOV"} />
    <h1>Uvod</h1>
  </div>
);

export default WelcomePage;
