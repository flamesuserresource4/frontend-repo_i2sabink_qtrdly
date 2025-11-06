import Hero from "./components/Hero";
import Values from "./components/Values";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter',_'system-ui',_'-apple-system']">
      <Hero />
      <Values />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
