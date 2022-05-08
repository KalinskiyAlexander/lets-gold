import React from 'react';
import {Wrapper} from './styles';
import Image from 'next/image';
import bg from 'assets/img/bg.jpg'

export const MainBlock = () => {
  return (
   <Wrapper>
     <Image src={bg} alt="Image description" layout="fill" objectFit="cover" style={{zIndex: -1}}/>
   </Wrapper>
  );
};

