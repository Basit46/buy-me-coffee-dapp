import React from "react";
import MainSection from "./components/MainSection";
import coffeeImg from "./assets/coffee.jpg";

const App = () => {
  return (
    <div className="lg:flex justify-end">
      <div className="hidden lg:block w-[30vw] h-full fixed top-0 left-0">
        <img
          className="h-full w-full object-cover"
          src={coffeeImg}
          alt="coffee"
        />
      </div>
      <MainSection />
    </div>
  );
};

export default App;
