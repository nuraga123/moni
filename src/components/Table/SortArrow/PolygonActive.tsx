import React from "react";
import { PolygonProps } from "./PolygonDefault";

const PolygonActive: React.FC<PolygonProps> = ({
  fill = "#FAFAFA",
  width = 7,
  height = 5,
  rotate = 0,
  toggleActiveBtn,
}) => (
  <svg
    onClick={toggleActiveBtn}
    className={`${rotate ? "rotate-180 mb-[2px]" : ""}`}
    width={width}
    height={height}
    viewBox="0 0 7 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.0853 3.88433C3.28348 4.17856 3.71651 4.17856 3.9147 3.88433L6.00615 0.779331C6.22985 0.447217 5.99188 0 5.59145 0H1.40855C1.00812 0 0.770145 0.447217 0.993849 0.77933L3.0853 3.88433Z"
      fill={fill}
    />
  </svg>
);

export default PolygonActive;
