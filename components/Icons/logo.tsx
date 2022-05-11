import React, { FC } from 'react';
import { IIconProps } from './types';
import {colors} from "styles/colors";

export const logo: FC<IIconProps> = ({ width: width, height: height, color }) => {
  return (
   <svg width={width} height={height} viewBox="0 0 66 59" fill="none">
     <path d="M4.63784 51.4841L0 59H66L33.1784 0L8.20541 43.9682H17.1243L33.1784 13.9045L54.227 51.4841H4.63784Z" fill={color || colors.accent}/>
   </svg>

  );
};
