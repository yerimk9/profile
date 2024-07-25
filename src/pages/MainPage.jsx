import React, { useEffect } from "react";
import gsap from "gsap";

function MainPage(props) {
  useEffect(() => {
    const splitText = (el) => {
      el.innerHTML = el.textContent.replace(
        /(\S)/g,
        '<span class="char" style="display: inline-block; transform: translateY(100%); opacity: 0;">$1</span>'
      );
    };

    const title = document.querySelector(".intro-title");

    splitText(title);

    const timeline = gsap.timeline();

    timeline.to(".intro-title .char", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "bounce.out",
      duration: 2,
    });

    timeline.to(".intro-title .char", {
      opacity: (index, target) => {
        const char = target.textContent;
        return ["김", "포", "폴"].includes(char) ? 1 : 0;
      },
      duration: 1,
      ease: "power2.out",
    });

    timeline.set(
      ".intro-title .char",
      {
        display: (index, target) => {
          const char = target.textContent;
          return ["김", "포", "폴"].includes(char) ? "inline-block" : "none";
        },
      },
      "+=1" // Start 1 second after the previous animation ends
    );
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">김예림의포트폴리오</h1>
      </div>
    </div>
  );
}

export default MainPage;
