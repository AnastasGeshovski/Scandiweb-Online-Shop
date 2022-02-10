import * as React from "react"

const BagLogo = (props) => { 
return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    xmlSpace="preserve"
    {...props}
  >
    <image
      width={40}
      height={40}
      href={"data:image/png;base64,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 vBpHMwAAAABJRU5ErkJggg=="}
    />
  </svg>
)};

export default BagLogo;
