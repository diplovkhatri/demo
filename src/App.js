import "./App.css";
import About from "./components/About";

import Bidplace from "./components/Bidplace";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-auto bg-stone-300">
        <Bidplace />
        <Content />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
