import "./App.css";
import Hero from "./components/Hero/Hero";
import OursTours from "./components/OursTours/OursTours";
import Api from "./components/Api/Api";

function App() {
  return (
    <>
      <OursTours />
      <Hero Api={Api} />
    </>
  );
}

export default App;
