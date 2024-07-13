import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Marquees from "./components/Marquees";

const App = () => {
  return (
    <div className="max-w-screen-2xl bg-zinc-900 text-white  ">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  );
};

export default App;
