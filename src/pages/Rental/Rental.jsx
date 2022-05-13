import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterRental from "../../components/FooterRental/FooterRental";
import FormRental from "../../components/FormRental/FormRental";
import HeaderRental from "../../components/HeaderRental/HeaderRental";
import NavbarRental from "../../components/NavbarRental/NavbarRental";

function Rental() {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      window.location.href = "/register";
    }
  });

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/register", { replace: true });
  };
  return (
    <>
      <NavbarRental logout={() => handleLogout()} />
      <HeaderRental />
      <FormRental />
      <FooterRental />
    </>
  );
}

export default Rental;
