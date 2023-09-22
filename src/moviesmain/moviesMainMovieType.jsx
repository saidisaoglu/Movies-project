import moviesmain from "./moviesmain.module.scss";

export function MoviesType (){
    return(
        <div className={moviesmain.rightPartMoviesType}>
            <h3>Film Türleri</h3>
            <p>
              <span>Aile</span>
              <span>Aksiyon</span>
              <br />
              <span>Anmiasyon</span>
              <span>Belgesel</span>
              <br />
              <span>Bilim Kurgu</span>
              <span>Biyografi</span>
              <br />
              <span>Dram</span>
              <span>Editör</span>
              <br />
              <span>Fanstastik</span>
              <span>Gençlik</span>
              <br />
              <span>Genel</span>
              <span>Gerilim</span>
              <br />
              <span>Gizem</span>
              <span>Komedi</span>
              <br />
              <span>Korku</span>
              <span>Macera</span>
              <br />
              <span>Müzik</span>
              <span>Müzikal</span>
              <br />
              <span>Polisiye</span>
              <span>Romantik</span>
              <br />
              <span>Savaş</span>
              <span>Spor</span>
              <br />
              <span>Suç</span>
              <span>Tarih</span>
              <br />
              <span>Western & Kovboy</span>
            </p>
          </div>
    )
}