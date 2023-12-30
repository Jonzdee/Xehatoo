import React from 'react'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Parther from './components/Parther'
import Services from './components/Services'
import Consult from './components/Consult'
import BlogCard from './layouts/BlogCard'
import Footer from "./components/Footer"
import Subscribe from './layouts/Subscribe'
const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id='home'>
        <Home />
        </div>
        <div >
          <Parther />
        </div>
        <div id='services'>
        <Services  />
        </div>
        <div id='consult'>
          <Consult  />
        </div>
        <div>
          <BlogCard />
        </div>
        <div>
          <Subscribe />
        </div>
        <div>
          <Footer />
        </div>
        
      </main>
    </div>
  )
}

export default App