import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Home from "./pages/home";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
