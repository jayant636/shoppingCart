import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import { useState, useEffect } from "react";
import { apiUrl } from "./data";
import Spinner from "./components/Spinner";

function App() {
  const [cart, setCart] = useState([]);
  const [loading, setloading] = useState(true);

  async function fetchData() {
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCart(output);
    } catch (e) {
      console.log(e);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  flex flex-col">
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <div>
              <Card cart={cart} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
