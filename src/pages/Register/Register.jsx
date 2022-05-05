import React from "react";
import "./Register.css";
import Car from "../../assets/images/img-mobil.png";

export default function Register() {
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
                <img src="images/logo-bcr.png" alt="" />
                <h1>Register</h1>
              </div>

              <div className="form-content">
                <form action="">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Contoh: johndee@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="6+ karakter"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
