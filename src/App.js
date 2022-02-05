import React from "react";
import { ToastContainer } from 'react-toastify';
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";
import FavContextProvider from "./contexts/FavoriteContext";
import MainRoutes from "./routes/MainRoutes";
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />

        <ProductContextProvider>
          <CartContextProvider>
            <FavContextProvider>
              <Navbar brand={"Drink"} color={"dark"} />
              <section>
                <div className='container content-container'>
                  <MainRoutes />
                </div>
              </section>
            </FavContextProvider>
          </CartContextProvider>
        </ProductContextProvider>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
