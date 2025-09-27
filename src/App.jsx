import React from 'react'
import Hero from "./sections/Hero.jsx";
import AppShowcase from './sections/showcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import Education from './sections/Education.jsx';

const App = () => {
    return (
       <>
       <NavBar/>
       <Hero/>
       <AppShowcase/>
       <FeatureCards/>
       <ExperienceSection/>
       <Education/>
       <About/>
       <Contact/>
       <Footer/>
       </>
    );
}
export default App
