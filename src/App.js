import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './Fontawesome'

import Home from './router/Home'
import Sermon from './router/Sermon'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Pray from './router/Pray';
import Together from './router/Together';
import About from './router/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div id="body">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/sermon" element={<Sermon />}></Route>
            <Route path="/pray" element={<Pray />}></Route>
            <Route path="/together" element={<Together />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<Home />}></Route>
          </Routes>
          </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
