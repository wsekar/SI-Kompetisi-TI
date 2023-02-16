const InformasiModel = require("../models/informasi.model");

// get semua list data informasi lomba
exports.getInformasiList = (req, res) => {
  InformasiModel.getAllInformation((err, information) => {
    console.log("We are here");
    if (err) res.send(err);
    console.log("Informasi Lomba", information);
    res.send(information);
  });
};

// get informasi by Name for earch by Name
exports.getInformasiByTitle = (req, res) => {
  //console.log('get emp by id');
  InformasiModel.getInformasiByTitle(
    req.params.judul_informasi,
    (err, informasi) => {
      if (err) res.send(err);
      console.log("single informasi data", informasi);
      res.send(informasi);
    }
  );
};

// create new informasi
exports.createNewInformasi = (req, res) => {
  const informasiReqData = new InformasiModel(req.body);
  console.log("informasiReqData", informasiReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    InformasiModel.createInformasi(informasiReqData, (err, informasi) => {
      if (err) res.send(err);
      res.json({
        status: true,
        message: "Data Informasi Lomba Berhasil Ditambahkan!",
        data: informasi.insertId,
      });
    });
  }
};

// get informasi by ID  for Update
exports.getInformasiByID = (req, res) => {
  //console.log('get emp by id');
  InformasiModel.getInformasiByID(req.params.id, (err, informasi) => {
    if (err) res.send(err);
    console.log("single informasi data", informasi);
    // res.json({"first_name":"Dheeraj"});
    res.send(JSON.stringify({ status: 200, error: null, response: informasi }));
  });
};

// update informasi
exports.updateInformasi = (req, res) => {
  const informasiReqData = new InformasiModel(req.body);
  console.log("informasiReqData update", informasiReqData);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: "Please fill all fields" });
  } else {
    InformasiModel.updateInformasi(
      req.params.id,
      informasiReqData,
      (err, informasi) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Data Informasi Lomba Berhasil Diperbarui!",
        });
      }
    );
  }
};

// delete informasi
exports.deleteInformasi = (req, res) => {
  InformasiModel.deleteInformasi(req.params.id, (err, informasi) => {
    if (err) res.send(err);
    res.json({
      success: true,
      message: "Data Informasi Lomba Berhasil Dihapus!",
    });
  });
};
