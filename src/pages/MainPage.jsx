import React, { useState, useEffect } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import html5 from "../assets/pngs/html5.png";
import css3 from "../assets/pngs/css3.png";
import sass from "../assets/pngs/sass.png";
import tailwind from "../assets/pngs/tailwind_css.png";
import js from "../assets/pngs/js.png";
import ts from "../assets/pngs/typescript.png";
import react from "../assets/pngs/react.png";
import nextjs from "../assets/svgs/nextjs.svg";
import react_query from "../assets/pngs/react-query.png";
import redux_tookit from "../assets/pngs/redux_tookit.png";
import recoil from "../assets/pngs/recoil.png";
import phone from "../assets/svgs/phone.svg";
import mail from "../assets/svgs/mail.svg";
import github from "../assets/svgs/github.svg";
import notion from "../assets/pngs/notion.png";
import visual_studio from "../assets/pngs/visual-studio.png";
import npm from "../assets/pngs/npm.png";

function MainPage() {
  const [currentImage, setCurrentImage] = useState(
    "https://i.pinimg.com/originals/b5/9d/8f/b59d8f8cbb54368862109db8324dc6b8.jpg"
  );
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 768) {
      setCurrentImage(
        "https://i.pinimg.com/originals/b5/9d/8f/b59d8f8cbb54368862109db8324dc6b8.jpg"
      );
      setIsNavVisible(false);
      return;
    }

    const sections = document.querySelectorAll(".content");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const newImage = section.querySelector("img").src;
        setCurrentImage(newImage);
      }
    });
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth <= 768) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="main-container">
      <div className="bg">
        <div className="bg-wrap">
          <div className="bg-box bg-left"></div>
          <div className="bg-box bg-right">
            <div className="bg-box-inner">
              <div className="frame">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fix-content fix-right">
        <div className="f-sec">
          <div className="fix-img def img-1 f-ani">
            <div className="img-box">
              <img src={currentImage} alt="Profile" />
            </div>
          </div>
          <div className="center-txt">
            <p className="page-heading">
              <span className="page-sub">profile·about me </span>
              <p className="">김예림</p>
            </p>
          </div>
          <ScrollLink
            to="introduce"
            smooth={true}
            duration={1000}
            className="read_more scroll"
          >
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>d</span>
            <span>&nbsp;</span>
            <span>m</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
          </ScrollLink>
        </div>
        <Element name="introduce">
          <section className="content img-change">
            <div className="fix-img">
              <div className="img-box">
                <img
                  src="https://i.pinimg.com/originals/43/75/f3/4375f345717c2b75bc4bf6dd31782189.jpg"
                  alt="img2"
                />
              </div>
            </div>
            <div className="inner-content">
              <div className="txt-wrap">
                <p className="sub-heading">
                  <span className="num">00</span>
                  자기소개
                </p>
                <p className="sec-heading">김예림</p>
                <div className="sec-txt">
                  <p className="p1">프론트엔드 개발자를 꿈꾸며,</p>
                  {/* <p className="p1">디자인 파트너 “여기” 주재</p> */}
                  <p>&nbsp;</p>
                  <p className="p1">주식회사 코스기유 커먼 디자이너</p>
                  <p>주식회사 추출사 커먼 디자이너</p>
                  <p className="p1">
                    주식회사 목욕탕 구라시 아트 디렉터/디자이너
                  </p>
                  <p>&nbsp;</p>
                  <p className="p1">
                    사이타마현 사이타마시 출생. 나가노현 스와시 거주{" "}
                    <span className="s1">2022</span>년{" "}
                    <span className="s1">11</span> 월~). 디자인계 대학을 졸업
                    후, 디자인 제작 회사에서 그래픽 디자이너를 거쳐{" "}
                    <span className="s1">2020</span> 년 독립. 로고 디자인을
                    비롯해 각종 그래픽, 웹, 사인 계획 등의 「표시」를 만들고,
                    「여기」가 즐길 때까지를 디자인할 수 있도록 시도하고
                    있습니다.
                    <span className="s1">2021</span> 년부터 주식회사 고스기유와
                    주식회사 목욕탕 구라시, 2023년부터 주식회사 추출사에 참가{" "}
                    <span className="s1">2023</span> 년 법인화, 주식회사 온후
                    설립.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="skill" className="skills-container">
          <section className="content img-change">
            <div className="fix-img">
              <div className="img-box">
                <img
                  src="https://i.pinimg.com/originals/84/02/c2/8402c2436eed42595ce03ea36a9947d6.jpg"
                  alt="img2"
                />
              </div>
            </div>
            <div className="inner-content">
              <div className="txt-wrap">
                <p className="sub-heading">
                  <span className="num">01</span>
                  스킬
                </p>
                <p className="sub-heading">FRONT-END SKILL</p>
                <div className="skill-container">
                  <ul>
                    <li>
                      <img src={html5} alt="html5" />
                      <div>
                        <p>HTML5</p>
                        <p>
                          웹접근성, 표준성을 준수하며 시멘틱태그를 이용해 마크업
                          할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={css3} alt="css3" />
                      <div>
                        <p>CSS3</p>
                        <p>
                          CSS3를 이용해 다양한 스타일링과 애니메이션을 구현할 수
                          있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={sass} alt="sass" />
                      <div>
                        <p>SCSS</p>
                        <p>
                          SCSS를 사용해 중첩, 변수, 연산자, 조건문, 반복문 등을
                          활용할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={tailwind} alt="tailwind" />
                      <div>
                        <p>tailwind CSS</p>
                        <p>
                          미리 세팅된 유틸리티 클래스를 활용해 HTML 코드 내에서
                          스타일링할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={js} alt="js" />
                      <div>
                        <p>JavaScript</p>
                        <p>
                          JavaScript를 사용해 다양한 기능과 동적인 웹 페이지를
                          구현할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={ts} alt="ts" />
                      <div>
                        <p>TypeScript</p>
                        <p>
                          TypeScript를 사용해 더 안전하고 유지보수 가능한 코드를
                          작성할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={react} alt="react" />
                      <div>
                        <p>React</p>
                        <p>
                          React를 사용해 컴포넌트 기반의 인터랙티브한 사용자
                          인터페이스를 구현할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={nextjs} alt="nextjs" />
                      <div>
                        <p>Next.js</p>
                        <p>
                          Next.js를 사용해 서버사이드 렌더링과 클라이언트사이드
                          렌더링을 적절히 활용할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={react_query} alt="react_query" />
                      <div>
                        <p>React Query</p>
                        <p>
                          React Query를 사용해 데이터 캐싱을 통해 반복적인
                          비동기 데이터 호출을 방지할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={redux_tookit} alt="redux_tookit" />
                      <div>
                        <p>Redux-Tookit</p>
                        <p>
                          Redux Toolkit을 사용해 간편하게 상태 관리와 비동기
                          로직을 구현할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={recoil} alt="recoil" />
                      <div>
                        <p>Recoil</p>
                        <p>
                          Recoil을 사용해 React의 Context API와 유사한 방식으로
                          컴포넌트 내에서 상태를 관리할 수 있습니다
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="txt-wrap">
                <p className="sub-heading">USING TOOL</p>
                <div className="skill-container">
                  <ul>
                    <li>
                      <img src={visual_studio} alt="visual_studio" />
                      <div>
                        <p>VS Code</p>
                        <p>
                          Visual Studio Code(VSCode)를 주로 사용하는 코딩
                          툴이며, 코딩에 편리한 확장 프로그램들을 설치해
                          사용하고 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={github} alt="github" />
                      <div>
                        <p>Github</p>
                        <p>
                          VSCode와 연동된 GitHub을 사용하여 각 기능마다 올리고
                          있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={notion} alt="notion" />
                      <div>
                        <p>Notion</p>
                        <p>
                          Notion을 통해 프로젝트 일지, 회고록, 트러블슈팅 등을
                          정리하고 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={npm} alt="npm" />
                      <div>
                        <p>NPM</p>
                        <p>
                          프로젝트 세팅과 라이브러리 설치 시 NPM을 사용하고
                          있습니다.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="project-1">
          <section className="content img-change">
            <div className="fix-img">
              <div className="img-box">
                <img
                  src="https://i.pinimg.com/originals/f2/b5/5e/f2b55eb862091d8c61a48da100811c98.jpg"
                  alt="img2"
                />
              </div>
            </div>
            <div className="inner-content">
              <div className="txt-wrap">
                <p className="sub-heading">
                  <span className="num">02</span>
                  프로젝트 - 1
                </p>
                <p className="sec-heading">김예림</p>
                <div className="sec-txt">
                  <p className="p1">주식회사 온후 대표</p>
                  <p className="p1">디자인 파트너 “여기” 주재</p>
                  <p>&nbsp;</p>
                  <p className="p1">주식회사 코스기유 커먼 디자이너</p>
                  <p>주식회사 추출사 커먼 디자이너</p>
                  <p className="p1">
                    주식회사 목욕탕 구라시 아트 디렉터/디자이너
                  </p>
                  <p>&nbsp;</p>
                  <p className="p1">
                    사이타마현 사이타마시 출생. 나가노현 스와시 거주{" "}
                    <span className="s1">2022</span>년{" "}
                    <span className="s1">11</span> 월~). 디자인계 대학을 졸업
                    후, 디자인 제작 회사에서 그래픽 디자이너를 거쳐{" "}
                    <span className="s1">2020</span> 년 독립. 로고 디자인을
                    비롯해 각종 그래픽, 웹, 사인 계획 등의 「표시」를 만들고,
                    「여기」가 즐길 때까지를 디자인할 수 있도록 시도하고
                    있습니다.
                    <span className="s1">2021</span> 년부터 주식회사 고스기유와
                    주식회사 목욕탕 구라시, 2023년부터 주식회사 추출사에 참가{" "}
                    <span className="s1">2023</span> 년 법인화, 주식회사 온후
                    설립.
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <section className="content img-change">
          <div className="fix-img">
            <div className="img-box">
              <img
                src="https://i.pinimg.com/originals/f2/b5/5e/f2b55eb862091d8c61a48da100811c98.jpg"
                alt="img2"
              />
            </div>
          </div>
          <div className="inner-content">
            <div className="txt-wrap">
              <p className="sub-heading">
                <span className="num">03</span>
                프로젝트 - 2
              </p>
              <p className="sec-heading">김예림</p>
              <div className="sec-txt">
                <p className="p1">주식회사 온후 대표</p>
                <p className="p1">디자인 파트너 “여기” 주재</p>
                <p>&nbsp;</p>
                <p className="p1">주식회사 코스기유 커먼 디자이너</p>
                <p>주식회사 추출사 커먼 디자이너</p>
                <p className="p1">
                  주식회사 목욕탕 구라시 아트 디렉터/디자이너
                </p>
                <p>&nbsp;</p>
                <p className="p1">
                  사이타마현 사이타마시 출생. 나가노현 스와시 거주{" "}
                  <span className="s1">2022</span>년{" "}
                  <span className="s1">11</span> 월~). 디자인계 대학을 졸업 후,
                  디자인 제작 회사에서 그래픽 디자이너를 거쳐{" "}
                  <span className="s1">2020</span> 년 독립. 로고 디자인을 비롯해
                  각종 그래픽, 웹, 사인 계획 등의 「표시」를 만들고, 「여기」가
                  즐길 때까지를 디자인할 수 있도록 시도하고 있습니다.
                  <span className="s1">2021</span> 년부터 주식회사 고스기유와
                  주식회사 목욕탕 구라시, 2023년부터 주식회사 추출사에 참가{" "}
                  <span className="s1">2023</span> 년 법인화, 주식회사 온후
                  설립.
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </section>

        <Element name="sns">
          <section className="other-content">
            <div className="sns-box">
              <div className="flex-box">
                <p className="tit">SNS</p>
                <div className="list">
                  <ul>
                    <li>
                      <a href="tel:010-9921-2811" className="flex-box">
                        <div className="icon">
                          <img src={phone} alt="phone" />
                        </div>
                        <div className="txt-box">
                          <p>
                            <span>PHONE</span>
                            010-9921-2811
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:rhrh037@naver.com"
                        className="flex-box"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="icon">
                          <img src={mail} alt="mail" />
                        </div>
                        <div className="txt-box">
                          <p>
                            <span>E-MAIL</span>
                            rhrh037@naver.com
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/yerimk9"
                        className="flex-box"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="icon">
                          <img src={github} alt="github" />
                        </div>
                        <div className="txt-box">
                          <p>
                            <span>GHTHUB</span>
                            https://github.com/yerimk9
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://ajar-dolphin-d6b.notion.site"
                        className="flex-box"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="icon">
                          <img src={notion} alt="notion" />
                        </div>
                        <div className="txt-box">
                          <p>
                            <span>NOTION</span>
                            http://ajar-dolphin-d6b.notion.site
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <div className="fix-content fix-left">
          <div className="box-top">
            <h1 className="header_title">
              <div className="titleLogo-container">
                <div className="titleLogo-content">
                  <svg
                    className="titleLogo-subTitle"
                    viewBox="0 0 450 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="curve"
                      d="M10,70 C150,20 390,10 690,65"
                      fill="transparent"
                    />
                    <text>
                      <textPath
                        href="#curve"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        welcome
                      </textPath>
                    </text>
                  </svg>
                  <h1 className="titleLogo-title">김포폴</h1>
                </div>
              </div>
            </h1>
          </div>
          <div className="box-middle">
            <div className="img-box"></div>
          </div>
          <div className={`box-bottom ${isNavVisible ? "" : "hidden"}`}>
            <nav className="nav">
              <ul className="nav_lists">
                <li className="nav_list">
                  <ScrollLink
                    to="introduce"
                    smooth={true}
                    duration={1000}
                    className="nav_link"
                    href="/"
                  >
                    Introduction<span>소개</span>
                  </ScrollLink>
                </li>
                <li className="nav_list">
                  <ScrollLink
                    to="skill"
                    smooth={true}
                    duration={1000}
                    className="nav_link"
                    href="/"
                  >
                    Skill<span>스킬</span>
                  </ScrollLink>
                </li>
                <li className="nav_list">
                  <ScrollLink
                    className="nav_link"
                    to="project-1"
                    smooth={true}
                    duration={1000}
                    href="/"
                  >
                    Project<span>프로젝트</span>
                  </ScrollLink>
                </li>
                <li className="nav_list">
                  <ScrollLink
                    to="sns"
                    smooth={true}
                    duration={1000}
                    href="/"
                    className="nav_link"
                  >
                    SNS<span>소셜미디어</span>
                  </ScrollLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="nav_trigger" onClick={toggleNav}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
