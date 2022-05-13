import React, { useEffect, useState } from "react";
import "./Login.css";
import Car from "../../assets/images/img-mobil.png";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/images/logo-bcr.png";
import { gapi } from "gapi-script";

export default function Login() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const responseGoogle = (response) => {
    // console.log(response);
    localStorage.setItem("access_token", response.tokenObj.id_token);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "https://rent-car-appx.herokuapp.com/admin/auth/login",
        data: dataLogin,
      });
      // console.log(res.data);

      if (res.status === 201 && res.data.role === "admin") {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/dashboard", { replace: true });
      }

      if (res.status === 201 && res.data.role === "Customer") {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      alert("data yang anda masukan salah!");
      console.log(error);
      setDataLogin({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row login">
            <div className="col-8 left-side">
              <img
                src={Car}
                className="w-100 vh-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="col-4">
              <div className="form-head">
                <img src={Logo} alt="" />
                <h1>Sign In</h1>
              </div>

              <div className="form-content">
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Ex: johndee@gmail.com"
                    value={dataLogin.email}
                    onChange={(e) =>
                      setDataLogin({
                        ...dataLogin,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="6+ karakter"
                    value={dataLogin.password}
                    onChange={(e) =>
                      setDataLogin({
                        ...dataLogin,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit()}
                >
                  Sign In
                </button>

                <p className="text-center mt-4">OR</p>
                <GoogleLogin
                  clientId="244205007996-2qn8pqps20lliai7gi5ephc45fpovqmn.apps.googleusercontent.com"
                  buttonText="Sign In With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
