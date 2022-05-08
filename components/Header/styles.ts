import styled from "styled-components";
import {colors} from "styles/colors";

export const MenuList = styled.ul`
  display: flex;
  justify-content: center; 
  margin:0;
  padding: 40px 0;
  z-index: 9;
  position: relative;
  color: red;
  
  li {
    list-style: none;
    margin: 0 22px;
    color: ${colors.white}
  }

`
