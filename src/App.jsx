import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import "./App.css";
import Companies from "./components/Companies/Companies.jsx";
import Residencies from "./components/residenceies/Residencies.jsx";
import Values from "./components/values/Values.jsx";
import Contact from "./components/contacts/Contact.jsx";
import GetStarted from "./components/getStarted/GetStarted.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div className="app">
      <div>
        <div className="whiteGradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
