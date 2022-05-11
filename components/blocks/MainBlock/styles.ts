import styled from "styled-components";


export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`
export const WelcomeBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const WelcomeText = styled.span`
  font-size: 46px;
  line-height: 56px;
  background: -webkit-linear-gradient(#FFFFFF, #969696);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const WelcomeLogoText = styled.span`
  margin-top: 20px;
  font-size: 46px;
  line-height: 56px;
  background: -webkit-linear-gradient(#F5C830, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
