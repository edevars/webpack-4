import React from "react";
import Home from "./Home";
import rick from "../../images/rick-and-morty.png";

const App = () => {
  return (
    <div className="HomeContainter">
      <img
        src="https://blog.blackmilkclothing.com/wp-content/uploads/2019/01/RAM__LOGO_4C_S3SG.png"
        alt="title"
        className="imageTitle"
      />
      <p className="sass">Esto es sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
      <p className="post-css">Esto es postcss</p>
      <img src={rick} alt="rick-and-morty" className="imagePortal" />
      <Home />
    </div>
  );
};

export default App;
