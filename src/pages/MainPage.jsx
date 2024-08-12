import React, { useState, useEffect } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import {
  html5,
  css3,
  sass,
  tailwind_css,
  js,
  ts,
  react,
  react_query,
  redux_tookit,
  recoil,
  phone,
  mail,
  github,
  notion,
  blog,
  visual_studio,
  npm,
  jejubus,
  newsroom,
  nextjs,
  bg1Img,
  bg2Img,
  semi,
} from "../assets";
import Nav from "../components/Nav";
import SmallLogo from "../components/SmallLogo";

function MainPage() {
  const [currentImage, setCurrentImage] = useState(bg1Img);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 768) {
      setCurrentImage(bg1Img);
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
            <div className="page-heading">
              <span className="page-sub">profile·about me </span>
              <p className="">김예림</p>
            </div>
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
                <img src={bg1Img} alt="img2" />
              </div>
            </div>
            <div className="inner-content">
              <div className="txt-wrap">
                <p className="sub-heading">
                  <span className="num">00</span>
                  자기소개
                </p>
                <p className="sec-heading">김예림</p>
                <div className="sec-txt introduce-content-container">
                  <p className="introduce-heading">학력</p>
                  <ul>
                    <li>
                      <p className="school-name">
                        경기대학교 AI 컴퓨터공학부 컴퓨터공학전공
                      </p>
                      <div className="edu-date">
                        2021.03.01 ~ 2022.01.10 (중퇴)
                      </div>
                    </li>
                    <li>
                      <p className="school-name">부경대학교 경영학부</p>
                      <div className="edu-date">
                        2022.03.02 ~ 2023.03.23 (중퇴)
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sec-txt introduce-content-container">
                  <p className="introduce-heading">교육</p>

                  <ul>
                    <li>
                      <p className="edu-name">
                        {" "}
                        스마트 관광을 위한 AI 웹서비스 개발{" "}
                      </p>
                      <div className="edu-date">2023.06.05 ~ 2023.07.31</div>
                      <ul>
                        <li>- 웹서비스 및 개발 환경에 대한 이해</li>
                        <li>- HTML5, CSS3 기본 지식 및 마크업 능력</li>
                        <li>- JavaScript에 대한 이해</li>
                      </ul>
                    </li>
                    <li className="mt-10">
                      <p className="edu-name">
                        제로베이스 프론트엔드 취업 스쿨 19기
                      </p>
                      <div className="edu-date">2023.09.01 ~ 2024.04.02</div>
                      <ul>
                        <li>- HTML, CSS, SCSS를 이용한 클론코딩</li>
                        <li>- JavaScript 개념 정리 및 활용 프로젝트</li>
                        <li>- React 개념 정리 및 활용 프로젝트</li>
                        <li>- 컴퓨터공학 지식(CS) - 자료구조 / 알고리즘</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="skill" className="skills-container">
          <section className="content img-change">
            <div className="fix-img">
              <div className="img-box">
                <img src={bg2Img} alt="img2" />
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
                      <img src={tailwind_css} alt="tailwind_css" />
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
                <img src={bg2Img} alt="img2" />
              </div>
            </div>
            <div className="inner-content">
              <div className="txt-wrap">
                <p className="sub-heading">
                  <span className="num">02</span>
                  프로젝트 - 1
                </p>
                <p className="sec-heading margin-0">JEJU BUS</p>
                <img src={jejubus} alt="jejuBus" />
                <div className="sec-txt mt-3">
                  <p className="text-sm">기간 : (2024.01.01 ~ 2024.01.25)</p>
                  <p className="project-content">
                    제주에 있는 버스 노선 및 정류소 정보, 실시간 도착 예정 정보,
                    주변 정류소 위치, 버스 시간표, 경로 검색, 그리고 공지사항을
                    제공합니다.
                    <br />
                    Firebase를 활용한 로그인 및 리뷰 관리, 제주 공공 API를 통한
                    공지사항 제공, Naver 및 Kakao Map API를 이용한 경로 및
                    정류소 검색 기능을 구현하였습니다.
                  </p>
                  <div className="project-links-container">
                    <ul>
                      <li className="project-link">
                        <a
                          href="https://jejubus-guide.vercel.app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          사이트 바로가기
                        </a>
                      </li>
                      <li className="project-link">
                        <a
                          href="https://github.com/yerimk9/jejubus-guide"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </li>
                      <li className="project-link">
                        <a
                          href="https://www.notion.so/70b3c54037684531b885cef3d85a8f68"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Notion
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <section className="content img-change">
          <div className="fix-img">
            <div className="img-box">
              <img src={bg2Img} alt="img2" />
            </div>
          </div>
          <div className="inner-content">
            <div className="txt-wrap">
              <p className="sub-heading">
                <span className="num">02</span>
                프로젝트 - 2
              </p>
              <p className="sec-heading margin-0">NEWS ROOM</p>
              <img src={newsroom} alt="jejuBus" />
              <div className="sec-txt mt-3">
                <p className="text-sm">기간 : (2024.07.19 ~ 2024.07.25)</p>
                <p className="project-content">
                  뉴스 기사 제공 플랫폼은 공공 API를 통해 실시간으로 뉴스 기사를
                  제공하며, GSAP를 이용한 동적인 애니메이션으로 시각적 매력을
                  더합니다. <br />
                  페이지네이션으로 뉴스 목록을 쉽게 탐색할 수 있도록 하고, 랜덤
                  높이 값을 적용해 시각적으로 흥미로운 레이아웃을 구현했습니다.
                </p>
                <div className="project-links-container">
                  <ul>
                    <li className="project-link">
                      <a
                        href="https://news-room-self.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        사이트 바로가기
                      </a>
                    </li>
                    <li className="project-link">
                      <a
                        href="https://github.com/yerimk9/news-room"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content img-change">
          <div className="fix-img">
            <div className="img-box">
              <img src={bg2Img} alt="img2" />
            </div>
          </div>
          <div className="inner-content">
            <div className="txt-wrap">
              <p className="sub-heading">
                <span className="num">02</span>
                프로젝트 - 3
              </p>
              <p className="sec-heading margin-0">새미네 부엌 클론코딩</p>
              <img src={semi} alt="semi" />
              <div className="sec-txt mt-3">
                <p className="text-sm">기간 : (2024.08.01 ~ 2024.08.09)</p>
                <p className="project-content">
                  이 프로젝트는 유명한 "새미네 부엌" 웹사이트를 클론 코딩한
                  프로젝트입니다. "새미네 부엌"은 다양한 요리 레시피와 콘텐츠를
                  제공하는 플랫폼으로, 그 기능과 디자인을 최대한 유사하게
                  재현하는 것을 목표로 했습니다. 본 프로젝트는 HTML, CSS,
                  JavaScript를 기반으로 하며, 주요 라이브러리로 Swiper.js와
                  GSAP를 활용하여 사용자 경험을 풍부하게 만들었습니다.
                </p>
                <div className="project-links-container">
                  <ul>
                    <li className="project-link">
                      <a
                        href="https://semie-clone2.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        사이트 바로가기
                      </a>
                    </li>
                    <li className="project-link">
                      <a
                        href="https://github.com/yerimk9/semie_clone2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
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
                    <li>
                      <a
                        href="https://rhrh0377.tistory.com/"
                        className="flex-box"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="icon">
                          <img src={blog} alt="blog" />
                        </div>
                        <div className="txt-box">
                          <p>
                            <span>BLOG</span>
                            https://rhrh0377.tistory.com/
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

        <div className={`fix-content fix-left ${isNavVisible ? "zindex" : ""}`}>
          <div className="box-top">
            <h1 className="header_title">
              <SmallLogo />
            </h1>
          </div>
          <div className="box-middle">
            <div className="img-box"></div>
          </div>
          <div className={`box-bottom ${isNavVisible ? "" : "hidden"}`}>
            <Nav />
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
