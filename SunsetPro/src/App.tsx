import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from "./components/Home";
import { Article } from "./components/Article";
import { ScrollToTop } from "./components/ScrollToTop";
import {  MarkerProvider } from "./contexts/markerContext";

function App() {

  return (
    <MarkerProvider>
      <div className="App">
        <NavBar />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/article/' element={<Article />} />
          </Routes>

        </main>
      </div>
    </MarkerProvider>
  )
}

export default App
