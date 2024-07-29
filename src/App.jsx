import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import { UseStorage } from "./context/context";
import { Home } from "./pages/home/home";
import { Products001 } from "./pages/products001/products001";
import { Products002 } from "./pages/products002/products002";


function App() {


  return (
    <>
    <UseStorage>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products001' element={<Products001 />}/>
          <Route path='/products002' element={<Products002 />}/>
        </Routes>
        <Header/>
      </HashRouter>
    </UseStorage>
    </>
  );
}

export default App;
