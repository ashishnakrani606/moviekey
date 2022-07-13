import './App.css';
import './assets/css/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;