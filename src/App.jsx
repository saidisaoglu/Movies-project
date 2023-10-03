import { Navbar } from "./navbar/navbar";
import "./app.scss";
import { MainHeader } from "./mainheader/mainheader";
import { TopFilms } from "./top20films/topfilms";
import { MoviesMain } from "./moviesmain/moviesMain";

function App() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <TopFilms />
      <MoviesMain />
    </>
  );
}

export default App;
