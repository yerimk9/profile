import React from "react";

function SmallLogo(props) {
  return (
    <div className="titleLogo-container">
      <svg
        className="titleLogo-subTitle"
        viewBox="0 0 450 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="curve" d="M10,70 C150,20 390,10 690,65" fill="transparent" />
        <text>
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            welcome
          </textPath>
        </text>
      </svg>
      <h1 className="titleLogo-title">김포폴</h1>
    </div>
  );
}

export default SmallLogo;
