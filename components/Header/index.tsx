import React from 'react';
import {Blocks, Gradient, LogoBlock, LogoText, MenuList} from "components/Header/styles";
import Link from "next/link";
import {Container} from "styles/common";
import {Icons} from "components/Icons/Icons";

export const Header = () => {
  const routes = [
    {id: 1, path: '/', title: 'Главная'},
    {id: 2, path: '/products', title: 'Товары'},
    {id: 3, path: '/about', title: 'О нас'},
    {id: 4, path: '/guarantees', title: 'Гарантии'},
    {id: 5, path: '/reviews', title: 'Отзывы'},
    {id: 6, path: '/contacts', title: 'Гарантии'},
    {id: 7, path: '/faq', title: 'FAQ'},
  ]
  return (

   <Gradient>
     <Container>
       <Blocks>
         <LogoBlock>
           <Icons type={'logo'} classes={{height: 66, width: 59}}/>
           <LogoText>LetsGold</LogoText>
         </LogoBlock>
         <MenuList>
           {routes.map(list => {
             return (
              <li key={list.id}>
                <Link href={list.path} as={list.path}>
                  <a>{list.title}</a>
                </Link>
              </li>
             )
           })}
         </MenuList>

         <Icons type={'user'} classes={{height: 28, width: 28}}/>
       </Blocks>
     </Container>
   </Gradient>


  );
};

