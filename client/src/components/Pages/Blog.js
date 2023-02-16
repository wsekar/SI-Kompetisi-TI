import React from "react";
import "./Button.css";
import robot from './Robot.png';
import buku from './Buku.png';

export const Blog = () => {
  return (
    <div class="container">
      <div class="flex-container">
        <div>
          <h2>Robotika</h2>
          <p>Robotika adalah satu cabang teknologi yang berhubungan dengan desain, konstruksi, operasi, disposisi struktural, pembuatan, dan aplikasi dari robot.[1] Robotika terkait dengan ilmu pengetahuan bidang elektronika, mesin, mekanika, dan perangkat lunak komputer.[2]

            Pemikiran tentang pembuatan mesin yang dapat bekerja sendiri telah ada sejak Era Klasik, tetapi riset mengenai penggunaannya tidak berkembang secara berarti sampai abad ke-20.[3] Kini, banyak robot melakukan pekerjaan yang berbahaya bagi manusia seperti menjinakkan bom, menjelajahi kapal karam, dan pertambangan.</p>
          <button class="button-21" role="button">Join Class</button>
        </div>
        <div><img src={robot} class="card-img-top" alt="..." width="100%" height="300px" /></div>
      </div>
      <div class="flex-container">
        <div><img src={buku} class="card-img-top" alt="..." width="100%" height="300px" /></div>
        <div>
          <h2>Penulisan Ilmiah</h2>
          <p>Karya tulis ilmiah, merupakan gabungan dari tiga suku kata. menurut Kamus Besar Bahasa Indonesia, karya, dapat diartikan sebagai hasil sebuah usaha, upaya, perbuatan atau ciptaan, sedangkan tulis, atau menulis memiliki arti segala kegiatan yang terkait dengan huruf, angka, pena, atau media tulis yang lain.</p>
          <button class="button-21" role="button">Join Class</button>
        </div>
      </div>
    </div>
  );
};

