import mainHeader from "../mainheader/mainHeader.module.scss";
export function MainHeader() {
  return (
    <div className={mainHeader.navBottomCategori}>
      <ul>
        <li>
          <a href="">FilmIzle</a>
        </li>
        <li>
          <a href="">Türkçe Dublaj Filmleri</a>
        </li>
        <li>
          <a href="">Türkçe Altyazı Filmleri</a>
        </li>
        <li>
          <a href="">İletişim</a>
        </li>
      </ul>
    </div>
  );
}
