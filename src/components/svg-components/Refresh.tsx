import React from 'react';
import SVGIcon, { SVGIconProps } from './SVGIcon';

const Refresh: React.FC<SVGIconProps> = ({ color, opacity }) => {
  return (
    <SVGIcon color={color} opacity={opacity}>
      <path d="M15 7.467V2l-2.154 2.214a6.101 6.101 0 00-4.582-2.071C4.806 2.143 2 5.023 2 8.575 2 12.128 4.806 15 8.264 15c2.613 0 4.851-1.637 5.783-3.976.038-.1.057-.2.057-.296 0-.415-.316-.751-.72-.751a.73.73 0 00-.654.425c-.018.029-.028.068-.038.097-.73 1.767-2.44 3.01-4.428 3.01-2.652 0-4.804-2.21-4.804-4.934 0-2.723 2.152-4.934 4.804-4.934a4.69 4.69 0 013.553 1.628l-2.16 2.219c0-.042 5.343-.021 5.343-.021" />
    </SVGIcon>
  );
};

export default Refresh;
