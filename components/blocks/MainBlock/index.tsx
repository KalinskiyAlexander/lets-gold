import React from 'react';
import {WelcomeBlock, WelcomeLogoText, WelcomeText, Wrapper} from './styles';
import Image from 'next/image';
import bg from 'assets/img/bg.jpg'

export const MainBlock = () => {
  return (
   <>
     <Wrapper>
       <Image src={bg} alt="Image description" layout="fill" objectFit="cover" style={{zIndex: -1}}/>

     </Wrapper>
     <WelcomeBlock>
       <WelcomeText>
         Добро пожаловать в интернет-магазин
       </WelcomeText>
       <WelcomeLogoText>
         <WelcomeText>LETS</WelcomeText>
         <span>GOLD</span>
       </WelcomeLogoText>
     </WelcomeBlock>

   </>
  );
};

