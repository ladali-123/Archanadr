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
import Gallery from './components/Gallery'
import AboutSection from './components/Aboutsection'

// Service pages — src/pages/
import Womanmental from './pages/Womanmental'
import Comprehensive from './pages/Comprehensive'
import Psychiatric from './pages/Psychiatric'
import Neuropsychiatric from './pages/Neuropsychiatric'
import Adolescent from './pages/Adolescent'
import Telepsychiatry from './pages/Telepsychiatry'
import Medication from './pages/Medication'

// Condition pages — src/components/conditions/
import Depression from './components/conditions/Depression'
import AnxietyDisorders from './components/conditions/AnxietyDisorders'
import OCD from './components/conditions/OCD'
import BipolarDisorder from './components/conditions/BipolarDisorder'
import ChildAdolescent from './components/conditions/ChildAdolescent'
import DeAddictionRecovery from './components/conditions/DeAddictionRecovery'
import SexualHealthCounseling from './components/conditions/SexualHealthCounseling'
import InsomniaSleepDisorders from './components/conditions/InsomniaSleepDisorders'
import PTSDTrauma from './components/conditions/PTSDTrauma'

import UnderstandingAnxietyBlog from "./components/Blogs/Understandinganxietyblog";
import Childmentalhealthblog from "./components/Blogs/Childmentalhealthblog";

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
      <Gallery />
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
        <Route path="/about" element={<AboutSection />} />

        {/* Service dropdown pages — src/pages/ */}
        <Route path="/service/womens-mental-health" element={<Womanmental />} />
        <Route path="/service/comprehensive-assessment" element={<Comprehensive />} />
        <Route path="/service/psychiatric-consultation" element={<Psychiatric />} />
        <Route path="/service/medication-management" element={<Medication />} />
        <Route path="/service/neuropsychiatric-care" element={<Neuropsychiatric />} />
        <Route path="/service/child-adolescent-psychiatry" element={<Adolescent />} />
        <Route path="/service/telepsychiatry" element={<Telepsychiatry />} />

        {/* Conditions dropdown pages — src/components/conditions/ */}
        <Route path="/service/conditions/depression" element={<Depression />} />
        <Route path="/service/conditions/anxiety-disorders" element={<AnxietyDisorders />} />
        <Route path="/service/conditions/ocd" element={<OCD />} />
        <Route path="/service/conditions/bipolar-disorder" element={<BipolarDisorder />} />
        <Route path="/service/conditions/child-adolescent-psychiatry" element={<ChildAdolescent />} />
        <Route path="/service/conditions/de-addiction-recovery" element={<DeAddictionRecovery />} />
        <Route path="/service/conditions/sexual-health-counseling" element={<SexualHealthCounseling />} />
        <Route path="/service/conditions/insomnia-sleep-disorders" element={<InsomniaSleepDisorders />} />
        <Route path="/service/conditions/ptsd-trauma" element={<PTSDTrauma />} />


        <Route path="/blog/understanding-anxiety"element={<UnderstandingAnxietyBlog />}/>
        <Route path="/blog/talk-to-child-about-mental-health" element={<Childmentalhealthblog />} />
      </Route>
    </Routes>
  )
}

export default App