import React from "react";
import Navbar from "../components/NavBar";
import AddressSelection from "../components/AddressSelection";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <section>
              <AddressSelection />
      </section>

      <Footer></Footer>
    </>
  );
};

export default Checkout;
