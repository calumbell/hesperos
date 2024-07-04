import React from "react";
import { motion } from "framer-motion";
import "../styles/index.scss";
import { Navbar, Footer } from ".";
import routes from "../utils/routes";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container px-4">
        <Navbar id="navigation" routes={routes} />

        <motion.main
          className="page"
          id="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "tween",
            mass: 0.1,
            stiffness: 10,
            duration: 0.5,
          }}
        >
          {children}
        </motion.main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
