import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from "./components/Home";


function App() {

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
