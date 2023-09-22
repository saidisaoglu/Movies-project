import Top20Films from "./top20films.module.scss";
export function TopFilms() {
  return (
    <section className={Top20Films.filmList}>
      <div className={Top20Films.filmContainer}>
        <div className={Top20Films.film}>
          <img
            src="/3e8a0e7ca50a33506e5c708dbfe927d3-210x315.jpg"
            alt="Film"
          />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img
            src="/88324b684586c770d6cb789e178d944f-210x315.jpg"
            alt="Film 1"
          />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img
            src="/dddbac605541afa8831fb6d91fd4b4e6-210x315.jpg"
            alt="Film 1"
          />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img
            src="/effde15ec8003d6b6523add2ecd83923-210x315.jpg"
            alt="Film 1"
          />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>

        <div className={Top20Films.film}>
          <img
            src="/3e8a0e7ca50a33506e5c708dbfe927d3-210x315.jpg"
            alt="Film"
          />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img src="/7.jpg" alt="Film" />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img src="/8.jpg" alt="Film" />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img src="/9.jpg" alt="Film" />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
        <div className={Top20Films.film}>
          <img src="/10.jpg" alt="Film" />
          <h3>Film 1</h3>
          <p>Description of Film 1</p>
        </div>
      </div>
    </section>
  );
}
