import React from "react";
import Mobil from "../../assets/images/img_carmobil.png";
import "./HeaderRental.css";

function HeaderRental() {
  return (
    <>
      <section class="hero py-5" id="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 align-self-center mt-5">
              <h2 class="pb-3">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>
              <p class="pb-3">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas <br /> terbaik dengan harga terjangkau. Selalu siap
                melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
              </p>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="hero-img">
                <img class="img-fluid" src={Mobil} alt="hero images" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderRental;
