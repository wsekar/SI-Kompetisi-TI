var dbConn = require("../../config/db.config");

var Informasi = function (informasi) {
  this.judul_informasi = informasi.judul;
  this.isi_informasi = informasi.isi;
  // this.gambar = informasi.gambar;
};

// get semua data informasi
Informasi.getAllInformation = (result) => {
  dbConn.query("SELECT * FROM information", (err, res) => {
    if (err) {
      console.log("Kesalahan saat mengambil data informasi", err);
      result(null, err);
    } else {
      console.log("Data informasi berhasil diambil");
      result(null, res);
    }
  });
};

// get semua data informasi berdasarkan judulnya
Informasi.getInformasiByTitle = (judul_informasi, result) => {
  dbConn.query(
    "SELECT * FROM information WHERE judul_informasi=?",
    judul_informasi,
    (err, res) => {
      if (err) {
        console.log(
          "Kesalahan saat mengambil data informasi berdasarkan id",
          err
        );
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// menambahkan data informasi
Informasi.createInformasi = (informasiReqData, result) => {
  dbConn.query(
    "INSERT INTO information SET ?",
    informasiReqData,
    (err, res) => {
      if (err) {
        console.log("Kesalahan saat menambahkan data informasi");
        result(null, err);
      } else {
        console.log("Berhasil menambahkan data informasi");
        result(null, res);
      }
    }
  );
};

// get data informasi by ID untuk update data
Informasi.getInformasiByID = (id, result) => {
  dbConn.query("SELECT * FROM information WHERE id=?", id, (err, res) => {
    if (err) {
      console.log(
        "Kesalahan saat mengambil data informasi berdasarkan id",
        err
      );
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// update informasi
Informasi.updateInformasi = (id, informasiReqData, result) => {
  dbConn.query(
    "UPDATE information SET judul_informasi=?,isi_informasi=? WHERE id = ?",
    [
      informasiReqData.judul_informasi,
      informasiReqData.isi_informasi,
      // informasiReqData.gambar,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Kesalahan saat memperbarui data informasi");
        result(null, err);
      } else {
        console.log("Data informasi berhasil diperbarui");
        result(null, res);
      }
    }
  );
};

// hapus data informasi
Informasi.deleteInformasi = (id, result) => {
  dbConn.query("DELETE FROM information WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("Kesalahan saat menghapus data informasi");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Informasi;
