import Banner from "./components/Banner";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;
