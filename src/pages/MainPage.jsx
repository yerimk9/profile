/* 
import React, { useEffect } from "react";
import gsap from "gsap";

function MainPage() {
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

    // 1. 텍스트가 나타나는 애니메이션
    timeline.to(".intro-title .char", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "bounce.out",
      duration: 2,
    });

    // 2. `김`, `포`, `폴`을 제외한 문자 사라지기 (자리 차지 유지)
    timeline.to(
      ".intro-title .char",
      {
        opacity: (index, target) => {
          const char = target.textContent;
          return ["김", "포", "폴"].includes(char) ? 1 : 0;
        },
        duration: 1,
        ease: "power2.out",
      },
      "+=1"
    ); // 1초 대기 후 실행

    // 3. 자리 차지 없애고 `김`, `포`, `폴`이 자연스럽게 붙도록 애니메이션
    timeline.to(
      ".intro-title",
      {
        letterSpacing: "0rem", // 문자 간격을 0으로 설정
        duration: 1.5,
        ease: "power2.out",
      },
      "+=0.5"
    ); // 0.5초 대기 후 실행

    // 4. `김`의 위치를 오른쪽으로 이동시키면서 자연스럽게 붙이기
    timeline.to(
      ".intro-title .char",
      {
        x: (index, target) => {
          const char = target.textContent;
          if (char === "김") {
            return 55; // `김`의 x 위치를 오른쪽으로 이동
          }
          return 0;
        },
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1, // 각 문자들이 조금씩 붙어가는 효과
      },
      "+=0.5"
    ); // 0.5초 대기 후 실행
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
 */
import React, { useEffect } from "react";
import gsap from "gsap";

function MainPage() {
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

    // 1. 텍스트가 나타나는 애니메이션
    timeline
      .to(".intro-title .char", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "bounce.out",
        duration: 2,
      })
      .to(
        ".intro-title .char",
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
      .to(".intro-title", {
        letterSpacing: "0rem", // 문자 간격을 0으로 설정
        duration: 1.5,
        ease: "power2.out",
      })
      .to(
        ".intro-title .char",
        {
          x: (index, target) => {
            const char = target.textContent;
            if (char === "김") {
              return 50; // `김`의 x 위치를 오른쪽으로 이동
            }
            return 0;
          },
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1, // 각 문자들이 조금씩 붙어가는 효과
        },
        "-=1" // `letterSpacing` 애니메이션과 동시에 시작
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
