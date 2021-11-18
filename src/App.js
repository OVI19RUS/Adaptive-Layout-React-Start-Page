import React from "react";
import { Header, Cookie } from "./components";
import { Home, Subscribe, Empty } from "./pages";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main>
        <div className='container'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/subscribe' element={<Subscribe />} />
            <Route exact path='/oops' element={<Empty />} />
          </Routes>
          <Cookie />
        </div>
      </main>
    </div>
  );
}

export default App;
