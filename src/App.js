import "./App.css";
import About from "./components/About";

import Bidplace from "./components/Bidplace";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-auto">
        <Bidplace />
        <Content />
        <About />
      </div>
    </>
  );
}

export default App;
