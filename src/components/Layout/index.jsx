import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import '../../styles/index.scss';
import favicon from '../../images/hesperos-favicon.png'
import { Navbar, Footer } from '../';
import routes from '../../utils/routes';


const Layout = ({ children }) => {
  return (
    <>
      <div className="container" >
        <Helmet>
          <title>Hesperos Choir</title>
          <link rel="icon" href={favicon}></link>
        </Helmet>

        <Navbar 
          id="navigation"
          routes={routes}
        />

        <motion.main
          className='page'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'tween',
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
  )
}

export default Layout;