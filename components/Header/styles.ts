import styled from "styled-components";
import {colors} from "styles/colors";

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  z-index: 9;
  position: relative;
  color: ${colors.white};
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;

  li {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 20px;
  }
`

export const Gradient = styled.div`
  background-image: linear-gradient(0deg, rgba(255, 0, 0, 0), rgba(4, 17, 43, 0.5));
`

export const Blocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoBlock = styled.div`
  position: relative;
`
export const LogoText = styled.span`
  position: absolute;
  right: 14px;
  bottom: 14px;
  background: -webkit-linear-gradient(#B6B6B6, #FFFBFB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  line-height: 22px;
  z-index: 99;
`
