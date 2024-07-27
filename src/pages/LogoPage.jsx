import React, { useEffect } from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function LogoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(".logo-container", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          navigate("/home");
        },
      });
    }, 9000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <Logo />;
}

export default LogoPage;
