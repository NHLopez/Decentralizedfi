import React from 'react'
import Featured from './components/Featured/Featured'
import Hero from './components/Header/Banner'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Signup/Signup'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
