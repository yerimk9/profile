import React, { useEffect } from "react";
import gsap from "gsap";

function Logo() {
  useEffect(() => {
    const splitText = (el) => {
      el.innerHTML = el.textContent.replace(
        /(\S)/g,
        '<span class="char" style="display: inline-block; transform: translateY(100%); opacity: 0;">$1</span>'
      );
    };

    const title = document.querySelector(".logo-title");

    if (title) {
      splitText(title);

      const timeline = gsap.timeline();

      timeline
        .to(".logo-title .char", {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "bounce.out",
          duration: 2,
        })
        .to(
          ".logo-title .char",
          {
            opacity: (index, target) => {
              const char = target.textContent;
              return ["김", "포", "폴"].includes(char) ? 1 : 0;
            },
            duration: 1,
            ease: "power2.out",
          },
          "+=1"
        )
        .to(".logo-title", {
          letterSpacing: "0rem",
          duration: 1.5,
          ease: "power2.out",
        })
        .to(
          ".logo-title .char",
          {
            x: (index, target) => {
              const char = target.textContent;
              if (char === "김") {
                return 50;
              }
              return 0;
            },
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=1"
        )
        .to(
          ".logo-subTitle",
          {
            y: "13%",
            opacity: 1,
            ease: "bounce.out",
            duration: 1,
          },
          "-=0.5"
        );
    }
  }, []);

  return (
    <div className="logo-container">
      <div className="logo-content">
        <svg
          className="logo-subTitle"
          viewBox="0 0 500 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve"
            d="M10,65 C150,10 350,10 490,80"
            fill="transparent"
          />
          <text>
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              welcome
            </textPath>
          </text>
        </svg>
        <h1 className="logo-title">김예림의포트폴리오</h1>
      </div>
    </div>
  );
}

export default Logo;

// tdfsa
