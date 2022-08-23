import logo from "./assets/logo.png"
import main_slider from "./assets/main_slider.png"
import main__info__button1 from "./assets/main_info_button1.png"
import main__info__button2 from "./assets/main_info_button2.png"
import card1 from "./assets/card1.png"
import card2 from "./assets/card2.png"
import card3 from "./assets/card3.png"
import card4 from "./assets/card4.png"
import diagram from "./assets/diagram.png"
import card_img1 from "./assets/card_img1.png"
import card_img2 from "./assets/card_img2.png"
import card_img3 from "./assets/card_img3.png"
import contact__btn1 from "./assets/Group.svg"
import contact__btn2 from "./assets/logos_whatsapp.svg"
import footer__icon1 from "./assets/instagram.png"
import footer__icon2 from "./assets/facebook.png"
import footer__icon3 from "./assets/youtube.png"




const App=()=>{
  return <>

    <header>
      <div className="container">
        <nav>
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="nav__ul">
            <li className="nav__ul__li">Beranda</li>
            <li className="nav__ul__li">Koleksi</li>
            <li className="nav__ul__li">Syarat dan Ketentuan</li>
            <li className="nav__ul__li">Kontak</li>
            <li className="nav__ul__li">Masuk</li>
          </ul>
        </nav>
      </div>
    </header>

    {/* header end */}
    
    <main>
      <div className="container">
        <div className="main__info">
          <p className="main__info__title"><span>Pojok Baca</span> Probolinggo</p>
          <h1 className="main__info__h1">Pinjam Buku Secara <span>Gratis</span> untuk Masyarakat</h1>
          <div className="main_info_buttons">
            <div className="button"><img src={main__info__button1}/></div>
            <div className="button"><img src={main__info__button2}/></div>
          </div>
        </div>
        <div className="main__slider">
          <img src={main_slider}/>
        </div>
      </div>
    </main>

    {/* main end */}

    <section>
      <div className="container">
        <div className="section__one">

          <h2>Kenapa Kita <span>Harus</span> Membaca Buku?</h2>

          <div className="section__one_cards">

            <div className="section__one_card">
              <p>“Aku rela dipenjara asalkan <b> bersama buku, </b> karena dengan buku <b> <br />aku bebas</b>”</p>
              <div className="section__card__img">
                <img src={card1}/>
                <p>
                  <b>Mohammad Hatta</b> <br />
                  Wakil Presiden Indonesia Pertama
                </p>
              </div>
            </div>

            <div className="section__one_card">
              <p>“Cuma perlu <b>satu buku</b> untuk jatuh cinta pada membaca, Cari Buku itu! <b>Mari jatuh cinta</b>!</p>
              <div className="section__card__img">
                <img src={card2}/>
                <p>
                  <b>Najwa Shihab</b> <br />
                  Duta Membaca
                </p>
              </div>
            </div>

          </div>

          {/* cards end */}

          <div className="section__one__diagram">
              <div className="diagram">
                <img src={diagram} />
                <div className="diagram-text">
                  <h1>500+</h1>
                  <p>Judul Buku</p>
                </div>
              </div>

              <div className="diagram">
                <img src={diagram} />
                <div className="diagram-text">
                  <h1>$0</h1>
                  <p>Gratis Peminjaman</p>
                </div>
              </div>

              <div className="diagram">
                <img src={diagram} />
                <div className="diagram-text">
                  <h1>5</h1>
                  <p>Kegiatan Rutin</p>
                </div>
              </div>

            </div>

            {/* diagram end */}

            <div className="card__text">
              <h1>Apa Kata Mereka?</h1>
              <p>Selengkapnya</p>
              <p>Mereka yang telah menjadi pengunjung tetap kami</p>
            </div>

            <div className="section__one_cards">

            <div className="section__one_card">
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <div className="section__card__img">
                <img src={card3}/>
                <p>
                  <b>Guy Hawkins</b> <br />
                  32 Tahun, Karyawan
                </p>
              </div>
            </div>

            <div className="section__one_card">
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <div className="section__card__img">
                <img src={card4}/>
                <p>
                  <b>Brooklyn Simmons</b> <br />
                  20 Tahun, Mahasiswa
                </p>
              </div>
            </div>

          </div>

          <div className="slider__choose">
              <div className="choose_item">.</div>
              <div className="choose_item">.</div>
              <div className="choose_item">.</div>
          </div>

          


          {/* width to'g'irlash kerak */}
        </div>
        <div className="section__imgs">
            <div className="card__text">
              <h1>Kegiatan Pojok Baca Probolinggo</h1>
              <p>Selengkapnya</p>
              <p>Intip kegiatan yang telah kami selenggarakan </p>
            </div>
            <div className="images__cards">
              <div className="img__card">
                <img src={card_img1}/>
              </div>
              <div className="img__card">
                <img src={card_img2}/>
              </div>
              <div className="img__card">
                <img src={card_img3}/>
              </div>
            </div>
            
          </div>

          <div className="section__contact">
            <h1>Ingin Membantu Meningkatkan Literasi Anak-Anak Sekitar Kita?</h1>
            <p>Percayakan melalui kegiatan kita</p>
            <div className="contact__btn1">
              Donasi dengan Kami <img src={contact__btn1} alt="" />
            </div>
            <p>Atau</p>
            <div className="contact__btn2">
            Hubungi Kami <img src={contact__btn2} alt="" />
            </div>
          </div>

      </div>
    </section>

    {/* section end */}

    <footer>
      <div className="container">
        
        <div className="footer__sections">
          <div className="footer-item">
            <div className="footer__name">
              <img src={logo}/> Pojok Baca Probolinggo
            </div>
            <div className="footer__icons">
              <img src={footer__icon1}/>
              <img src={footer__icon2}/>
              <img src={footer__icon3}/>
            </div>
          </div>
          <div className="footer-item">
            <h3>Kontak</h3>
            <p>Email</p>
            <p>Alamat</p>
            <p>No. Rekening</p>
          </div>
          <div className="footer-item">
            <h3>Tentang Kami</h3>
            <p>Umum</p>
          </div>
          <div className="footer-item">
            <h3>Galery</h3>
            <p>Kegiatan 2018</p>
            <p>Kegiatan 2019</p>
            <p>Kegiatan 2020</p>
            <p>Kegiatan 2021</p>
          </div>
        </div>
      </div>

      <div className="footer">
        © Pojok Baca Probolinggo 2022
      </div>
    </footer>
  </>
}






export default App