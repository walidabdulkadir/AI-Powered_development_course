import Banner from "./components/Banner";
import Card from "./components/Card";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { movies } from "./Data/Data";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Banner />
        <div>
          {movies.map((movie) => (
            <Card key={movie.id} movies={movie} />
          ))}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
