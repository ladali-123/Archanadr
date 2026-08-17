import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'

import Detail from './components/Detail'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Revive from './components/Revive'
import About from './components/About'
import Banner from './components/Banner'
import Service from './components/Service'
import Procedure from './components/Procedure'
import Consult from './components/Consult'
import Whychoose from './components/Whychoose'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Booknow from './components/Booknow'
import Privacy from './components/Privacy'

// Service pages (one file per Services dropdown item) — src/pages/
import Womanmental from './pages/Womanmental'
import Comprehensive from './pages/Comprehensive'
import Psychiatric from './pages/Psychiatric'
import Medication from './pages/Medication'
// Shared layout: Navbar on top, Footer at bottom, page content in between
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function HomePage() {
  return (
    <>
      <Home />
      <Revive />
      <About />
      <Banner />
      <Service />
      <Procedure />
      <Consult />
      <Whychoose />
      <Brands />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Other Pages */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/why-choose-us" element={<Whychoose />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/revive" element={<Revive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booknow" element={<Booknow />} />
        <Route path="privacy-policy" element={<Privacy />} />

        {/* Service dropdown pages — src/pages/ */}
        <Route path="/service/womens-mental-health" element={<Womanmental />} />
         <Route path="/service/comprehensive-assessment" element={<Comprehensive />} />
         <Route path="/service/psychiatric-consultation" element={<Psychiatric />} />
         <Route path="/service/medication-management" element={<Medication />} />

      </Route>
    </Routes>
  )
}

export default App