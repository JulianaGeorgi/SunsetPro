import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from "./components/Home";
import { Article } from "./components/Article";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {

  return (
    <div className="App">
      <NavBar />
      <main>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/article' element={<Article/>} />
        </Routes>
       
      </main>
    </div>
  )
}

export default App
