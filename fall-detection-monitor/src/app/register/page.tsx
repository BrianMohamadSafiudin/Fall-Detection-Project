"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nomorIdentitas: "",
    nomorWhatsApp: "",
    username: "",
    email: "",
    alamat: "",
    kabupatenKota: "",
    kecamatan: "",
    desaKelurahan: "",
    pekerjaan: "",
    instansi: "",
    password: "",
    ulangPassword: "",
    akunTelegram: ""
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const validateForm = () => {
    if (!formData.namaLengkap) return "Nama Lengkap harus diisi";
    if (!formData.nomorIdentitas) return "Nomor Identitas harus diisi";
    if (!formData.nomorWhatsApp) return "Nomor WhatsApp harus diisi";
    if (!/^\d{10,13}$/.test(formData.nomorWhatsApp)) return "Nomor WhatsApp harus terdiri dari 10-13 digit";
    if (!formData.username) return "Username harus diisi";
    if (!/^[a-zA-Z0-9]+$/.test(formData.username)) return "Username hanya boleh mengandung karakter alfanumerik";
    if (!formData.email) return "Email harus diisi";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Email tidak valid";
    if (!formData.alamat) return "Alamat harus diisi";
    if (!formData.kabupatenKota) return "Kabupaten/Kota harus diisi";
    if (!formData.kecamatan) return "Kecamatan harus diisi";
    if (!formData.desaKelurahan) return "Desa/Kelurahan harus diisi";
    if (!formData.pekerjaan) return "Pekerjaan harus diisi";
    if (!formData.instansi) return "Instansi harus diisi";
    if (!formData.password) return "Password harus diisi";
    if (!formData.ulangPassword) return "Ketik Ulang Password harus diisi";
    if (formData.password !== formData.ulangPassword) return "Password dan Ketik Ulang Password tidak sesuai";

    return "";
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addDataToFireStore = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setMessage({ type: "error", text: errorMessage });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000); // Hover pesan error 3 detik
      return;
    }

    console.log("Submitting form with data:", formData);
    const added = await addDataToFireStore(formData);
    if (added) {
      setMessage({ type: "success", text: "Registrasi berhasil! Anda akan diarahkan dalam 3 detik." });
      setTimeout(() => {
        router.push("/collapsediagram");
      }, 3000);
    } else {
      setMessage({ type: "error", text: "Registrasi gagal!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000); // Hover pesan error 3 detik
    }
  };

  const onSudahPunyaAkunClick = () => {
    router.push("/login");
  };

  return (
    <div className="w-full relative bg-gray-100 h-[1025px] overflow-hidden text-left text-sm text-black font-poppins">
      {message.text && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} message-tooltip`} role="alert">
          {message.text}
        </div>
      )}
      <div className="absolute top-[121px] left-[122px] w-[1196px] h-[779px]">
        <div className="absolute top-[0px] left-[0px] rounded-[37px] bg-white shadow-[0px_4px_20px_rgba(10,_40,_83,_0.05)] w-[1196px] h-[779px]" />
        <div className="absolute top-[31px] left-[121px] w-[954.3px] h-[716px]">
          <div className="absolute top-[0px] left-[410px] text-5xl font-medium text-center">
            REGISTRASI
          </div>
          <div
            className="absolute top-[695px] left-[389.3px] cursor-pointer"
            onClick={onSudahPunyaAkunClick}
          >
            <span>Sudah punya akun?</span>
            <span className="text-main"> MASUK</span>
          </div>
          <Form onSubmit={handleSubmit} className="absolute top-[71px] left-[0px] w-[954.3px] h-[589px] text-font-dis">
            <div className="row mb-3">
              <Form.Group className="col-md-6" controlId="namaLengkap">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control 
                  type="text" 
                  name="namaLengkap"
                  placeholder="Masukkan Nama Lengkap"
                  value={formData.namaLengkap}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-md-6" controlId="nomorIdentitas">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control 
                  type="text" 
                  name="nomorIdentitas"
                  placeholder="Masukkan Nomor Identitas"
                  value={formData.nomorIdentitas}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="row mb-3">
              <Form.Group className="col-md-6" controlId="nomorWhatsApp">
                <Form.Label>Nomor WhatsApp</Form.Label>
                <Form.Control 
                  type="text" 
                  name="nomorWhatsApp"
                  placeholder="Masukkan Nomor WhatsApp"
                  value={formData.nomorWhatsApp}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-md-6" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type="text" 
                  name="username"
                  placeholder="Masukkan Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="row mb-3">
              <Form.Group className="col-md-6" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  placeholder="Masukkan Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-md-6" controlId="akunTelegram">
                <Form.Label>Akun Telegram</Form.Label>
                <Form.Control 
                  type="text" 
                  name="akunTelegram"
                  placeholder="Masukkan Akun Telegram"
                  value={formData.akunTelegram}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control 
                type="text" 
                name="alamat"
                placeholder="Masukkan Alamat"
                value={formData.alamat}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="row mb-3">
              <Form.Group className="col-md-4" controlId="kabupatenKota">
                <Form.Label>Kabupaten/Kota</Form.Label>
                <Form.Control 
                  type="text" 
                  name="kabupatenKota"
                  placeholder="Masukkan Kabupaten/Kota"
                  value={formData.kabupatenKota}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="kecamatan">
                <Form.Label>Kecamatan</Form.Label>
                <Form.Control 
                  type="text" 
                  name="kecamatan"
                  placeholder="Masukkan Kecamatan"
                  value={formData.kecamatan}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-md-4" controlId="desaKelurahan">
                <Form.Label>Desa/Kelurahan</Form.Label>
                <Form.Control 
                  type="text" 
                  name="desaKelurahan"
                  placeholder="Masukkan Desa/Kelurahan"
                  value={formData.desaKelurahan}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="row mb-3">
              <Form.Group className="col-md-6" controlId="pekerjaan">
                <Form.Label>Pekerjaan</Form.Label>
                <Form.Control 
                  type="text" 
                  name="pekerjaan"
                  placeholder="Masukkan Pekerjaan"
                  value={formData.pekerjaan}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="col-md-6" controlId="instansi">
                <Form.Label>Instansi</Form.Label>
                <Form.Control 
                  type="text" 
                  name="instansi"
                  placeholder="Masukkan Instansi"
                  value={formData.instansi}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="row mb-3">
              <Form.Group className="col-md-6" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name="password"
                  placeholder="Masukkan Password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Form.Group>
              <Form.Group className="col-md-6" controlId="ulangPassword">
                <Form.Label>Ketik Ulang Password</Form.Label>
                <Form.Control 
                  type="password" 
                  name="ulangPassword"
                  placeholder="Ketik Ulang Password"
                  value={formData.ulangPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Form.Group>
            </div>
            <button type="submit" className="btn btn-primary w-100">DAFTAR</button>
          </Form>
        </div>
      </div>
      <style jsx>{`
        .message-tooltip {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          animation: fadeOut 3s forwards;
        }

        .alert-success {
          background-color: #d4edda;
          color: #155724;
          border-color: #c3e6cb;
        }

        .alert-error {
          background-color: #f8d7da;
          color: #721c24;
          border-color: #f5c6cb;
        }

        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RegisterForm;
