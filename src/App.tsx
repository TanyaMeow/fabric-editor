import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {makeDrawFigureButton} from "./components/DrawFigureButton";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {CanvasView} from "./components/CanvasView";
import {Footer} from "./components/Footer";
import {PopUp} from "./components/Pop-up";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <PopUp />
        <Header />
        <div className="main">
          <Sidebar />
          <CanvasView />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
