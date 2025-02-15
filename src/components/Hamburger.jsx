import React from "react";

function Hamburger({ isOpen, ...rest }) {
  return (
    <svg
      id="Icon_ionic-ios-menu"
      data-name="Icon ionic-ios-menu"
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="15.75"
      viewBox="0 0 27 15.75"
      {...rest}
    >
      <path
        id="Path_13772"
        data-name="Path 13772"
        d="M30.375,12.375H5.625A1.128,1.128,0,0,1,4.5,11.25h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,11.25h0A1.128,1.128,0,0,1,30.375,12.375Z"
        transform="translate(-4.5 -10.125)"
      />
      <path
        id="Path_13773"
        data-name="Path 13773"
        d="M30.375,19.125H5.625A1.128,1.128,0,0,1,4.5,18h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,18h0A1.128,1.128,0,0,1,30.375,19.125Z"
        transform="translate(-4.5 -10.125)"
      />
      <path
        id="Path_13774"
        data-name="Path 13774"
        d="M30.375,25.875H5.625A1.128,1.128,0,0,1,4.5,24.75h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,24.75h0A1.128,1.128,0,0,1,30.375,25.875Z"
        transform="translate(-4.5 -10.125)"
      />
    </svg>
  );
}

export default Hamburger;
