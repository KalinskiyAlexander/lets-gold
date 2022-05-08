import React, { FC } from 'react';

import * as allIcons from './index';
import { IIconsProps } from './types';

export const Icons: FC<IIconsProps> = ({ type, classes, color }) => {
  const { width, height } = classes;

  const svgItems = [
    {
      name: 'logo',
      component: () => allIcons.logo({ width: width, height: height, color: color }),
    },
    {
      name: 'user',
      component: () => allIcons.user({ width: width, height: height, color: color }),
    },

  ];

  return <>{svgItems.filter((x) => x.name === type)[0].component()}</>;
};
