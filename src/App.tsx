import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {makeDrawFigureButton} from "./components/DrawFigureButton";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {CanvasView} from "./components/CanvasView";
import {Footer} from "./components/Footer";

function App() {
  // const DrawAdd = makeDrawFigureButton('add', '<svg hui blya>');
  // const DrawCheck = makeDrawFigureButton('check', 'dsfsafdasf');

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="main">
          <Sidebar />
          <CanvasView />
        </div>
        <Footer />
      </div>
      {/*<DrawAdd />*/}
    </div>
  );
}

export default App;
