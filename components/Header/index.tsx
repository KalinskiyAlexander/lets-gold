import React from 'react';
import {MenuList} from "components/Header/styles";
import Link from "next/link";

export const Header = () => {
  const routes = [
    {path: '/', title: 'Главная'},
    {path: '/products', title: 'Товары'},
    {path: '/about', title: 'О нас'},
    {path: '/guarantees', title: 'Гарантии'},
    {path: '/reviews', title: 'Отзывы'},
    {path: '/contacts', title: 'Гарантии'},
    {path: '/faq', title: 'FAQ'},
  ]
  return (
   <div>
     <MenuList>
       {routes.map(list => {
         return (
          <Link href={list.path}>
            {list.title}
          </Link>
         )
       })}

     </MenuList>
   </div>

  );
};

