const express = require("express");
const router = express.Router();

const informasiController = require("../controllers/informasi.controller");

// get all employees
router.get("/", informasiController.getInformasiList);

// get employee by ID
router.get("/:id", informasiController.getInformasiByID);

// get ID for Update
router.get(
  "/searchRecord/:judul_informasi",
  informasiController.getInformasiByTitle
);

// create new employee
router.post("/", informasiController.createNewInformasi);

// update employee
router.put("/:id", informasiController.updateInformasi);

// delete employee
router.delete("/:id", informasiController.deleteInformasi);

module.exports = router;
