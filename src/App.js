import Navigation from "./components/layout/navigation/nav";
import Footer from "./components/layout/footer/footer";
import Header from "./components/pages/header/header";
import Products from "./components/pages/products/products";
import Pricing from "./components/pages/pricing/pricing";
import Contact from "./components/pages/contact/contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Products />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
