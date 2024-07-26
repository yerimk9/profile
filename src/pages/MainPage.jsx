import React, { useState, useEffect } from "react";

function MainPage() {
  const [currentImage, setCurrentImage] = useState(
    "https://i.pinimg.com/originals/b5/9d/8f/b59d8f8cbb54368862109db8324dc6b8.jpg"
  ); // 맨 처음에 보여줄 사진

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // 화면 너비가 768픽셀 이하일 경우 이미지 고정
    if (window.innerWidth <= 768) {
      setCurrentImage(
        "https://i.pinimg.com/originals/b5/9d/8f/b59d8f8cbb54368862109db8324dc6b8.jpg"
      );
      return;
    }

    // 화면 너비가 768픽셀 이상일 경우 스크롤에 따라 이미지 변경
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

  useEffect(() => {
    // 처음 렌더링될 때와 화면 크기 변경 시 스크롤 이벤트 핸들러 설정
    handleScroll(); // 초기 이미지 설정
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // 화면 크기 변경 시 이미지 업데이트
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
          <a href="/" className="read_more scroll">
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>d</span>
            <span>&nbsp;</span>
            <span>m</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
          </a>
        </div>
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
                내일
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
                <span className="num">00</span>
                내일
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
                <span className="num">00</span>
                내일
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
                <span className="num">00</span>
                내일
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

        <section className="other-content">
          <div className="sns-box">
            <div className="flex-box">
              <p className="tit">SNS</p>
              <div className="list">
                <ul>
                  <li>
                    <a href="https://twitter.com/cam_i_poipoi" class="flex-box">
                      <div className="icon">
                        <img
                          src="https://cocochi.design/wp-content/uploads/2023/01/icon_twitter.svg"
                          alt=""
                        />
                      </div>
                      <div className="txt-box">
                        <p>
                          <span>트위터</span>
                          흐리게
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/cam_i_poipoi/"
                      className="flex-box"
                    >
                      <div className="icon">
                        <img
                          src="https://cocochi.design/wp-content/uploads/2023/01/icon_instagram.svg"
                          alt=""
                        />
                      </div>
                      <div className="txt-box">
                        <p>
                          <span>Instagram @cam_i_poipoi</span>
                          사진을 흘려
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/poipoi_no_ie/"
                      className="flex-box"
                    >
                      <div className="icon">
                        <img
                          src="https://cocochi.design/wp-content/uploads/2023/01/icon_instagram.svg"
                          alt=""
                        />
                      </div>
                      <div className="txt-box">
                        <p>
                          <span>Instagram @poipoi_no_ie</span>
                          나의 집을 흘려
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pencilman_pitsuwo/"
                      className="flex-box"
                    >
                      <div className="icon">
                        <img
                          src="https://cocochi.design/wp-content/uploads/2023/01/icon_instagram.svg"
                          alt=""
                        />
                      </div>
                      <div className="txt-box">
                        <p>
                          <span>Instagram @pencilman_pitsuwo</span>내 가장 친한
                          친구 인 엔 피츠오입니다.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
                      d="M10,55 C150,20 390,10 690,65"
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
          <div className="box-bottom">
            <nav className="nav">
              <ul className="nav_lists">
                <li className="nav_list">
                  <a className="nav_link" href="https://cocochi.design">
                    집<span>홈</span>
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    className="nav_link"
                    href="https://cocochi.design/#linkThink"
                  >
                    기모치<span>attitude</span>
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    className="nav_link"
                    href="https://cocochi.design/#linkWork"
                  >
                    시루시<span>works</span>
                  </a>
                </li>
                <li className="nav_list">
                  <a className="nav_link" href="https://cocochi.design/profile">
                    나<span>프로필</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="nav_other">
              <p className="text-link contact-btn">
                <a className="fuwafuwa1" href="https://cocochi.design/contact">
                  <img
                    src="https://cocochi.design/wp-content/themes/cocochi/images/btn_contact.svg"
                    alt=""
                  />
                </a>
              </p>
              <p className="credit">copyright onf Inc.</p>
            </div>
          </div>
          <div className="nav_trigger">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
