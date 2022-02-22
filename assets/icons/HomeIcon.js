import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
      stroke="#9BA4AB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22V12h6v10"
      stroke="#9BA4AB"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeIcon;
