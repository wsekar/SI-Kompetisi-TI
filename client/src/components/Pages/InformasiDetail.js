
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Informasi.css";


function InformasiDetail() {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);

  const [user, setUser] = useState({
    judul: "",
    isi: "",
  });

  //  Object Destructuring
  const { judul, isi } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records
  const loadInformasiDetail = async () => {
    var response = fetch("http://localhost:5000/api/v1/informasi")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setRecord(myJson);
      });
  };
  useEffect(() => {
    loadInformasiDetail();
  }, []);

  // Insert informasi Records
  const submitInformasiRecord = async (e) => {
    e.preventDefault();
    e.target.reset();
    await axios.post("http://localhost:5000/api/v1/informasi", user);
    alert("Data Ditambahkan");

    loadInformasiDetail();
  };

  // Search Records here
  const searchRecords = () => {
    alert(search);
    axios
      .get(`http://localhost:5000/api/v1/informasi/searchRecord/${search}`)
      .then((response) => {
        setRecord(response.data);
      });
  };

  // Delete informasi Record
  const deleteRecord = (productId) => {
    axios
      .delete(`http://localhost:5000/api/v1/informasi/${productId}`)
      .then((result) => {
        loadInformasiDetail();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  return (

<div class="ikiform">
    <section>
        <form onSubmit={submitInformasiRecord}>
          <h5 className="mb-3 ">Masukkan Kritik Dan Saran Anda</h5>
          <div class="form-group">
            <label>
              <strong>Nama Panjang</strong>
            </label>
            <input
              type="text"
              class="form-control  mb-4"
              name="judul"
              value={judul}
              onChange={(e) => onInputChange(e)}
              placeholder="Masukkan Nama Panjang"
              required=""
            />
          </div>

            <label>
              <strong>Kritik Dan Saran</strong>
            </label>
            <input
              type="text"
              class="form-control mb-4"
              name="isi"
              value={isi}
              onChange={(e) => onInputChange(e)}
              placeholder="Masukkan Kritik Dan Saran"
              required=""
            ></input>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
  </section>
  </div>
  );
}

export default InformasiDetail;
