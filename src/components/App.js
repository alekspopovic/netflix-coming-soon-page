import React from "react";
import "../styles/App.css";
import Card from "./Card";
import data from "../data/movies";
import MainMenu from "./MainMenu";

function App() {
  return (
    <div className="App">
      {data.map(function (movie) {
        return <Card key={movie.title} movie={movie} />;
      })}

      <MainMenu />
    </div>
  );
}

export default App;
