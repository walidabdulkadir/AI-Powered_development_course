import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SlideShow from "./components/SlideShow";
import { movies } from "./Data/Data";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Banner />
        <SlideShow title="Popular on Netflix" movies={movies} />
        <SlideShow title="Trending" movies={movies} />
        <SlideShow title="Releses" movies={movies} />
        <SlideShow title="Action" movies={movies} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
