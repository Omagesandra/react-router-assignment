import './App.css';
import {Routes, Route} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import User from "./User";
import Home from "./Home";

function App() {
  return (
<div className="app">
  <section className="myNav">
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/User" element={<User/>}/>
      <Route path="/ErrorBoundary" element={<ErrorBoundary/>}/>
    </Routes>
    </section>
    </div>
  );
}

export default App;