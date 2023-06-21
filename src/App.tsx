import React from 'react';
import './App.scss';
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";
import {CanvasView} from "./components/CanvasView";
import {Footer} from "./components/Footer";
import {Popup} from "./components/Popup";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Popup />
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
