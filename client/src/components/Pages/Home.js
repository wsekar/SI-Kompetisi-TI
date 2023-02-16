import "./Home.css";
import React from "react";
import Foto from "./se.jpeg";

export const Home = () => {
  return (
    <div class="container">
      <div class="flex-container">
        <div>
          <h2>D3 TI PSDKU</h2>
          <p id="container_desk" onclick="deskripsiatas()">
            Program Studi DIII Teknik Informatika PSDKU Madiun memiliki keunikan
            dan keunggulan di bidang teknologi informasi yang secara spesifik
            untuk mendukung pengembangan sistem dan aplikasi e-government.
            Selain berdasarkan kajian tersebut, pemerintah kabupaten madiun
            menginisiasi berdirinya DIII PSDKU sebagai upaya untuk pemenuhan
            tenaga ahli di bidang Teknologi Informasi untuk mendukung
            penyelesaian permasalahan-permasalahan di pemerintahan di era
            industri 4.0 atau Goverment 4.0.
          </p>
        </div>
        <div>
          <img
            src={Foto}
            class="card-img-top"
            alt="..."
            width="100%"
            height="300px"
          />
        </div>
      </div>
      <header class="masthead clear">
        <div class="centered"></div>
      </header>

      <main class="main-area">
        <div class="center">
          <section class="cards">
            <article class="card">
              <a href="#">
                <picture class="thumbnail">
                  <img
                    src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
                    alt="A banana that looks like a bird"
                  />
                </picture>
                <div class="card-content">
                  <h2>Vacation Image 01</h2>
                  <p>
                    TUX re-inventing the wheel, and move the needle. Feature
                    creep dogpile that but diversify kpis but market-facing.
                  </p>
                </div>
              </a>
            </article>

            <article class="card">
              <a href="#">
                <picture class="thumbnail">
                  <img
                    src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-02.jpg"
                    alt="Norwegian boller"
                  />
                </picture>
                <div class="card-content">
                  <h2>Vacation Image 02</h2>
                  <p>
                    Staff engagement synergize productive mindfulness and waste
                    of resources cross sabers, or forcing function shotgun
                    approach drink the Kool-aid.
                  </p>
                  <p>
                    Execute are we in agreeance what do you feel you would bring
                    to the table if you were hired for this position, nor closer
                    to the metal goalposts, are there any leftovers in the
                    kitchen?.
                  </p>
                </div>
              </a>
            </article>

            <article class="card">
              <a href="#">
                <picture class="thumbnail">
                  <img
                    src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-03.jpg"
                    alt="A dinosaur wearing an aluminium jacket"
                  />
                </picture>
                <div class="card-content">
                  <h2>Vacation Image 03</h2>
                  <p>
                    Viral engagement anti-pattern back of the net, for meeting
                    assassin horsehead offer. Loop back design thinking
                    drop-dead date.{" "}
                  </p>
                </div>
              </a>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};
