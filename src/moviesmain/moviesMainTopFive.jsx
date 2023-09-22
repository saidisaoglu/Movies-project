import moviesmain from "./moviesmain.module.scss";

export function MoviesMainTopFive() {
  return (
    <div className={moviesmain.blogPostsDiv}>
      <h2>Trend Film İzle</h2>
      <ul>
        <li data-index="1">
          <img src="/list1.jpg" alt="" />
          <div>
            <h3>Lorem</h3>
            <span>Sed mattis nunc</span>
          </div>
        </li>
        <li data-index="2">
          <img src="/list2.jpg" alt="" />
          <div>
            <h3>Ipsum</h3>
            <span>Sed mattis nunc</span>
          </div>
        </li>
        <li data-index="3">
          <img src="/lst3.jpg" alt="" />
          <div>
            <h3>Ipsum</h3>
            <span>Sed mattis nunc</span>
          </div>
        </li>
        <li data-index="4">
          <img src="/list 4.jpg" alt="" />
          <div>
            <h3>Ipsum</h3>
            <span>Sed mattis nunc</span>
          </div>
        </li>
        <li data-index="5">
          <img src="/list 5.jpeg" alt="" />
          <div>
            <h3>Ipsum</h3>
            <span>Sed mattis nunc</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
