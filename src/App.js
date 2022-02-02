import Navigation from "./components/layout/navigation/nav";
import Main from "./components/layout/main/main";
import Footer from "./components/layout/footer/footer";
import Header from "./components/pages/header/header";
import Products from "./components/pages/products/products";
import Pricing from "./components/pages/pricing/pricing";
import Contact from "./components/pages/contact/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main>
        <Header />
        <Products />
        <Pricing />
        <Contact />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
