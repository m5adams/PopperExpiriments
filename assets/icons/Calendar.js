import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const Calendar = () => (
  <Svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.667 1.917v2.875M15.334 1.917v2.875M3.354 8.711h16.292M20.125 8.146v8.146c0 2.875-1.438 4.791-4.792 4.791H7.667c-3.354 0-4.792-1.916-4.792-4.791V8.146c0-2.875 1.438-4.792 4.792-4.792h7.666c3.354 0 4.792 1.917 4.792 4.792Z"
      stroke="#8E8B8B"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.04 13.13h.01M15.04 16.004h.01M11.496 13.13h.008M11.496 16.004h.008M7.949 13.13h.008M7.949 16.004h.008"
      stroke="#8E8B8B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Calendar;
