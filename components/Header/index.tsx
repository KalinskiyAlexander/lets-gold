import React from 'react';
import {MenuList} from "components/Header/styles";
import Link from "next/link";
import {Container} from "styles/common";


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
   <Container>
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
   </Container>

  );
};

