import React from "react";
import "./Register.css";
import Car from "../../assets/images/img-mobil.png";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

export default function Register() {
  const responseGoogle = (response) => {
    console.log(response);
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
                <img src="images/logo-bcr.png" alt="" />
                <h1>Create New Account</h1>
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
                    Sign Up
                  </button>
                </form>
                <Link className="link" to={"/login"}>
                  Already have an account? Login.
                </Link>
                <p className="text-center mt-4">OR</p>
                <GoogleLogin
                  clientId="244205007996-2qn8pqps20lliai7gi5ephc45fpovqmn.apps.googleusercontent.com"
                  buttonText="Sign Up With Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                ></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
