import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import PreviewCarousel from "./components/preview-carousel";

function App() {
  return (
    <div style={{ height: "2500px" }}>
      <Header />
      <Hero />
      <PreviewCarousel />
    </div>
  );
}

export default App;
