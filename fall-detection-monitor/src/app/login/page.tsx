"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs, query, where } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { db } from "../../firebaseConfig";

const LOGINFORM = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Attempting to login with email:", email);

    try {
      const q = query(collection(db, "users"), where("email", "==", email), where("password", "==", password));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // User found
        setMessage({ type: "success", text: "Login Berhasil! Anda akan diarahkan dalam 3 detik." });
        setTimeout(() => {
          router.push("/collapsediagram");
        }, 3000);
      } else {
        // User not found
        setMessage({ type: "error", text: "Email atau password salah!" });
        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      }
    } catch (e) {
      console.error("Error logging in: ", e);
      setMessage({ type: "error", text: "Login failed! Error: " + e.message });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  const onBelumPunyaAkunClick = () => {
    router.push("/register");
  };

  return (
    <div className="w-full relative bg-gray-100 h-[1025px] overflow-hidden text-left text-sm text-black font-poppins">
      {message.text && (
        <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} message-tooltip`} role="alert">
          {message.text}
        </div>
      )}
      <div className="absolute top-[273px] left-[240px] w-[960px] h-[480px]">
        <div className="absolute top-[0px] left-[0px] w-[960px] h-[480px]">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] w-[960px] h-[480px]" />
          <div className="absolute top-[59px] left-[528px] w-[380px] h-[362px]">
            <div className="absolute top-[0px] left-[154px] text-5xl font-medium inline-block w-[75px] h-[37.5px]">
              MASUK
            </div>
            <div
              className="absolute top-[340px] left-[92px] text-left inline-block w-[214px] h-[22px] cursor-pointer"
              onClick={onBelumPunyaAkunClick}
            >
              <span>{`Belum punya akun? `}</span>
              <span className="text-main">DAFTAR</span>
            </div>
            <Form onSubmit={handleLogin} style={{ marginTop: "50px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-left w-full">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-left w-full">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="mb-3 text-right">
                <span className="text-main cursor-pointer">‎</span>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                MASUK
              </button>
            </Form>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[480px] h-[480px]">
          <div className="absolute top-[0px] left-[0px] rounded-21xl bg-white w-[480px] h-[480px]" />
          <div className="absolute h-[88.67%] w-[90.15%] top-[11.25%] right-[4.65%] bottom-[0.08%] left-[5.21%]">
            <div className="absolute h-[62.88%] w-full top-[0%] right-[0%] bottom-[37.12%] left-[0%]">
              <img
                className="absolute h-[43.27%] w-[10.79%] top-[15.51%] right-[89.21%] bottom-[41.22%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-40-stroke.svg"
              />
              <img
                className="absolute h-full w-[78.48%] top-[0%] right-[10.63%] bottom-[0%] left-[10.89%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/deco.svg"
              />
              <div className="absolute h-[74.93%] w-[94.89%] top-[5.98%] right-[0%] bottom-[19.1%] left-[5.11%]">
                <div className="absolute h-[22.59%] w-[18.31%] top-[0%] right-[4.46%] bottom-[77.41%] left-[77.23%]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle-28.svg"
                  />
                  <div className="absolute h-[40.62%] w-[68.22%] top-[18.1%] right-[15.82%] bottom-[41.28%] left-[15.96%]">
                    <div className="absolute h-[18.48%] w-[64.91%] top-[0%] right-[35.09%] bottom-[81.52%] left-[0%] rounded-6xs bg-white" />
                    <div className="absolute h-[18.48%] w-full top-[40.76%] right-[0%] bottom-[40.76%] left-[0%] rounded-6xs bg-white" />
                    <div className="absolute h-[18.48%] w-[91.81%] top-[81.52%] right-[8.19%] bottom-[0%] left-[0%] rounded-6xs bg-white" />
                  </div>
                </div>
                <div className="absolute h-[17.11%] w-[13.96%] top-[70.27%] right-[86.04%] bottom-[12.62%] left-[0%]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-31xl max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/rectangle-29.svg"
                  />
                  <div className="absolute h-[35.86%] w-[57.77%] top-[18.66%] right-[27.75%] bottom-[45.48%] left-[14.49%]">
                    <div className="absolute h-[18.7%] w-[25.68%] top-[0%] right-[74.32%] bottom-[81.3%] left-[0%] rounded-6xs bg-white" />
                    <div className="absolute h-[18.7%] w-[47.43%] top-[40.65%] right-[52.57%] bottom-[40.65%] left-[0%] rounded-6xs bg-white" />
                    <div className="absolute h-[18.7%] w-full top-[81.3%] right-[0%] bottom-[0%] left-[0%] rounded-6xs bg-white" />
                  </div>
                </div>
                <img
                  className="absolute h-[39.75%] w-[20.04%] top-[60.3%] right-[-0.02%] bottom-[-0.05%] left-[79.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/deco1.svg"
                />
              </div>
            </div>
            <img
              className="absolute h-[54.18%] w-[90.92%] top-[45.82%] right-[6.38%] bottom-[0%] left-[2.7%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/person@2x.png"
            />
          </div>
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

export default LOGINFORM;
