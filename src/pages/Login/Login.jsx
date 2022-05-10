import React from "react";
import "./Login.css";
import Car from "../../assets/images/img-mobil.png";
import GoogleLogin from "react-google-login";

export default function Login() {
  // const handleFailure = (result) => {
  //   console.log(result);
  // };

  // const handleLogin = (googleData) => {
  //   console.log(googleData);
  // };

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
                <h1>Welcome back</h1>
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
                    Sign In
                  </button>
                </form>
                <p className="text-center mt-4">OR</p>
                <GoogleLogin
                  clientId="244205007996-2qn8pqps20lliai7gi5ephc45fpovqmn.apps.googleusercontent.com"
                  buttonText="Login With Google"
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
