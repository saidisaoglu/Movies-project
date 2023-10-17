import { Navbar } from "./navbar/navbar";
import "./app.scss";
import { MainHeader } from "./mainheader/mainheader";
import { TopFilms } from "./top20films/topfilms";
import { MoviesMain } from "./moviesmain/moviesMain";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <MainHeader />
      <TopFilms />
      <MoviesMain />
    </Provider>
  );
}

export default App;
