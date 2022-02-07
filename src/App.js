import Navigation from "./components/layout/navigation/nav";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import Products from "./components/pages/products/products";
import Pricing from "./components/pages/pricing/pricing";
import Contact from "./components/pages/contact/contact";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faAddressBook, faAddressCard, faAdjust } from '@fortawesome/free-solid-svg-icons';
library.add( fab, faCheckSquare, faCoffee, faAddressCard, faAdjust, faFacebookF);


function App() {
  return (
    <div className="App" id="wrapper">
      <Navigation />
        <Header />
        <Main>
          <Products />
          <Pricing />
          <Contact />
        </Main>
      <Footer />
    </div>
  );
}

export default App;
